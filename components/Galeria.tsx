"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const photos = [
  { src: "/images/aerea.webp", alt: "Seu recanto na Serra dos Órgãos", span: "col-span-2 row-span-2" },
  { src: "/images/interior.webp", alt: "Interior com fogo de chão e decoração em madeira", span: "col-span-1 row-span-1" },
  { src: "/images/area gourmet proximo.webp", alt: "Área gourmet com churrasqueira e forno a lenha", span: "col-span-1 row-span-1" },
  { src: "/images/fachada.webp", alt: "Fachada do chalé", span: "col-span-2 row-span-1" },
  { src: "/images/vista da hidromassagem para a serra.webp", alt: "Vista panorâmica da hidromassagem para a serra", span: "col-span-1 row-span-2" },
  { src: "/images/o chalé durante o dia.webp", alt: "O chalé durante o dia", span: "col-span-2 row-span-1" },
  { src: "/images/decoracao romantica.webp", alt: "Quarto com decoração romântica", span: "col-span-1 row-span-1" },
  { src: "/images/entrando na hidromassagem.webp", alt: "Momento relaxante na hidromassagem", span: "col-span-1 row-span-1" },
  { src: "/images/jardim.webp", alt: "Jardim do chalé", span: "col-span-1 row-span-1" },
  { src: "/images/sofá.webp", alt: "Sofá aconchegante próximo ao fogo de chão", span: "col-span-1 row-span-1" },
];

const total = photos.length;
const wrap = (index: number) => ((index % total) + total) % total;

export const Galeria: React.FC = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [isPointerDown, setIsPointerDown] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const startX = useRef(0);

  const prevIdx = lightbox !== null ? wrap(lightbox - 1) : 0;
  const nextIdx = lightbox !== null ? wrap(lightbox + 1) : 0;

  const goTo = useCallback((index: number) => {
    setDragOffset(0);
    setLightbox(wrap(index));
  }, []);

  const goPrev = useCallback(() => goTo((lightbox ?? 0) - 1), [lightbox, goTo]);
  const goNext = useCallback(() => goTo((lightbox ?? 0) + 1), [lightbox, goTo]);
  const close = useCallback(() => { setDragOffset(0); setLightbox(null); }, []);

  useEffect(() => {
    if (lightbox === null) return;
    const h = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [lightbox, goPrev, goNext, close]);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    startX.current = e.clientX;
    setIsPointerDown(true);
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!isPointerDown) return;
    setDragOffset(e.clientX - startX.current);
  }, [isPointerDown]);

  const onPointerUp = useCallback((e: React.PointerEvent) => {
    if (!isPointerDown) return;
    setIsPointerDown(false);
    const w = containerRef.current?.offsetWidth ?? 400;
    const delta = e.clientX - startX.current;
    setDragOffset(0);
    if (Math.abs(delta) > w * 0.2) {
      if (delta < 0) goNext();
      else goPrev();
    }
  }, [isPointerDown, goNext, goPrev]);

  const thumbIndices = lightbox !== null
    ? [-2, -1, 0, 1, 2].map((o) => wrap(lightbox + o))
    : [];

  return (
    <section id="galeria" className="py-28 bg-section-a">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="text-center mb-14">
          <span className="tag-badge mb-5 mx-auto block w-fit">Em imagens</span>
          <h2 className="font-serif text-4xl sm:text-6xl font-bold text-heading">
            O Chalé 4 Elementos
          </h2>
        </div>

        <div className="grid grid-cols-3 grid-rows-5 gap-3 sm:gap-4 h-[680px] sm:h-[900px] lg:h-[1050px]">
          {photos.map((photo, i) => (
            <button
              key={i}
              className={`${photo.span} relative overflow-hidden rounded-xl group focus:outline-none focus-visible:ring-2 focus-visible:ring-terracota`}
              onClick={() => { setDragOffset(0); setLightbox(i); }}
              aria-label={`Ver foto: ${photo.alt}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 brightness-75 group-hover:brightness-90"
                sizes="(max-width:640px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-preto/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-xs text-white/70 font-light leading-tight text-left">{photo.alt}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-preto/95 select-none"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Visualizador de foto"
        >
          <button
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20"
            onClick={close}
            aria-label="Fechar visualizador"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Carousel viewport */}
          <div
            ref={containerRef}
            className="absolute inset-x-0 top-0 overflow-hidden cursor-grab active:cursor-grabbing"
            style={{ bottom: "152px" }}
            onClick={(e) => e.stopPropagation()}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={() => { setIsPointerDown(false); setDragOffset(0); }}
          >
            {/* Track width 300%: each slide = 33.333% of track = exactly 1 viewport.
                translateX(-33.333%) positions the middle slide in view. */}
            <div
              className="flex h-full items-center"
              style={{
                width: "300%",
                transform: `translateX(calc(-33.333% + ${dragOffset}px))`,
                transition: isPointerDown ? "none" : "transform 0.32s cubic-bezier(0.25,0.46,0.45,0.94)",
              }}
            >
              {([prevIdx, lightbox, nextIdx] as number[]).map((idx, slot) => (
                <div
                  key={slot}
                  className="h-full flex items-center justify-center px-6 sm:px-14"
                  style={{ width: "33.333%" }}
                >
                  <Image
                    src={photos[idx].src}
                    alt={photos[idx].alt}
                    width={1200}
                    height={900}
                    className="max-h-full w-auto object-contain pointer-events-none"
                    style={{ maxHeight: "calc(100vh - 200px)" }}
                    draggable={false}
                    priority={slot === 1}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Fixed bottom bar */}
          <div
            className="absolute bottom-0 inset-x-0 h-[152px] flex flex-col items-center justify-end gap-3 pb-6 px-4 bg-gradient-to-t from-preto/90 to-transparent"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-center text-xs sm:text-sm text-white/45 font-light px-4 truncate max-w-lg">
              {photos[lightbox].alt}
            </p>

            <div className="flex items-center gap-2">
              {thumbIndices.map((photoIdx, thumbPos) => {
                const isCurrent = thumbPos === 2;
                return (
                  <button
                    key={thumbPos}
                    onClick={() => goTo(photoIdx)}
                    aria-label={`Ver foto: ${photos[photoIdx].alt}`}
                    className={`relative rounded-lg overflow-hidden shrink-0 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-terracota ${
                      isCurrent
                        ? "w-14 h-14 sm:w-16 sm:h-16 ring-2 ring-terracota brightness-100"
                        : "w-10 h-10 sm:w-12 sm:h-12 opacity-45 hover:opacity-70 brightness-75"
                    }`}
                  >
                    <Image src={photos[photoIdx].src} alt={photos[photoIdx].alt} fill className="object-cover" sizes="64px" />
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-4">
              <button onClick={goPrev} aria-label="Foto anterior" className="p-2.5 rounded-full bg-white/10 hover:bg-terracota border border-white/15 hover:border-terracota text-white transition-all duration-200 shadow-lg">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs text-white/30 tabular-nums tracking-widest min-w-[3rem] text-center">
                {lightbox + 1} / {total}
              </span>
              <button onClick={goNext} aria-label="Próxima foto" className="p-2.5 rounded-full bg-white/10 hover:bg-terracota border border-white/15 hover:border-terracota text-white transition-all duration-200 shadow-lg">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
