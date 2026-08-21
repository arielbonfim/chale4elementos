"use client";

import React, { useRef, useState } from "react";
import { MapPin, Clock, ShieldCheck, Car, Navigation, Play, Pause } from "lucide-react";

const distancias = [
  { icon: Clock, label: "A menos de 5 minutos da rodovia" },
  { icon: Clock, label: "15 minutos do centro de Teresópolis" },
  { icon: ShieldCheck, label: "Condomínio fechado com segurança 24h" },
  { icon: MapPin, label: "Mercado e farmácia por perto" },
  { icon: Car, label: "Estacionamento interno e seguro" },
];

const MAPS_URL = "https://maps.google.com/?q=Teresópolis,+RJ";

export const Localizacao: React.FC = () => {
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
    <section id="localizacao" className="py-28 bg-granito-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-mata/40 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* ── Header ── */}
        <div className="mb-16 max-w-lg">
          <span className="tag-badge mb-5 block w-fit">Perto de tudo, longe do barulho</span>
          <h2 className="font-serif text-4xl sm:text-6xl font-bold text-white leading-tight mb-6">
            Fácil de chegar
          </h2>
          <div className="section-divider" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left — text */}
          <div className="space-y-8">
            <p className="text-white/60 text-base sm:text-lg leading-relaxed font-light">
              A menos de 5 minutos da rodovia e a 15 do centro de Teresópolis, dentro de um
              condomínio com segurança 24 horas e ruas bem sinalizadas até a porta.
            </p>

            <ul className="space-y-3" aria-label="Informações de localização">
              {distancias.map((d, i) => {
                const Icon = d.icon;
                return (
                  <li key={i} className="flex items-center gap-3.5 text-sm text-white/65">
                    <div className="w-8 h-8 rounded-lg bg-mata border border-musgo/30 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-terracota" aria-hidden="true" />
                    </div>
                    {d.label}
                  </li>
                );
              })}
            </ul>

            <div>
              <p className="text-xs text-white/35 mb-4 uppercase tracking-widest font-semibold">
                Teresópolis — Região Serrana do Rio de Janeiro
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-terra inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold"
              >
                <Navigation className="w-4 h-4" aria-hidden="true" />
                Abrir no Google Maps
              </a>
            </div>
          </div>

          {/* Right — video */}
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-preto group">
            <video
              ref={videoRef}
              src="/videos/chegada.mp4"
              poster="/images/chegada-poster.jpg"
              playsInline
              className="w-full h-full object-cover"
              onEnded={() => setPlaying(false)}
            />

            {!playing && (
              <div
                className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer bg-preto/55 group-hover:bg-preto/45 transition-colors"
                onClick={togglePlay}
                role="button"
                aria-label="Assistir vídeo de chegada ao chalé"
              >
                <div className="relative flex items-center justify-center mb-3">
                  <span className="absolute w-16 h-16 rounded-full bg-terracota/25 animate-ping" aria-hidden="true" />
                  <div className="relative w-[60px] h-[60px] rounded-full bg-terracota flex items-center justify-center shadow-xl shadow-terracota/30 hover:scale-105 transition-transform">
                    <Play className="w-6 h-6 text-white ml-1 fill-white" aria-hidden="true" />
                  </div>
                </div>
                <span className="text-sm text-white/65 font-light">Ver chegada ao chalé</span>
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
          </div>
        </div>
      </div>
    </section>
  );
};
