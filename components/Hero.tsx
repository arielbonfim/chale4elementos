"use client";

import React from "react";
import { MapPin, Star, ChevronDown } from "lucide-react";

const AIRBNB_URL =
  "https://www.airbnb.com.br/rooms/1652473266637923212?source_impression_id=p3_1787857808_P3p_Rc0eOaL3LEP7&review_page_entrypoint=show_all";

const WA_URL =
  "https://wa.me/5521997306232?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20Chal%C3%A9%204%20Elementos.";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#25D366] shrink-0" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export const Hero: React.FC = () => {
  return (
    <section
      className="relative w-full min-h-[100svh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-mata"
    >
      {/* ── Video Background ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero-fallback.jpg"
          className="w-full h-full object-cover scale-105"
        >
          <source src="/videos/v2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-preto/50 via-transparent to-transparent" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-5 sm:px-10 flex flex-col items-center text-center justify-center py-20 sm:py-32 pt-24 sm:pt-36 min-h-[100svh]">
        {/* Location tag */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-preto/50 backdrop-blur-md border border-white/10 text-white/75 text-[10px] sm:text-xs tracking-widest uppercase mb-3 sm:mb-8">
          <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-terracota shrink-0" aria-hidden="true" />
          Teresópolis — Serra Fluminense
        </div>

        {/* H1 */}
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] sm:leading-[1.05] tracking-tight mb-2.5 sm:mb-6 drop-shadow-2xl">
          Chalé{" "}
          <em className="italic text-terracota not-italic">4 Elementos</em>
        </h1>

        {/* Subtitle */}
        <div className="text-[16px] sm:text-base md:text-xl text-white/80 font-light leading-relaxed max-w-2xl mb-4 sm:mb-8 tracking-wide px-2 sm:px-0 space-y-2 sm:space-y-3">
          <p>
            Cercado pelas montanhas mais belas da região serrana, o Chalé 4 Elementos é o lugar perfeito para viver dias inesquecíveis.
          </p>
          <p>
            Sua privacidade única, combinada com todo o conforto que o Chalé oferece, criam uma atmosfera intimista para casais que desejam descansar, se reconectar e celebrar momentos especiais.
          </p>
          <p>
            Cada ambiente foi cuidadosamente pensado para oferecer uma experiência completa.
          </p>
        </div>

        {/* ── CTA Buttons ── */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3.5 w-full max-w-xs sm:max-w-lg mb-3 sm:mb-5">
          {/* Botão Ver disponibilidade (Airbnb) */}
          <a
            href={AIRBNB_URL}
            id="hero-airbnb-cta"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-terra w-full sm:w-64 py-3 sm:py-4 px-5 sm:px-6 rounded-full text-xs sm:text-sm font-semibold tracking-wide text-center uppercase flex items-center justify-center shadow-xl hover:shadow-terracota/40"
          >
            Ver disponibilidade
          </a>

          {/* Botão Conhecer o Chalé (Galeria) */}
          <a
            href="#galeria"
            id="hero-galeria-cta"
            className="w-full sm:w-64 py-3 sm:py-4 px-5 sm:px-6 rounded-full text-xs sm:text-sm font-semibold tracking-wide text-white bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/25 hover:border-white/50 transition-all text-center uppercase flex items-center justify-center shadow-lg"
          >
            Conhecer o Chalé
          </a>
        </div>

        {/* WhatsApp direct contact link */}
        <a
          href={WA_URL}
          id="hero-whatsapp-cta"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs sm:text-sm text-white/80 hover:text-white transition-colors mb-4 sm:mb-8 group"
        >
          <WhatsAppIcon />
          <span className="group-hover:underline underline-offset-4">
            Falar no WhatsApp · (21) 99730-6232
          </span>
        </a>

        {/* Airbnb rating badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-black/40 border border-white/10 text-xs sm:text-sm text-white/70">
          <div className="flex gap-0.5" aria-label="5 estrelas no Airbnb">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-400 text-amber-400"
                aria-hidden="true"
              />
            ))}
          </div>
          <span className="font-semibold text-white">5,0</span>
          <span className="text-white/45">no Airbnb</span>
        </div>

        {/* Scroll indicator */}
        <a
          href="#o-chale"
          className="mt-4 sm:mt-12 flex flex-col items-center gap-1 text-white/30 hover:text-white/60 transition-colors animate-float"
          aria-label="Rolar para o conteúdo"
        >
          <span className="text-[9px] sm:text-[10px] uppercase tracking-widest">Explorar</span>
          <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
};
