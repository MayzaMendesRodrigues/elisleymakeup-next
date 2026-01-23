"use client";

import { usePathname } from "next/navigation";
import Header from "./header";

const HEADER_IMAGES: Record<string, string> = {
  "/": "header.jpg",
  "/servizi": "header_service.jpg",
  "/sposa": "headerSposa.jpg",
  "/gallery": "header__service.webp",
  "/contatti": "header_contatti.jpg",
};

export default function HeaderWrapper() {
  const pathname = usePathname();
  const currentImage = HEADER_IMAGES[pathname] ?? "header.jpg";

  return <Header backgroundImage={currentImage} />;
}
