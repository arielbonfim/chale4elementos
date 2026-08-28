"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ChevronRight, MapPin, Sun, Moon } from "lucide-react";

const AIRBNB_URL =
  "https://www.airbnb.com.br/rooms/1652473266637923212?source_impression_id=p3_1787857808_P3p_Rc0eOaL3LEP7&review_page_entrypoint=show_all";

const WA_URL =
  "https://wa.me/5521997306232?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20Chal%C3%A9%204%20Elementos.";

const navLinks = [
  { name: "O Chalé", href: "#o-chale", desc: "Conheça o espaço e refúgio" },
  { name: "Experiência", href: "#experiencia", desc: "Viva momentos únicos" },
  { name: "Comodidades", href: "#comodidades", desc: "Itens e diferenciais inclusos" },
  { name: "Conheça o Chalé", href: "#tour", desc: "Tour completo em 360°" },
  { name: "Galeria", href: "#galeria", desc: "Fotos de todos os ambientes" },
  { name: "Teresópolis", href: "#teresopolis", desc: "Atrações e arredores" },
  { name: "Avaliações", href: "#avaliacoes", desc: "Opiniões de nossos hóspedes" },
  { name: "Localização", href: "#localizacao", desc: "Como chegar ao Chalé" },
  { name: "Reservar", href: "#reservar", desc: "Reserve sua estadia" },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Initialize theme from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('chale-theme');
    const dark = stored === 'dark';
    setIsDark(dark);
    document.documentElement.classList.toggle('dark', dark);
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    document.documentElement.classList.toggle('dark', newDark);
    localStorage.setItem('chale-theme', newDark ? 'dark' : 'light');
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fechar menu ao pressionar ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Travar scroll do body quando menu estiver aberto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-preto/90 backdrop-blur-md border-b border-white/8 py-3 shadow-2xl"
            : "bg-gradient-to-b from-black/70 via-black/30 to-transparent py-5"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 xl:px-10 flex items-center justify-between">
          {/* Logo (lado esquerdo) */}
          <a
            href="#"
            className="flex flex-col leading-none group shrink-0"
            aria-label="Chalé 4 Elementos — início"
          >
            <span className="font-serif text-base sm:text-xl font-bold tracking-wider text-white uppercase group-hover:text-terracota transition-colors duration-300">
              Chalé 4 Elementos
            </span>
            <span className="text-[10px] sm:text-[11px] tracking-[0.2em] text-white/45 uppercase font-medium mt-0.5">
              Teresópolis — RJ
            </span>
          </a>

          {/* Lado direito: Airbnb + WhatsApp + Hambúrguer */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Airbnb */}
            <a
              href={AIRBNB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex text-xs font-medium text-white/60 hover:text-white transition-colors tracking-wide px-3 py-2"
            >
              Ver no Airbnb
            </a>

            {/* WhatsApp CTA */}
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-terra hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider shadow-lg hover:shadow-terracota/30 whitespace-nowrap"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 fill-white shrink-0"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Falar no WhatsApp
            </a>

            {/* Toggle Tema */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white backdrop-blur-md transition-all duration-300 shadow-md"
              aria-label={isDark ? 'Mudar para modo claro' : 'Mudar para modo escuro'}
              title={isDark ? 'Modo claro' : 'Modo escuro'}
            >
              {isDark
                ? <Sun className="w-4 h-4" />
                : <Moon className="w-4 h-4" />}
            </button>

            {/* Menu Hambúrguer elegante */}
            <button
              onClick={() => setMenuOpen(true)}
              className="p-2.5 sm:px-3 sm:py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white backdrop-blur-md transition-all duration-300 flex items-center gap-2 group shadow-md"
              aria-label="Abrir menu de navegação"
            >
              <Menu className="w-5 h-5 transition-transform group-hover:scale-110" />
              <span className="hidden sm:inline text-xs font-semibold uppercase tracking-wider">
                Menu
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* ── Overlay Backdrop ── */}
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* ── Drawer Lateral Elegante ── */}
      <aside
        className={`fixed top-0 right-0 bottom-0 w-full sm:w-[26rem] bg-preto/95 backdrop-blur-2xl border-l border-white/10 z-50 p-6 sm:p-8 flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-out overflow-y-auto ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Menu principal"
      >
        {/* Cabeçalho do Drawer */}
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div>
              <span className="font-serif text-lg font-bold text-white uppercase tracking-wider block">
                Chalé 4 Elementos
              </span>
              <span className="text-[10px] text-white/40 uppercase tracking-widest flex items-center gap-1 mt-0.5">
                <MapPin className="w-3 h-3 text-terracota" /> Teresópolis — RJ
              </span>
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-white/70 hover:text-white border border-white/10 transition-colors"
              aria-label="Fechar menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Links das Sessões */}
          <nav className="mt-6 space-y-1" aria-label="Sessões do site">
            {navLinks.map((l) => (
              <a
                key={l.name}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="group flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-all text-white/75 hover:text-white"
              >
                <div>
                  <div className="font-medium text-sm sm:text-base group-hover:text-terracota transition-colors">
                    {l.name}
                  </div>
                  {l.desc && (
                    <div className="text-[11px] text-white/40 group-hover:text-white/60 transition-colors">
                      {l.desc}
                    </div>
                  )}
                </div>
                <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-terracota group-hover:translate-x-1 transition-all" />
              </a>
            ))}
          </nav>
        </div>

        {/* Rodapé do Drawer com Ações Rápidas */}
        <div className="pt-6 mt-6 border-t border-white/10 flex flex-col gap-3">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="btn-terra flex items-center justify-center gap-2.5 py-3.5 rounded-full text-sm font-semibold uppercase tracking-wider shadow-lg"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4 fill-white shrink-0"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Falar no WhatsApp
          </a>

          <a
            href={AIRBNB_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-2 py-3 rounded-full text-xs font-medium text-white/70 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
          >
            Ver no Airbnb
          </a>
        </div>
      </aside>
    </>
  );
};
