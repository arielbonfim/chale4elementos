"use client";

import React from "react";
import { MapPin, Star, ChevronDown } from "lucide-react";

const WA_URL =
  "https://wa.me/5521997306232?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20Chal%C3%A9%204%20Elementos.";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white shrink-0" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export const Hero: React.FC = () => {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-mata"
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
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-preto/50 via-transparent to-transparent" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-10 flex flex-col items-center text-center py-32 pt-36">
        {/* Location tag */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-preto/50 backdrop-blur-md border border-white/10 text-white/75 text-xs tracking-widest uppercase mb-8">
          <MapPin className="w-3.5 h-3.5 text-terracota shrink-0" aria-hidden="true" />
          Teresópolis — Serra Fluminense
        </div>

        {/* H1 */}
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-bold text-white leading-[1.05] tracking-tight mb-6 drop-shadow-2xl">
          Chalé{" "}
          <em className="italic text-terracota not-italic">4 Elementos</em>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-2xl text-white/70 font-light leading-relaxed max-w-2xl mb-10 tracking-wide">
          Um refúgio a dois na mata atlântica,
          <br className="hidden sm:block" /> diante da serra.
        </p>

        {/* CTA */}
        <a
          href={WA_URL}
          id="hero-whatsapp-cta"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-terra inline-flex items-center gap-3 px-9 py-4 rounded-full text-sm font-semibold uppercase tracking-widest mb-10"
        >
          <WhatsAppIcon />
          Falar no WhatsApp
        </a>

        {/* Airbnb rating badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 border border-white/10 text-sm text-white/70">
          <div className="flex gap-0.5" aria-label="5 estrelas no Airbnb">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
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
          className="mt-16 flex flex-col items-center gap-1.5 text-white/30 hover:text-white/60 transition-colors animate-float"
          aria-label="Rolar para o conteúdo"
        >
          <span className="text-[10px] uppercase tracking-widest">Explorar</span>
          <ChevronDown className="w-4 h-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
};
