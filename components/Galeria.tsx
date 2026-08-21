"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
    alt: "Hidromassagem com vista para a Serra dos Órgãos",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
    alt: "Interior com lareira e decoração em madeira",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1544025162-d76538b2a21d?auto=format&fit=crop&w=800&q=80",
    alt: "Área gourmet com churrasqueira e forno a lenha",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
    alt: "Fachada do chalé em contraste com a mata atlântica",
    span: "col-span-2 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
    alt: "Mata atlântica densa envolvendo o chalé",
    span: "col-span-1 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80",
    alt: "Quarto com decoração romântica e vista para a natureza",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
    alt: "Sofá aconchegante à lareira com neblina ao fundo",
    span: "col-span-1 row-span-1",
  },
];

export const Galeria: React.FC = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="galeria" className="py-28 bg-preto">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* ── Header ── */}
        <div className="text-center mb-14">
          <span className="tag-badge mb-5 mx-auto block w-fit">Em imagens</span>
          <h2 className="font-serif text-4xl sm:text-6xl font-bold text-white">
            O Chalé 4 Elementos
          </h2>
        </div>

        {/* ── Mosaic grid ── */}
        <div className="grid grid-cols-3 grid-rows-4 gap-3 sm:gap-4 h-[520px] sm:h-[700px] lg:h-[820px]">
          {photos.map((photo, i) => (
            <button
              key={i}
              className={`${photo.span} relative overflow-hidden rounded-xl group focus:outline-none focus-visible:ring-2 focus-visible:ring-terracota`}
              onClick={() => setLightbox(i)}
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
                <span className="text-xs text-white/70 font-light leading-tight text-left">
                  {photo.alt}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ── Lightbox ── */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-preto/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Visualizador de foto"
        >
          <button
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Fechar visualizador"
          >
            <X className="w-6 h-6" />
          </button>
          <div
            className="relative max-w-4xl w-full rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[lightbox].src}
              alt={photos[lightbox].alt}
              width={1200}
              height={800}
              className="w-full h-auto object-contain"
            />
            <p className="text-center text-sm text-white/50 mt-3 font-light px-4">
              {photos[lightbox].alt}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
