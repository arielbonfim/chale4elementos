"use client";

import React from "react";
import { MapPin, Clock, ShieldCheck, Car, Navigation } from "lucide-react";

const distanciasAcesso = [
  { icon: Clock, label: "A menos de 5 minutos da rodovia" },
  { icon: Clock, label: "15 minutos do centro de Teresópolis" },
  { icon: ShieldCheck, label: "Condomínio fechado com segurança 24h" },
  { icon: MapPin, label: "Mercado e farmácia por perto" },
  { icon: Car, label: "Estacionamento interno e seguro" },
];

const pontosTuristicos = [
  { icon: Clock, label: "30 minutos da Vinícola Maturano" },
  { icon: Clock, label: "30 minutos da Cachoeira dos Frades" },
  { icon: Clock, label: "20 minutos da Cervejaria Saint Gallen" },
  { icon: Clock, label: "25 minutos do Parque Nacional da Serra dos Órgãos" },
];

const ENDERECO =
  "Rua Soares Teixeira, condomínio fazenda inglesa, lote 1 quadra 15, Pessegueiros, Teresópolis, RJ, 25980-150";

const ENDERECO_ENCODED = encodeURIComponent(ENDERECO);
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${ENDERECO_ENCODED}`;
const MAPS_EMBED_URL = `https://www.google.com/maps?q=${ENDERECO_ENCODED}&output=embed`;

export const Localizacao: React.FC = () => {
  return (
    <section id="localizacao" className="py-28 bg-section-a relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 dark:bg-mata/40 bg-mata/15 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* ── Header ── */}
        <div className="mb-16 max-w-lg">
          <span className="tag-badge mb-5 block w-fit">Perto de tudo, longe do barulho</span>
          <h2 className="font-serif text-4xl sm:text-6xl font-bold text-heading leading-tight mb-6">
            Fácil de chegar
          </h2>
          <div className="section-divider" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 lg:items-stretch">

          {/* Left — text */}
          <div className="space-y-8 flex flex-col justify-between">
            <p className="text-body text-base sm:text-lg leading-relaxed font-light">
              A menos de 5 minutos da rodovia e a 15 do centro de Teresópolis, dentro de um
              condomínio com segurança 24 horas e ruas bem sinalizadas até a porta.
            </p>

            {/* Boxes com listas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Caixa 1: Acesso & Facilidades */}
              <div className="card-adaptive p-5 rounded-2xl flex flex-col justify-between">
                <p className="text-xs text-terracota font-semibold uppercase tracking-wider mb-3.5">
                  Acesso & Estrutura
                </p>
                <ul className="space-y-3" aria-label="Informações de acesso e segurança">
                  {distanciasAcesso.map((d, i) => {
                    const Icon = d.icon;
                    return (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-body">
                        <div className="w-6 h-6 rounded-md icon-bg-adaptive flex items-center justify-center shrink-0 mt-0.5">
                          <Icon className="w-3.5 h-3.5 text-terracota" aria-hidden="true" />
                        </div>
                        <span className="leading-snug">{d.label}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Caixa 2: Atrações & Pontos Turísticos */}
              <div className="card-adaptive p-5 rounded-2xl flex flex-col justify-between">
                <p className="text-xs text-terracota font-semibold uppercase tracking-wider mb-3.5">
                  Pontos Turísticos
                </p>
                <ul className="space-y-3" aria-label="Distâncias de pontos turísticos">
                  {pontosTuristicos.map((d, i) => {
                    const Icon = d.icon;
                    return (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-body">
                        <div className="w-6 h-6 rounded-md icon-bg-adaptive flex items-center justify-center shrink-0 mt-0.5">
                          <Icon className="w-3.5 h-3.5 text-terracota" aria-hidden="true" />
                        </div>
                        <span className="leading-snug">{d.label}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div>
              <p className="text-xs label-adaptive mb-2 uppercase tracking-widest font-semibold">
                Teresópolis — Região Serrana do Rio de Janeiro
              </p>
              <p className="text-sm text-muted-t mb-4 leading-relaxed">{ENDERECO}</p>
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
            className="relative aspect-video lg:aspect-auto lg:h-full rounded-2xl overflow-hidden dark:border-white/10 border-black/10 shadow-2xl dark:bg-granito-dark bg-stone-100 group block"
            aria-label="Abrir localização no Google Maps"
          >
            <div className="absolute inset-0 overflow-hidden dark:bg-granito-dark bg-stone-200">
              <iframe
                src={MAPS_EMBED_URL}
                className="w-full h-full border-0 pointer-events-none scale-[1.02] dark:[filter:invert(92%)_hue-rotate(180deg)_brightness(0.82)_contrast(0.95)_saturate(0.75)]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa da localização do chalé"
              />
            </div>

            <div
              className="absolute inset-0 dark:bg-granito-dark/25 dark:mix-blend-multiply pointer-events-none"
              aria-hidden="true"
            />

            <div
              className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent group-hover:from-black/85 transition-colors pointer-events-none"
              aria-hidden="true"
            />

            <div className="absolute bottom-0 inset-x-0 p-5 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-full bg-terracota flex items-center justify-center shrink-0 shadow-lg shadow-terracota/30">
                  <MapPin className="w-5 h-5 text-white" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-white truncate">Condomínio Fazenda Inglesa</p>
                  <p className="text-xs text-white/75">Toque para abrir no Maps</p>
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
