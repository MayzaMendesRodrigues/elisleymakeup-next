"use client";
import dynamic from "next/dynamic";

const GalleryComponent = dynamic(
  () => import("../GalleryComponent/GalleryComponent"),
  { ssr: false }
);

export default function Gallery() {
  return (
    <main>
      <h1>Galeria</h1>
      <GalleryComponent />
    </main>
  );
}
