"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const WA_URL =
  "https://wa.me/5521997306232?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20Chal%C3%A9%204%20Elementos.";

const faqs = [
  {
    q: "Para quantas pessoas é o chalé?",
    a: "Pensado para casais, com privacidade total.",
  },
  {
    q: "Qual o horário de check-in e checkout?",
    a: "Consulte as condições diretamente pelo WhatsApp ao reservar.",
  },
  {
    q: "Como funciona o check-in?",
    a: "Self check-in por senha, com instruções enviadas antes da chegada.",
  },
  {
    q: "O chalé tem estacionamento?",
    a: "Sim, interno e seguro, dentro do condomínio.",
  },
];

export const FAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (i: number) => setOpen(open === i ? null : i);

  return (
    <section id="faq" className="py-28 bg-preto">
      <div className="max-w-2xl mx-auto px-6 sm:px-10">

        {/* ── Header ── */}
        <div className="text-center mb-14">
          <span className="tag-badge mb-5 mx-auto block w-fit">Dúvidas frequentes</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white">
            Perguntas frequentes
          </h2>
        </div>

        {/* ── Accordion ── */}
        <div className="space-y-3 mb-14" role="list">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="glass-dark rounded-2xl border border-white/8 overflow-hidden"
                role="listitem"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-terracota"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-question-${i}`}
                >
                  <span className="font-serif text-base sm:text-lg font-semibold text-white">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen ? "bg-terracota border-terracota rotate-180" : "bg-white/5"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 text-white" aria-hidden="true" />
                  </div>
                </button>

                <div
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-question-${i}`}
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40" : "max-h-0"
                  }`}
                >
                  <p className="px-6 pb-6 text-sm sm:text-base text-white/55 font-light leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Closing nudge ── */}
        <div className="text-center glass-dark rounded-2xl border border-white/8 p-8">
          <p className="text-white/60 text-sm mb-5 font-light">
            Alguma outra dúvida? Fale direto pelo WhatsApp.
          </p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-terra inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
