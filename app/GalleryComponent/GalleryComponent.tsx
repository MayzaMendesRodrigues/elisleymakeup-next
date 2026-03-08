"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import styles from "./gallery.module.css";
import { getStrapiData } from "../lib/strapi";
import ludovica from "../../public/images/gallery01.png";
import gergana from "../../public/images/galerry02.png";
import georgia from "../../public/images/photoCarrosel_1.jpg";
import mayza from "../../public/images/photoCarrosel_2.png";

type GalleryItem = {
  id: number;
  title: string;
  order: number;
  image: {
    url: string;
    width?: number;
    height?: number;
    formats?: {
      small?: {
        url: string;
        width?: number;
        height?: number;
      };
      large?: {
        url: string;
        width?: number;
        height?: number;
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
  width: number;
  height: number;
};

const localGalleryData: GalleryData[] = [
  {
    id: 1,
    title: "Maria Ludovica Cappello",
    order: 1,
    imageUrl: ludovica.src,
    width: ludovica.width,
    height: ludovica.height,
  },
  {
    id: 2,
    title: "Gergana Lazarova",
    order: 2,
    imageUrl: gergana.src,
    width: gergana.width,
    height: gergana.height,
  },
  {
    id: 3,
    title: "Sposa Classica",
    order: 3,
    imageUrl: georgia.src,
    width: georgia.width,
    height: georgia.height,
  },
  {
    id: 4,
    title: "Sposa Moderna",
    order: 4,
    imageUrl: mayza.src,
    width: mayza.width,
    height: mayza.height,
  },
];

function resolveImageUrl(imageUrl: string) {
  if (imageUrl.startsWith("http") || imageUrl.startsWith("/")) return imageUrl;
  return `${process.env.NEXT_PUBLIC_API_URL ?? ""}${imageUrl}`;
}

function normalizeRemoteData(response: GalleryResponse | null | undefined) {
  if (!response?.data?.length) return [];

  return response.data
    .filter((item) => item.image)
    .map((item) => {
      const imageUrl = item.image?.formats?.small?.url ?? item.image?.url ?? "";
      const width =
        item.image?.formats?.large?.width ??
        item.image?.formats?.small?.width ??
        item.image?.width ??
        1200;
      const height =
        item.image?.formats?.large?.height ??
        item.image?.formats?.small?.height ??
        item.image?.height ??
        1600;

      return {
        id: item.id,
        title: item.title?.trim() || "Foto",
        order: item.order ?? 999,
        imageUrl,
        width,
        height,
      };
    })
    .filter((item) => item.imageUrl);
}

function mergeGallery(localData: GalleryData[], remoteData: GalleryData[]) {
  const unique = new Map<string, GalleryData>();

  [...localData, ...remoteData].forEach((item) => {
    const key = `${item.title.toLowerCase()}__${item.imageUrl}`;
    if (!unique.has(key)) unique.set(key, item);
  });

  return [...unique.values()].sort((a, b) => a.order - b.order);
}

export default function GalleryComponent() {
  const [galleryData, setGalleryData] = useState<GalleryData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const selectedImage =
    selectedIndex !== null ? galleryData[selectedIndex] ?? null : null;

  const canNavigate = galleryData.length > 1;
  const hasItems = galleryData.length > 0;

  const skeletonItems = useMemo(() => Array.from({ length: 6 }), []);
  const handleClose = () => setSelectedIndex(null);

  useEffect(() => {
    async function fetchGallery() {
      try {
        const response = (await getStrapiData(
          "/api/galleries?populate=image",
        )) as GalleryResponse;

        const normalizedData = normalizeRemoteData(response);
        const merged = mergeGallery(localGalleryData, normalizedData);
        setGalleryData(merged.length ? merged : localGalleryData);
      } catch (err) {
        console.error("Erro ao buscar galeria:", err);
        setGalleryData(localGalleryData);
      } finally {
        setIsLoading(false);
      }
    }

    fetchGallery();
  }, []);

  useEffect(() => {
    function handleKeydown(e: KeyboardEvent) {
      if (selectedIndex === null) return;

      if (e.key === "Escape") {
        handleClose();
      }

      if (!canNavigate) return;

      if (e.key === "ArrowRight") {
        setSelectedIndex((prev) => {
          if (prev === null) return null;
          return (prev + 1) % galleryData.length;
        });
      }

      if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) => {
          if (prev === null) return null;
          return (prev - 1 + galleryData.length) % galleryData.length;
        });
      }
    }

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [selectedIndex, canNavigate, galleryData.length]);

  useEffect(() => {
    if (selectedImage) {
      closeButtonRef.current?.focus();
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  function handlePrev() {
    if (!canNavigate) return;
    setSelectedIndex((prev) => {
      if (prev === null) return null;
      return (prev - 1 + galleryData.length) % galleryData.length;
    });
  }

  function handleNext() {
    if (!canNavigate) return;
    setSelectedIndex((prev) => {
      if (prev === null) return null;
      return (prev + 1) % galleryData.length;
    });
  }

  return (
    <>
      {isLoading && (
        <div className={styles.gallery} aria-live="polite" aria-busy="true">
          {skeletonItems.map((_, index) => (
            <div key={index} className={`${styles.card} ${styles.skeleton}`} />
          ))}
        </div>
      )}

      {!isLoading && hasItems && (
        <main className={styles.gallery}>
          {galleryData.map((item, index) => (
            <button
              key={`${item.id}-${item.imageUrl}`}
              className={styles.card}
              type="button"
              aria-label={`Abrir imagem: ${item.title}`}
              onClick={() => setSelectedIndex(index)}
            >
              <Image
                src={resolveImageUrl(item.imageUrl)}
                alt={item.title}
                fill
                className={styles.image}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                unoptimized
              />
              <span className={styles.text}>{item.title}</span>
            </button>
          ))}
        </main>
      )}

      {!isLoading && !hasItems && (
        <p className={styles.statusInfo}>Nenhuma imagem disponivel no momento.</p>
      )}

      {selectedImage && (
        <div
          className={styles.overlay}
          role="dialog"
          aria-modal="true"
          aria-label={`Imagem ampliada: ${selectedImage.title}`}
          onClick={handleClose}
        >
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button
              ref={closeButtonRef}
              className={styles.close}
              type="button"
              aria-label="Fechar imagem"
              onClick={handleClose}
            >
              &times;
            </button>

            {canNavigate && (
              <button
                type="button"
                className={`${styles.nav} ${styles.navPrev}`}
                aria-label="Imagem anterior"
                onClick={handlePrev}
              >
                {"<"}
              </button>
            )}

            <Image
              src={resolveImageUrl(selectedImage.imageUrl)}
              alt={selectedImage.title}
              className={styles.modalImage}
              width={selectedImage.width}
              height={selectedImage.height}
              sizes="92vw"
              priority
              unoptimized
            />

            {canNavigate && (
              <button
                type="button"
                className={`${styles.nav} ${styles.navNext}`}
                aria-label="Proxima imagem"
                onClick={handleNext}
              >
                {">"}
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
