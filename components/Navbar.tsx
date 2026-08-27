"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const WA_URL =
  "https://wa.me/5521997306232?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20Chal%C3%A9%204%20Elementos.";

const navLinks = [
  { name: "O Chalé", href: "#o-chale" },
  { name: "Experiência", href: "#experiencia" },
  { name: "Comodidades", href: "#comodidades" },
  { name: "Conheça o Chalé", href: "#tour" },
  { name: "Galeria", href: "#galeria" },
  { name: "Teresópolis", href: "#teresopolis" },
  { name: "Avaliações", href: "#avaliacoes" },
  { name: "Localização", href: "#localizacao" },
  { name: "Reservar", href: "#reservar" },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-preto/90 backdrop-blur-md border-b border-white/8 py-3 shadow-2xl"
          : "bg-gradient-to-b from-black/60 to-transparent py-5"
      }`}
    >
      <div className="w-full max-w-[90rem] mx-auto px-5 sm:px-8 xl:px-10 2xl:px-14 flex items-center gap-6 xl:gap-10">
        {/* Logo */}
        <a
          href="#"
          className="flex flex-col leading-none group shrink-0"
          aria-label="Chalé 4 Elementos — início"
        >
          <span className="font-serif text-base sm:text-lg font-bold tracking-widest text-white uppercase group-hover:text-terracota transition-colors duration-300">
            Chalé 4 Elementos
          </span>
          <span className="text-[10px] tracking-[0.18em] text-white/45 uppercase font-medium">
            Teresópolis — RJ
          </span>
        </a>

        {/* Desktop nav */}
        <nav
          className="hidden xl:grid xl:grid-cols-9 flex-1 items-center gap-x-4 2xl:gap-x-6 px-2 2xl:px-6"
          aria-label="Navegação principal"
        >
          {navLinks.map((l) => (
            <a
              key={l.name}
              href={l.href}
              className="text-[11px] uppercase tracking-wide font-medium text-white/60 hover:text-white transition-colors duration-200 whitespace-nowrap text-center px-1"
            >
              {l.name}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4 shrink-0 ml-auto xl:ml-0">
          <div className="hidden sm:flex items-center gap-4">
            {/* Airbnb — discreto, baixo contraste */}
            <a
              href="https://www.airbnb.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-white/30 hover:text-white/55 transition-colors tracking-wide whitespace-nowrap"
            >
              Ver no Airbnb
            </a>
            {/* WhatsApp CTA */}
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-terra inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 fill-white"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Falar no WhatsApp
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="xl:hidden p-2 text-white/70 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="xl:hidden bg-preto/97 backdrop-blur-xl border-t border-white/8 px-5 pt-5 pb-7 space-y-1">
          {navLinks.map((l) => (
            <a
              key={l.name}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block text-sm text-white/65 hover:text-white py-2.5 border-b border-white/5 tracking-wide"
            >
              {l.name}
            </a>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="btn-terra flex items-center justify-center gap-2 py-3.5 rounded-full text-sm font-semibold"
            >
              Falar no WhatsApp
            </a>
            <a
              href="https://www.airbnb.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-xs text-white/30 hover:text-white/50 transition-colors"
            >
              Ver no Airbnb
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
