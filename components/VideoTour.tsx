"use client";

import React, { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

export const VideoTour: React.FC = () => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <section id="tour" className="py-28 bg-terra-dark relative overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br from-mata/40 via-terra/60 to-preto/80 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10">
        {/* ── Header ── */}
        <div className="text-center mb-14">
          <span className="tag-badge mb-5 mx-auto block w-fit">Antes de chegar</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-5">
            Um passeio pelo chalé
          </h2>
          <p className="text-white/55 text-base sm:text-lg font-light max-w-2xl mx-auto leading-relaxed">
            A hidromassagem, a área gourmet, os detalhes da decoração — um breve percurso pelos
            ambientes, para se antecipar à estadia.
          </p>
        </div>

        {/* ── Video player ── */}
        <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-preto group">
          <video
            ref={videoRef}
            src="/videos/tour.mp4"
            poster="/images/tour-poster.jpg"
            playsInline
            className="w-full h-full object-cover"
            onEnded={() => setPlaying(false)}
          />

          {!playing && (
            <div
              className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer bg-preto/50 group-hover:bg-preto/40 transition-colors"
              onClick={togglePlay}
              role="button"
              aria-label="Reproduzir vídeo do chalé"
            >
              <div className="relative flex items-center justify-center mb-4">
                <span
                  className="absolute w-20 h-20 rounded-full bg-terracota/25 animate-ping"
                  aria-hidden="true"
                />
                <div className="relative w-[72px] h-[72px] rounded-full bg-terracota flex items-center justify-center shadow-2xl shadow-terracota/40 hover:scale-105 transition-transform">
                  <Play
                    className="w-7 h-7 text-white ml-1 fill-white"
                    aria-hidden="true"
                  />
                </div>
              </div>
              <span className="text-sm text-white/75 font-medium tracking-wide">
                Assistir ao tour pelo chalé
              </span>
            </div>
          )}

          {playing && (
            <button
              onClick={togglePlay}
              className="absolute bottom-4 left-4 p-2.5 rounded-lg bg-preto/70 text-white hover:text-terracota transition-colors"
              aria-label="Pausar vídeo"
            >
              <Pause className="w-5 h-5" aria-hidden="true" />
            </button>
          )}

          <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-preto/70 text-[10px] text-white/40 tracking-widest uppercase border border-white/10">
            Tour em vídeo
          </div>
        </div>
      </div>
    </section>
  );
};
