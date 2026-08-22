"use client";

import React from "react";
import {
  Waves,
  Flame,
  Bed,
  Sparkles,
  Beef,
  Wind,
  CookingPot,
  Refrigerator,
  Coffee,
  Wine,
  Pizza,
  Droplets,
  Mic2,
  Lock,
  ShowerHead,
} from "lucide-react";

interface Item {
  icon: React.ElementType;
  label: string;
}

interface Category {
  title: string;
  items: Item[];
}

const categories: Category[] = [
  {
    title: "Descanso e romantismo",
    items: [
      { icon: Waves, label: "Hidromassagem com vista para a serra" },
      { icon: Flame, label: "Lareira de fácil acendimento, com lenha inclusa" },
      { icon: Bed, label: "Cama e sofá confortáveis" },
      { icon: Sparkles, label: "Decoração romântica sob encomenda" },
    ],
  },
  {
    title: "Área gourmet",
    items: [
      { icon: Beef, label: "Churrasqueira" },
      { icon: Wind, label: "Forno a lenha" },
      { icon: CookingPot, label: "Cooktop e Air Fryer" },
      { icon: Refrigerator, label: "Geladeira e freezer" },
    ],
  },
  {
    title: "Sabores e mimos",
    items: [
      { icon: Coffee, label: "Café da manhã disponível" },
      { icon: Wine, label: "Mini bar com vinhos e espumantes" },
      { icon: Pizza, label: "Snacks, doces e pizzas congeladas" },
      { icon: Droplets, label: "Água, refrigerante e sucos" },
    ],
  },
  {
    title: "Praticidade",
    items: [
      { icon: Mic2, label: "Assistente de voz Alexa" },
      { icon: Lock, label: "Self check-in por senha" },
      { icon: ShowerHead, label: "Chuveiro a gás" },
    ],
  },
];

export const Comodidades: React.FC = () => {
  return (
    <section id="comodidades" className="py-28 bg-granito-dark relative">
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(19,34,25,0.5)_0%,_transparent_70%)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* ── Header ── */}
        <div className="mb-20 max-w-xl">
          <span className="tag-badge mb-5 block w-fit">
            Tudo o que você deseja
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-bold text-white leading-tight mb-6">
            Uma estrutura completa
          </h2>
          <div className="section-divider" />
        </div>

        {/* ── Categories grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="glass-dark rounded-2xl p-7 border border-white/7 hover:border-terracota/25 transition-colors duration-300"
            >
              <h3 className="font-serif text-lg font-bold text-white mb-6 pb-4 border-b border-white/8">
                {cat.title}
              </h3>
              <ul className="space-y-4">
                {cat.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.label} className="flex items-start gap-3.5">
                      <div className="w-8 h-8 rounded-lg bg-mata flex items-center justify-center shrink-0 mt-0.5 border border-musgo/30">
                        <Icon
                          className="w-4 h-4 text-terracota"
                          aria-hidden="true"
                        />
                      </div>
                      <span className="text-sm text-white/65 leading-relaxed font-light">
                        {item.label}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
