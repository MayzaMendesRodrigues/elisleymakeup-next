"use client";
import Intro from "@/src/components/Intro/Intro";
import style from "./gallery-body.module.css";

import dynamic from "next/dynamic";

const GalleryComponent = dynamic(
  () => import("../GalleryComponent/GalleryComponent"),
  { ssr: false },
);

export default function Gallery() {
  return (
    <main className={style.galleryBody}>
      <Intro
        subtitle="Galleria"
        title="Dettagli che raccontano storie"
        description="Esplora una raccolta di immagini che riflettono il nostro sguardo attento, la tecnica e la sensibilità in ogni progetto."
      />

      <GalleryComponent />
    </main>
  );
}
