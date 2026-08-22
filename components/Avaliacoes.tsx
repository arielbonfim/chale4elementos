"use client";

import React from "react";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    quote:
      "Jacuzzi super confortável com água aquecida e uma vista maravilhosa do chalé e das montanhas",
    author: null,
  },
  {
    quote:
      "Passei o aniversário da minha namorada no chalé, e só posso dizer que foi perfeito!! tudo muito limpo e organizado",
    author: "Luiz",
  },
  {
    quote:
      "Nós adoramos a localização do chalé, uma vista linda, transmite paz.",
    author: null,
  },
  {
    quote:
      "O chalé é lindo, bem equipado, tudo novo e muito limpo. Local privativo e ideal para quem quer sossego e privacidade.",
    author: null,
  },
  {
    quote:
      "A estadia foi perfeita, tudo no chalé foi pensado para que a experiência do hóspede seja completa.",
    author: null,
  },
];

const Stars = () => (
  <div className="flex gap-0.5" aria-label="Avaliação 5 estrelas">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" aria-hidden="true" />
    ))}
  </div>
);

export const Avaliacoes: React.FC = () => {
  return (
    <section id="avaliacoes" className="py-28 bg-mata relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-preto via-mata/80 to-preto/90 pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* ── Header ── */}
        <div className="text-center mb-16">
          <span className="tag-badge mb-5 mx-auto block w-fit">Quem já esteve aqui</span>
          <h2 className="font-serif text-4xl sm:text-6xl font-bold text-white mb-6">
            O que dizem os hóspedes
          </h2>
          {/* Rating badge */}
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full glass-dark border border-white/10 text-white">
            <Stars />
            <span className="font-bold text-amber-400 text-lg">5,0</span>
            <span className="text-white/45 text-sm">no Airbnb</span>
          </div>
        </div>

        {/* ── Reviews grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {reviews.map((r, i) => (
            <div
              key={i}
              className={`glass-dark rounded-2xl border border-white/8 p-7 relative hover:border-terracota/25 transition-colors duration-300 ${
                i === 0 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <Quote className="w-8 h-8 text-terracota/20 absolute top-6 right-6" aria-hidden="true" />
              <Stars />
              <p className="text-white/70 text-sm sm:text-base font-light leading-relaxed mt-4 italic">
                &ldquo;{r.quote}&rdquo;
              </p>
              {r.author && (
                <p className="mt-4 text-xs text-terracota font-semibold tracking-wide">
                  — {r.author}
                </p>
              )}
              <div className="mt-4 flex items-center gap-1.5 text-[10px] text-white/25 uppercase tracking-widest">
                <svg viewBox="0 0 24 24" className="w-3 h-3 fill-[#FF5A5F]" aria-hidden="true">
                  <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.43 3.87 9.95 9 10.93V15H6v-2.5h3V10c0-2.76 1.64-4.25 4.12-4.25 1.2 0 2.45.21 2.45.21v2.7h-1.38c-1.36 0-1.79.85-1.79 1.72v2.07H16l-.5 2.5h-2.5v8.43C18.13 22.45 22 17.93 22 12.5 22 5.87 16.63.5 12 .5z" />
                </svg>
                Airbnb — verificado
              </div>
            </div>
          ))}
        </div>

        {/* Airbnb link — secondary, low contrast */}
        <div className="text-center">
        </div>
      </div>
    </section>
  );
};
