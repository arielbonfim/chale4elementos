import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { OChale } from "@/components/OChale";
import { Experiencia } from "@/components/Experiencia";
import { Comodidades } from "@/components/Comodidades";
import { VideoTour } from "@/components/VideoTour";
import { Galeria } from "@/components/Galeria";
import { Teresopolis } from "@/components/Teresopolis";
import { Avaliacoes } from "@/components/Avaliacoes";
import { Localizacao } from "@/components/Localizacao";
import { FAQ } from "@/components/FAQ";
import { CTAFinal } from "@/components/CTAFinal";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <main className="min-h-screen bg-preto text-branco selection:bg-terracota selection:text-white">
      <Navbar />
      <Hero />
      <OChale />
      <Experiencia />
      <Comodidades />
      <VideoTour />
      <Galeria />
      <Teresopolis />
      <Avaliacoes />
      <Localizacao />
      <FAQ />
      <CTAFinal />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
