"use client";

import React from "react";
import Image from "next/image";

export const OChale: React.FC = () => {
  return (
    <section id="o-chale" className="py-28 bg-preto relative overflow-hidden">
      <div
        className="absolute top-0 left-1/4 w-96 h-96 bg-mata/60 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-80 h-80 bg-terra/40 rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* ── Tag + Heading ── */}
        <div className="mb-20 max-w-2xl">
          <span className="tag-badge mb-5 block w-fit">Um refúgio para dois</span>
          <h2 className="font-serif text-4xl sm:text-6xl font-bold text-white leading-tight mb-8">
            Feito para durar
            <br />
            na memória
          </h2>
          <div className="section-divider mb-8" />
          <p className="text-white/65 text-base sm:text-lg leading-relaxed font-light">
            Novo, privativo e pensado nos mínimos detalhes — o cenário certo para uma lua de mel,
            um pedido de casamento, um aniversário ou apenas alguns dias fora da rotina.
          </p>
          <p className="text-white/65 text-base sm:text-lg leading-relaxed font-light mt-4">
            A hidromassagem de frente para a serra, a lareira acesa ao entardecer, o silêncio
            interrompido só pelos pássaros. Tudo isso a poucos minutos do centro de Teresópolis.
          </p>
        </div>

        {/* ── Image grid ── */}
        <div className="grid grid-cols-12 gap-4 sm:gap-5 mb-20">
          <div className="col-span-12 sm:col-span-7 relative h-72 sm:h-[460px] rounded-2xl overflow-hidden group">
            <Image
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=85"
              alt="Vista da Serra dos Órgãos ao entardecer"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-75"
              sizes="(max-width:640px) 100vw, 58vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-preto/70 to-transparent" />
          </div>
          <div className="col-span-12 sm:col-span-5 flex flex-col gap-4 sm:gap-5">
            <div className="relative h-48 sm:h-[220px] rounded-2xl overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80"
                alt="Hidromassagem com vista para a mata atlântica"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-75"
                sizes="(max-width:640px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-preto/60 to-transparent" />
            </div>
            <div className="relative h-48 sm:h-[224px] rounded-2xl overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80"
                alt="Interior aconchegante com lareira e madeira"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-75"
                sizes="(max-width:640px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-preto/60 to-transparent" />
            </div>
          </div>
        </div>

        {/* ── Citação ── */}
        <blockquote className="border-l-2 border-terracota pl-7 max-w-lg">
          <p className="font-serif text-2xl sm:text-3xl italic text-white/80 leading-relaxed">
            &ldquo;Longe da rotina,
            <br />
            em casal.&rdquo;
          </p>
        </blockquote>
      </div>
    </section>
  );
};
