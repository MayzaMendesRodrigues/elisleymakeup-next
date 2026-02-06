"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./gallery.module.css";
import { getStrapiData } from "../lib/strapi";
import ludovica from "../../public/images/gallery01.png";
import gergana from "../../public/images/galerry02.png";
import georgia from "../../public/images/photoCarrosel_1.jpg";
import mayza from "../../public/images/photoCarrosel_2.png";

const localGalleryData: GalleryData[] = [
  {
    id: 1,
    title: "Maria Ludovica  Cappello",
    order: 1,
    imageUrl: ludovica.src,
  },
  { id: 2, title: "Gergana Lazarova", order: 2, imageUrl: gergana.src },
  { id: 3, title: "Sposa Clasica", order: 3, imageUrl: georgia.src },
  { id: 4, title: "Sposa Moderna", order: 4, imageUrl: mayza.src },
];
type GalleryItem = {
  id: number;
  title: string;
  order: number;
  image: {
    url: string;
    formats?: {
      small?: {
        url: string;
      };
      large?: {
        url: string;
      };
    };
  } | null;
};

type GalleryResponse = {
  data: GalleryItem[];
};

type GalleryData = {
  id: number;
  title: string;
  imageUrl: string;
  order: number;
};

export default function GalleryComponent() {
  const [galleryData, setGalleryData] = useState<GalleryData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<GalleryData | null>(null);

  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    async function fetchGallery() {
      try {
        const response = (await getStrapiData(
          "/api/galleries?populate=image",
        )) as GalleryResponse;

        if (!response?.data?.length) {
          setGalleryData(localGalleryData);
          return;
        }

        const normalizedData: GalleryData[] = response?.data?.length
          ? response.data
              .filter((item) => item.image)
              .map((item) => {
                const imageUrl =
                  item.image?.formats?.small?.url ?? item.image?.url ?? "";

                return {
                  id: item.id,
                  title: item.title,
                  order: item.order,
                  imageUrl,
                };
              })
          : [];

        setGalleryData(
          [...localGalleryData, ...normalizedData].sort(
            (a, b) => a.order - b.order,
          ),
        );
      } catch (err) {
        console.error("Erro ao buscar galeria:", err);
        setGalleryData(localGalleryData);
        setError(null);
      }
    }

    fetchGallery();
  }, []);

  useEffect(() => {
    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    }

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    if (selectedImage) {
      closeButtonRef.current?.focus();
    }
  }, [selectedImage]);

  return (
    <>
      <main className={styles.gallery}>
        {error && <p className={styles.error}>{error}</p>}

        {galleryData.map((item) => (
          <div
            key={item.id}
            className={styles.card}
            role="button"
            tabIndex={0}
            aria-label={`Ver imagem ${item.title}`}
            onClick={() => setSelectedImage(item)}
            onKeyDown={(e) => e.key === "Enter" && setSelectedImage(item)}
          >
            <Image
              src={
                item.imageUrl.startsWith("http") ||
                item.imageUrl.startsWith("/")
                  ? item.imageUrl
                  : `${process.env.NEXT_PUBLIC_API_URL}${item.imageUrl}`
              }
              alt={item.title}
              fill
              className={styles.image}
              sizes="(max-width: 768px) 100vw, 33vw"
              unoptimized
            />

            <span className={styles.text}>{item.title}</span>
          </div>
        ))}
      </main>

      {/* MODAL */}
      {selectedImage && (
        <div
          className={styles.overlay}
          role="dialog"
          aria-modal="true"
          aria-label="Imagem ampliada"
          onClick={() => setSelectedImage(null)}
        >
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button
              ref={closeButtonRef}
              className={styles.close}
              aria-label="Fechar imagem"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>

            <Image
              src={
                selectedImage.imageUrl.startsWith("http") ||
                selectedImage.imageUrl.startsWith("/")
                  ? selectedImage.imageUrl
                  : `${process.env.NEXT_PUBLIC_API_URL}${selectedImage.imageUrl}`
              }
              alt={selectedImage.title}
              className={styles.modalImage}
              width={1600}
              height={2000}
              priority
              unoptimized
            />
          </div>
        </div>
      )}
    </>
  );
}
