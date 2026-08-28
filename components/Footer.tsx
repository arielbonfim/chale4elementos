"use client";

import React from "react";

const WA_URL =
  "https://wa.me/5521997306232?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20Chal%C3%A9%204%20Elementos.";

const footerLinks = [
  { name: "O Chalé", href: "#o-chale" },
  { name: "Experiência", href: "#experiencia" },
  { name: "Comodidades", href: "#comodidades" },
  { name: "Galeria", href: "#galeria" },
  { name: "Avaliações", href: "#avaliacoes" },
  { name: "Localização", href: "#localizacao" },
  { name: "Reservar", href: "#reservar" },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-preto border-t border-white/6 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* ── Top row ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-14">

          {/* Brand */}
          <div>
            <p className="font-serif text-xl font-bold text-white tracking-wide mb-1">
              Chalé 4 Elementos
            </p>
            <p className="text-xs text-white/35 tracking-widest uppercase mb-6">
              Teresópolis, RJ
            </p>
            <p className="text-sm text-white/45 font-light leading-relaxed max-w-xs">
              Um refúgio a dois na mata atlântica, diante da serra.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Navegação do rodapé">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-white/30 mb-4">
              Navegação
            </p>
            <ul className="space-y-2.5">
              {footerLinks.map((l) => (
                <li key={l.name}>
                  <a
                    href={l.href}
                    className="text-sm text-white/45 hover:text-white/75 transition-colors"
                  >
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-white/30 mb-4">
              Reservas
            </p>
            <p className="text-sm text-white/45 font-light mb-3">
              Reservas diretas pelo WhatsApp — sem taxas de plataforma.
            </p>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-terracota hover:text-terracota-dark transition-colors"
            >
              (21) 99730-6232
            </a>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="border-t border-white/6 pt-7 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/20">
          <p>
            © {new Date().getFullYear()} Chalé 4 Elementos — Todos os direitos reservados.
            <span className="mx-2 text-white/10">·</span>
            <a
              href="https://www.instagram.com/arielsbonfim/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/50 transition-colors"
            >
              site por Bonfim
            </a>
          </p>

          {/* Airbnb — discreto, no rodapé */}
          <a
            href="https://www.airbnb.com.br/rooms/1652473266637923212?source_impression_id=p3_1787857808_P3p_Rc0eOaL3LEP7&review_page_entrypoint=show_all"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/40 transition-colors"
          >
            Ver no Airbnb
          </a>
        </div>
      </div>
    </footer>
  );
};
