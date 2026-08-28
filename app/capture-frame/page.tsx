"use client";
import { useRef, useState } from "react";

export default function CaptureFrame() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [dataUrl, setDataUrl] = useState<string | null>(null);

  const capture = () => {
    const video = videoRef.current;
    if (!video) return;
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const url = canvas.toDataURL("image/webp", 0.9);
    setDataUrl(url);
  };

  return (
    <div style={{ padding: 20, background: "#000", color: "#fff", minHeight: "100vh" }}>
      <h1>Capture First Frame</h1>
      <video
        ref={videoRef}
        src="/videos/v2.mp4"
        muted
        playsInline
        onLoadedData={capture}
        style={{ maxWidth: 800 }}
      />
      {dataUrl && (
        <div>
          <p>Frame captured ({Math.round(dataUrl.length / 1024)} KB)</p>
          <a href={dataUrl} download="hero-poster.webp" id="download-link"
            style={{ color: "#0ff", fontSize: 20 }}>
            📥 Download hero-poster.webp
          </a>
          <br /><br />
          <img src={dataUrl} alt="Captured frame" style={{ maxWidth: 800 }} />
        </div>
      )}
    </div>
  );
}
