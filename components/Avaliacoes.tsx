"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, Quote, X } from "lucide-react";

const AIRBNB_URL =
  "https://www.airbnb.com.br/rooms/1652473266637923212?source_impression_id=p3_1787857808_P3p_Rc0eOaL3LEP7&review_page_entrypoint=show_all";

const reviews = [
  {
    quote:
      "Jacuzzi super confortável com água aquecida e uma vista maravilhosa do chalé e das montanhas",
    author: "Alessandra",
    image: "/images/comentarios/1.webp",
  },
  {
    quote:
      "Passei o aniversário da minha namorada no chalé, e só posso dizer que foi perfeito!! tudo muito limpo e organizado",
    author: "Luiz",
    image: "/images/comentarios/2.webp",
  },
  {
    quote:
      "Nós adoramos a localização do chalé, uma vista linda, transmite paz.",
    author: null,
    image: "/images/comentarios/3.webp",
  },
  {
    quote:
      "O chalé é lindo, bem equipado, tudo novo e muito limpo. Local privativo e ideal para quem quer sossego e privacidade.",
    author: null,
    image: "/images/comentarios/4.webp",
  },
  {
    quote:
      "A estadia foi perfeita, tudo no chalé foi pensado para que a experiência do hóspede seja completa.",
    author: null,
    image: "/images/comentarios/5.webp",
  },
  {
    quote:
      "Dá para perceber que foi tudo pensado e planejado para proporcionar uma boa experiência.",
    author: "Júlia",
    image: "/images/comentarios/6.webp",
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
  const [activeImage, setActiveImage] = useState<string | null>(null);

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
          <a
            href={AIRBNB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-5 py-3 rounded-full glass-dark border border-white/10 text-white hover:border-terracota/40 transition-colors shadow-lg group"
          >
            <Stars />
            <span className="font-bold text-amber-400 text-lg">5,0</span>
            <span className="text-white/45 text-sm group-hover:text-white/70 transition-colors">no Airbnb</span>
          </a>
        </div>

        {/* ── Reviews grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="glass-dark rounded-2xl border border-white/8 overflow-hidden flex flex-col group hover:border-terracota/35 transition-all duration-300 shadow-xl"
            >
              {/* Imagem na proporção exata 689x1000 (aspect-[689/1000]) */}
              <div 
                className="relative w-full aspect-[689/1000] overflow-hidden bg-preto/60 cursor-pointer"
                onClick={() => setActiveImage(r.image)}
              >
                <Image
                  src={r.image}
                  alt={r.author ? `Avaliação de ${r.author}` : `Avaliação ${i + 1} no Chalé 4 Elementos`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Badge de nota */}
                <div className="absolute top-3.5 right-3.5 px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/15 flex items-center gap-1 text-[11px] text-amber-400 font-semibold shadow-md">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  <span>5,0</span>
                </div>
              </div>

              {/* Conteúdo textual da avaliação */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 relative bg-preto/40">
                <Quote className="w-7 h-7 text-terracota/20 absolute top-5 right-5 pointer-events-none" aria-hidden="true" />
                
                <div>
                  <Stars />
                  <p className="text-white/75 text-sm sm:text-base font-light leading-relaxed mt-3.5 italic">
                    &ldquo;{r.quote}&rdquo;
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-terracota font-semibold tracking-wide">
                    {r.author ? `— ${r.author}` : "— Hóspede"}
                  </span>
                  <div className="flex items-center gap-1.5 text-[10px] text-white/30 uppercase tracking-widest">
                    <svg viewBox="0 0 24 24" className="w-3 h-3 fill-[#FF5A5F]" aria-hidden="true">
                      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.43 3.87 9.95 9 10.93V15H6v-2.5h3V10c0-2.76 1.64-4.25 4.12-4.25 1.2 0 2.45.21 2.45.21v2.7h-1.38c-1.36 0-1.79.85-1.79 1.72v2.07H16l-.5 2.5h-2.5v8.43C18.13 22.45 22 17.93 22 12.5 22 5.87 16.63.5 12 .5z" />
                    </svg>
                    Airbnb
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Link Airbnb no rodapé da seção */}
        <div className="text-center">
          <a
            href={AIRBNB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/40 hover:text-terracota transition-colors group"
          >
            <span>Ver todas as avaliações no Airbnb</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>

      {/* ── Modal Lightbox para visualização ampliada ── */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveImage(null)}
        >
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-5 right-5 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
            aria-label="Fechar visualização"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="relative w-full max-w-md aspect-[689/1000] max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activeImage}
              alt="Avaliação ampliada"
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>
        </div>
      )}
    </section>
  );
};
