"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Eye, Flame } from "lucide-react";

const WA_URL =
  "https://wa.me/5521997306232?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20Chal%C3%A9%204%20Elementos.";

const pilares = [
  {
    id: "privacidade",
    icon: ShieldCheck,
    num: "01",
    tag: "Privacidade",
    title: "Espaço inteiramente seu",
    body: "Espaço inteiramente seu, dentro de um condomínio com segurança 24 horas.",
    image:
      "/images/inteiramente seu.webp",
    imageAlt: "Área externa privativa",
  },
  {
    id: "vista",
    icon: Eye,
    num: "02",
    tag: "Vista",
    title: "A serra emoldurada",
    body: "A serra emoldurada pela janela e pela hidromassagem aquecida, em qualquer hora do dia.",
    image:
      "/images/vista.webp",
    imageAlt: "Vista panorâmica",
  },
  {
    id: "sabor",
    icon: Flame,
    num: "03",
    tag: "Sabor",
    title: "Celebre à mesa",
    body: "Churrasqueira, forno a lenha e um mini bar completo, para celebrar à mesa.",
    image:
      "/images/area gourmet.webp",
    imageAlt: "Área gourmet rústica com forno a lenha",
  },
];

export const Experiencia: React.FC = () => {
  return (
    <section id="experiencia" className="py-28 bg-mata relative overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-b from-preto via-mata to-preto opacity-80"
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* ── Header ── */}
        <div className="text-center mb-20">
          <span className="tag-badge mb-6 mx-auto block w-fit">
            O que torna esta estadia diferente
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-bold text-white">
            Três razões para vir
          </h2>
        </div>

        {/* ── Pilares ── */}
        <div className="space-y-20 lg:space-y-28">
          {pilares.map((p, i) => {
            const Icon = p.icon;
            const even = i % 2 === 0;
            return (
              <div
                key={p.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
              >
                {/* Image */}
                <div
                  className={`relative h-72 sm:h-96 lg:h-[440px] rounded-2xl overflow-hidden group ${
                    even ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <Image
                    src={p.image}
                    alt={p.imageAlt}
                    fill
                    sizes="(max-width:1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-preto/80 to-transparent" />
                  <span className="absolute bottom-6 left-6 font-serif text-7xl font-bold text-white/8 leading-none select-none">
                    {p.num}
                  </span>
                </div>

                {/* Content */}
                <div
                  className={`space-y-6 ${even ? "lg:order-2" : "lg:order-1"}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-terracota/15 border border-terracota/30 flex items-center justify-center shrink-0">
                      <Icon
                        className="w-5 h-5 text-terracota"
                        aria-hidden="true"
                      />
                    </div>
                    <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-terracota">
                      {p.tag}
                    </span>
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
                    {p.title}
                  </h3>

                  <p className="text-white/60 text-base sm:text-lg leading-relaxed font-light">
                    {p.body}
                  </p>

                  <a
                    href={WA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-terracota hover:text-terracota-dark transition-colors group/link"
                  >
                    Consultar disponibilidade
                    <svg
                      className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
