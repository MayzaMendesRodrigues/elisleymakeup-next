import type { Metadata } from "next";
import { Montserrat, Italiana } from "next/font/google";
import "./globals.css";

import ButtonFloating from "@/src/components/ui/ButtonFloating/ButtonFloating";
import Nav from "@/src/components/Nav/Nav";
import HeaderWrapper from "@/src/components/Header/headerWrapper";
import Footer from "@/src/components/Footer/Footer";

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
  title: "Elisley Make-up - Trucco Sposa e Eventi Speciali ad Abruzzo",
  description:
    "Make-up professionale per spose ad Abruzzo. Un esperienza su misura per valorizzare la tua bellezza naturale nel giorno più importante della tua vita.",
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

        <script
          data-goatcounter="https://elisley-makeup.goatcounter.com/count"
          async
          src="//gc.zgo.at/count.js"
        ></script>
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
