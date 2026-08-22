"use client";

import React from "react";
import { MapPin, Clock, ShieldCheck, Car, Navigation } from "lucide-react";

const distancias = [
  { icon: Clock, label: "A menos de 5 minutos da rodovia" },
  { icon: Clock, label: "15 minutos do centro de Teresópolis" },
  { icon: ShieldCheck, label: "Condomínio fechado com segurança 24h" },
  { icon: MapPin, label: "Mercado e farmácia por perto" },
  { icon: Car, label: "Estacionamento interno e seguro" },
];

const ENDERECO =
  "Rua Soares Teixeira, condomínio fazenda inglesa, lote 1 quadra 15, Pessegueiros, Teresópolis, RJ, 25980-150";

const ENDERECO_ENCODED = encodeURIComponent(ENDERECO);
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${ENDERECO_ENCODED}`;
const MAPS_EMBED_URL = `https://www.google.com/maps?q=${ENDERECO_ENCODED}&output=embed`;

export const Localizacao: React.FC = () => {
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 lg:items-stretch">

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
              <p className="text-xs text-white/35 mb-2 uppercase tracking-widest font-semibold">
                Teresópolis — Região Serrana do Rio de Janeiro
              </p>
              <p className="text-sm text-white/50 mb-4 leading-relaxed">{ENDERECO}</p>
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

          {/* Right — map preview */}
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="relative aspect-video lg:aspect-auto lg:h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-granito-dark group block"
            aria-label="Abrir localização no Google Maps"
          >
            <div className="absolute inset-0 overflow-hidden bg-granito-dark">
              <iframe
                src={MAPS_EMBED_URL}
                className="w-full h-full border-0 pointer-events-none scale-[1.02] [filter:invert(92%)_hue-rotate(180deg)_brightness(0.82)_contrast(0.95)_saturate(0.75)]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa da localização do chalé"
              />
            </div>

            <div
              className="absolute inset-0 bg-granito-dark/25 mix-blend-multiply pointer-events-none"
              aria-hidden="true"
            />

            <div
              className="absolute inset-0 bg-gradient-to-t from-preto/85 via-preto/20 to-mata/10 group-hover:from-preto/95 transition-colors pointer-events-none"
              aria-hidden="true"
            />

            <div className="absolute bottom-0 inset-x-0 p-5 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-full bg-terracota flex items-center justify-center shrink-0 shadow-lg shadow-terracota/30">
                  <MapPin className="w-5 h-5 text-white" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-white truncate">Condomínio Fazenda Inglesa</p>
                  <p className="text-xs text-white/55">Toque para abrir no Maps</p>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 group-hover:bg-terracota group-hover:border-terracota transition-colors">
                <Navigation className="w-4 h-4 text-white" aria-hidden="true" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
