"use client";

import React from "react";

export const VideoTour: React.FC = () => {
  return (
    <section id="tour" className="py-28 bg-terra-dark relative overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br from-mata/40 via-terra/60 to-preto/80 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 lg:items-center">

          {/* Text */}
          <div className="text-center lg:text-left">
            <span className="tag-badge mb-5 mx-auto lg:mx-0 block w-fit">Antes de chegar</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-5">
              Um passeio pelo chalé
            </h2>
            <p className="text-white/55 text-base sm:text-lg font-light max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              A hidromassagem, a área gourmet, os detalhes da decoração — um breve percurso pelos
              ambientes, para se antecipar à estadia.
            </p>
          </div>

          {/* Video — vertical */}
          <div className="relative mx-auto lg:ml-auto lg:mr-0 w-full max-w-[280px] sm:max-w-xs aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-preto">
            <video
              src="/videos/v3.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              aria-label="Tour em vídeo pelo chalé"
            />

            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-preto/70 text-[10px] text-white/40 tracking-widest uppercase border border-white/10 pointer-events-none">
              Tour em vídeo
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
