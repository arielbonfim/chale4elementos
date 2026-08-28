import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const ALLOWED_VIDEOS: Record<string, string> = {
  v2: "v2.mp4",
  v3: "v3.mp4",
};

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const videoKey = searchParams.get("name") || searchParams.get("v") || "v2";
  const filename = ALLOWED_VIDEOS[videoKey] || ALLOWED_VIDEOS["v2"];
  const filePath = path.join(process.cwd(), "public", "videos", filename);

  if (!fs.existsSync(filePath)) {
    return new NextResponse("Video not found", { status: 404 });
  }

  const stat = fs.statSync(filePath);
  const fileSize = stat.size;
  const rangeHeader = request.headers.get("range");

  if (!rangeHeader) {
    const fileStream = fs.createReadStream(filePath);
    const readableStream = nodeStreamToWebStream(fileStream);

    return new NextResponse(readableStream, {
      status: 200,
      headers: {
        "Content-Length": fileSize.toString(),
        "Content-Type": "video/mp4",
        "Accept-Ranges": "bytes",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  }

  const parts = rangeHeader.replace(/bytes=/, "").split("-");
  const start = parseInt(parts[0], 10);
  const maxChunk = 1024 * 1024; // 1MB buffer chunk for instant playback
  const end = parts[1]
    ? parseInt(parts[1], 10)
    : Math.min(start + maxChunk - 1, fileSize - 1);

  const contentLength = end - start + 1;
  const fileStream = fs.createReadStream(filePath, { start, end });
  const readableStream = nodeStreamToWebStream(fileStream);

  return new NextResponse(readableStream, {
    status: 206,
    headers: {
      "Content-Range": `bytes ${start}-${end}/${fileSize}`,
      "Accept-Ranges": "bytes",
      "Content-Length": contentLength.toString(),
      "Content-Type": "video/mp4",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}

function nodeStreamToWebStream(nodeStream: fs.ReadStream) {
  return new ReadableStream({
    start(controller) {
      nodeStream.on("data", (chunk: Buffer | string) => {
        const buffer = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
        controller.enqueue(new Uint8Array(buffer));
      });
      nodeStream.on("end", () => {
        controller.close();
      });
      nodeStream.on("error", (err) => {
        controller.error(err);
      });
    },
    cancel() {
      nodeStream.destroy();
    },
  });
}
