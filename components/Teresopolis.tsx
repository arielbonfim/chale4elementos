"use client";

import React from "react";
import Image from "next/image";

export const Teresopolis: React.FC = () => {
  return (
    <section id="teresopolis" className="relative py-0 overflow-hidden">
      <div className="relative h-[70vh] min-h-[480px] w-full">
        <Image
          src="/images/teresopolis.webp"
          alt="Serra dos Órgãos e Mata Atlântica em Teresópolis ao amanhecer"
          fill
          className="object-cover brightness-[0.3]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-preto/90 via-preto/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-preto via-transparent to-transparent" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-16">
            <div className="max-w-xl">
              <span className="tag-badge mb-5 block w-fit">Onde você está</span>
              <h2 className="font-serif text-4xl sm:text-6xl font-bold text-white leading-tight mb-8">
                Teresópolis
              </h2>
              <div className="section-divider mb-8" />
              <p className="text-white/65 text-sm sm:text-base leading-relaxed font-light mb-4">
                Cercada pela Serra dos Órgãos e por um dos trechos mais preservados de Mata
                Atlântica do país, Teresópolis é conhecida pelo clima ameno de montanha, pela
                paisagem que muda a cada curva e pela silhueta do Dedo de Deus, visível de quase
                qualquer ponto da cidade.
              </p>
              <p className="text-white/65 text-sm sm:text-base leading-relaxed font-light">
                A pouco mais de uma hora do Rio de Janeiro, reúne trilhas, cachoeiras, alta
                gastronomia e a tranquilidade do interior. O Chalé 4 Elementos está a poucos
                minutos de tudo isso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
