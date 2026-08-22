import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chalé 4 Elementos | Refúgio em Teresópolis, Serra Fluminense",
  description:
    "Um refúgio na mata atlântica, diante da serra. Hidromassagem com vista, lareira, área gourmet e privacidade total em Teresópolis, RJ. Reserve diretamente via WhatsApp.",
  keywords: [
    "Chalé Teresópolis",
    "Hospedagem romântica Serra Fluminense",
    "Chalé com hidromassagem Teresópolis",
    "Hospedagem Serra Fluminense",
    "Chalé 4 Elementos",
    "Lua de mel Serra dos Órgãos",
    "Lua de mel Teresópolis",
  ],
  authors: [{ name: "Chalé 4 Elementos" }],
  openGraph: {
    title: "Chalé 4 Elementos | Refúgio a Dois em Teresópolis",
    description:
      "Um refúgio na mata atlântica, diante da serra. Hidromassagem, lareira, área gourmet e privacidade total.",
    url: "https://chale4elementos.com.br",
    siteName: "Chalé 4 Elementos",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased bg-preto text-branco">
        {children}
      </body>
    </html>
  );
}
