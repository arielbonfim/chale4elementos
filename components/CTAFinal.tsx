"use client";

import React from "react";

const WA_URL =
  "https://wa.me/5521997306232?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20Chal%C3%A9%204%20Elementos.";

export const CTAFinal: React.FC = () => {
  return (
    <section id="reservar" className="py-32 bg-terra-dark relative overflow-hidden">
      {/* Atmospheric background */}
      <div className="absolute inset-0 bg-gradient-to-br from-mata/50 via-terra/70 to-preto/90" aria-hidden="true" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-terracota/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-10 text-center">
        <span className="tag-badge mb-6 mx-auto block w-fit">Sua vez</span>

        <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-white leading-tight mb-7">
          Venha conhecer
        </h2>

        <div className="section-divider mx-auto mb-8" />

        <p className="text-white/55 text-base sm:text-xl font-light leading-relaxed mb-12 max-w-lg mx-auto">
          Mais do que uma hospedagem, um convite para desacelerar diante da serra.
        </p>

        <a
          href={WA_URL}
          id="cta-final-whatsapp"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-terra inline-flex items-center gap-3 px-10 py-4.5 py-[18px] rounded-full text-sm font-semibold uppercase tracking-widest"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white shrink-0" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Falar no WhatsApp
        </a>
      </div>
    </section>
  );
};
