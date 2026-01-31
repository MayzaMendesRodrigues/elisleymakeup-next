"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./gallery.module.css";
import { getStrapiData } from "../lib/strapi";

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
    };
  } | null;
};

type GalleryResponse = {
  data: GalleryItem[];
};

type GalleryData = {
  title: string;
  imageUrl: string;
  order: number;
};

export default function GalleryComponent() {
  const [galleryData, setGalleryData] = useState<GalleryData[]>([]);
  const [error, setError] = useState<string | null>(null);

  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const STRAPI_BASE_URL = "http://localhost:1337";

  useEffect(() => {
    async function fetchGallery() {
      try {
        const response = (await getStrapiData(
          "/api/galleries?populate=image"
        )) as GalleryResponse;

        if (!response?.data?.length) {
          setError("Nenhum item encontrado");
          return;
        }

        const normalizedData: GalleryData[] = response.data
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
          });

        setGalleryData(normalizedData);
      } catch (err) {
        console.error("Erro ao buscar galeria:", err);
        setError("Erro ao carregar a galeria");
      }
    }

    fetchGallery();
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeButtonRef.current?.blur();
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <main className={styles.gallery}>
      {error && <p className={styles.error}>{error}</p>}

      {!error && !galleryData && <p>Loading gallery data...</p>}

      {galleryData.map((item) => (
        <div key={item.order} className={styles.card}>
          <Image
            src={`${STRAPI_BASE_URL}${item.imageUrl}`}
            alt={item.title}
            className={styles.image}
            width={250}
            height={250}
            unoptimized
          />

          <span className={styles.text}>{item.title}</span>
        </div>
      ))}
    </main>
  );
}
