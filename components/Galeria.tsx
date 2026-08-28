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
  const [isDragging, setIsDragging] = useState(false);
  // translateX offset in px — 0 means current slide centered
  const [offset, setOffset] = useState(0);
  const [animating, setAnimating] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const startX = useRef(0);
  const startOffset = useRef(0);
  const lastTime = useRef(0);
  const lastX = useRef(0);
  const velocity = useRef(0);

  const getSlideWidth = useCallback(() => containerRef.current?.offsetWidth ?? 400, []);

  const goTo = useCallback((index: number) => {
    setOffset(0);
    setAnimating(false);
    setLightbox(wrap(index));
  }, []);

  const goPrev = useCallback(() => {
    const w = getSlideWidth();
    setAnimating(true);
    setOffset(w);
    setTimeout(() => {
      setLightbox((prev) => wrap((prev ?? 0) - 1));
      setOffset(0);
      setAnimating(false);
    }, 300);
  }, [getSlideWidth]);

  const goNext = useCallback(() => {
    const w = getSlideWidth();
    setAnimating(true);
    setOffset(-w);
    setTimeout(() => {
      setLightbox((prev) => wrap((prev ?? 0) + 1));
      setOffset(0);
      setAnimating(false);
    }, 300);
  }, [getSlideWidth]);

  const close = useCallback(() => {
    setOffset(0);
    setAnimating(false);
    setLightbox(null);
  }, []);

  // Snap to nearest slide after drag ends
  const snapToNearest = useCallback((currentOffset: number, vel: number) => {
    const w = getSlideWidth();
    // Factor in velocity for momentum
    const projected = currentOffset + vel * 0.15;
    let targetSlideOffset = 0;

    if (Math.abs(projected) > w * 0.2) {
      // Moved enough to go to next/prev
      targetSlideOffset = projected > 0 ? w : -w;
    }

    setAnimating(true);
    setOffset(targetSlideOffset);

    setTimeout(() => {
      if (targetSlideOffset > 0) {
        setLightbox((prev) => wrap((prev ?? 0) - 1));
      } else if (targetSlideOffset < 0) {
        setLightbox((prev) => wrap((prev ?? 0) + 1));
      }
      setOffset(0);
      setAnimating(false);
    }, 300);
  }, [getSlideWidth]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightbox === null) return;
    const scrollY = window.scrollY;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      window.scrollTo(0, scrollY);
    };
  }, [lightbox]);

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

  // Touch handlers — image follows finger 1:1
  const onTouchStart = useCallback((e: React.TouchEvent) => {
    if (animating) return;
    const x = e.touches[0].clientX;
    startX.current = x;
    startOffset.current = offset;
    lastX.current = x;
    lastTime.current = Date.now();
    velocity.current = 0;
    setIsDragging(true);
    setAnimating(false);
  }, [animating, offset]);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].clientX;
    const now = Date.now();
    const dt = now - lastTime.current;
    if (dt > 0) {
      velocity.current = (x - lastX.current) / dt * 1000; // px/s
    }
    lastX.current = x;
    lastTime.current = now;
    setOffset(startOffset.current + (x - startX.current));
  }, [isDragging]);

  const onTouchEnd = useCallback(() => {
    if (!isDragging) return;
    setIsDragging(false);
    snapToNearest(offset, velocity.current);
  }, [isDragging, offset, snapToNearest]);

  // Mouse handlers for desktop
  const onMouseDown = useCallback((e: React.MouseEvent) => {
    if (animating) return;
    startX.current = e.clientX;
    startOffset.current = offset;
    lastX.current = e.clientX;
    lastTime.current = Date.now();
    velocity.current = 0;
    setIsDragging(true);
    setAnimating(false);
  }, [animating, offset]);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return;
    const x = e.clientX;
    const now = Date.now();
    const dt = now - lastTime.current;
    if (dt > 0) {
      velocity.current = (x - lastX.current) / dt * 1000;
    }
    lastX.current = x;
    lastTime.current = now;
    setOffset(startOffset.current + (x - startX.current));
  }, [isDragging]);

  const onMouseUp = useCallback(() => {
    if (!isDragging) return;
    setIsDragging(false);
    snapToNearest(offset, velocity.current);
  }, [isDragging, offset, snapToNearest]);

  // Build visible slides: prev2, prev, current, next, next2
  const visibleIndices = lightbox !== null
    ? [-2, -1, 0, 1, 2].map((o) => wrap(lightbox + o))
    : [];

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
              onClick={() => { setOffset(0); setAnimating(false); setLightbox(i); }}
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

          {/* Description above bottom bar */}
          <p
            className="absolute inset-x-0 text-center text-xs sm:text-sm text-white/50 font-light px-6 truncate max-w-lg mx-auto z-10"
            style={{ bottom: "168px" }}
          >
            {photos[lightbox].alt}
          </p>

          {/* Carousel viewport */}
          <div
            ref={containerRef}
            className="absolute inset-x-0 top-0 overflow-hidden cursor-grab active:cursor-grabbing touch-none"
            style={{ bottom: "192px" }}
            onClick={(e) => e.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={() => { if (isDragging) { setIsDragging(false); snapToNearest(offset, velocity.current); } }}
          >
            {/* 5 slides: each 100% viewport width, centered on slide index 2 (offset 0).
                translateX = -200% puts the center slide (index 2) in view, then we add the drag offset. */}
            <div
              className="flex h-full items-center"
              style={{
                width: "500%",
                transform: `translateX(calc(-40% + ${offset}px))`,
                transition: isDragging ? "none" : "transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              }}
            >
              {visibleIndices.map((idx, slot) => (
                <div
                  key={slot}
                  className="h-full flex items-center justify-center px-6 sm:px-14"
                  style={{ width: "20%" }}
                >
                  <Image
                    src={photos[idx].src}
                    alt={photos[idx].alt}
                    width={1200}
                    height={900}
                    className="max-h-full w-auto object-contain pointer-events-none"
                    style={{ maxHeight: "calc(100vh - 240px)" }}
                    draggable={false}
                    priority={slot === 2}
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
