import type { Metadata } from "next";
import { Montserrat, Italiana } from "next/font/google";
import "./globals.css";

import ButtonFloating from "@/src/components/ui/ButtonFloating/ButtonFloating";
import Nav from "@/src/components/Nav/Nav";
import HeaderWrapper from "@/src/components/Header/headerWrapper";
import Footer from "@/src/components/Footer/Footer";
import elisley from "@/public/images/elisley_01.png";

import Script from "next/script";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const italiana = Italiana({
  variable: "--font-italiana",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Elisley Vieira | Make-up Artist in Abruzzo e in tutta Italia",
  description:
    "Trucco sposa professionale e make-up per eventi speciali. Base in Abruzzo (Pescara, Chieti, Teramo, L'Aquila) con servizio disponibile in tutta Italia. Valorizza la tua bellezza naturale.",
  keywords: [
    "make-up artist Abruzzo",
    "trucco sposa Italia",
    "truccatrice professionale",
    "bridal makeup Italy",
    "Elisley Vieira",
  ],

  openGraph: {
    title: "Elisley Vieira | Make-up Artist Professionale",
    description:
      "Servizio di trucco professionale in Abruzzo e in tutta Italia.",
    url: "https://www.elisleymakeup.it",
    siteName: "Elisley Make-up",
    images: [
      {
        url: elisley.src,
        width: 1200,
        height: 630,
      },
    ],
    locale: "it_IT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&display=optional"
        />

        <Script
          data-goatcounter="https://elisley-makeup.goatcounter.com"
          src="//gc.zgo.at/count.js"
          strategy="afterInteractive"
        ></Script>
      </head>
      <body
        className={`${montserrat.variable} ${italiana.variable} antialiased`}
      >
        <div className="page">
          <HeaderWrapper />
          <Nav />
          {children}
          <ButtonFloating />
          <Footer />
        </div>
      </body>
    </html>
  );
}
