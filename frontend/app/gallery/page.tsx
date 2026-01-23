"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./gallery.module.css";

type GalleryItemType = {
  id: number;
  attributes: {
    title: string;
    order: number;
    image: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
};

interface ActiveItem {
  src: string;
  text: string;
}

export default function Gallery() {
  const [items, setItems] = useState<GalleryItemType[]>([]);
  const [activeItem, setActiveItem] = useState<ActiveItem | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    async function fetchGallery() {
      try {
        const response = await fetch(
          "http://localhost:1337/api/galleries?sort=order:asc&populate=Image"
        );
        const data = await response.json();
        setItems(data.data);
      } catch (error) {
        console.error("Erro ao buscar galeria:", error);
      }
    }

    fetchGallery();
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveItem(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    if (activeItem) {
      closeButtonRef.current?.focus();
    }
  }, [activeItem]);

  return (
    <>
      <section className={styles.gallery}>
        {items.map((item) => {
          const imageUrl = item.attributes.image?.data?.attributes?.url;
          if (!imageUrl) return null;

          return (
            <motion.div
              key={item.id}
              className={`${styles.card} ${styles.vertical}`}
              onClick={() =>
                setActiveItem({
                  src: `http://localhost:1337${imageUrl}`,
                  text: item.attributes.title,
                })
              }
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Image
                src={`http://localhost:1337${imageUrl}`}
                alt={item.attributes.title}
                fill
                className={styles.image}
              />
              <span className={styles.text}>{item.attributes.title}</span>
            </motion.div>
          );
        })}
      </section>

      <AnimatePresence>
        {activeItem && (
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveItem(null)}
          >
            <motion.div
              className={styles.modal}
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                ref={closeButtonRef}
                className={styles.close}
                aria-label="Fechar imagem"
                onClick={() => setActiveItem(null)}
              >
                ✕
              </button>

              <Image
                src={activeItem.src}
                alt={activeItem.text}
                width={900}
                height={1200}
                className={styles.modalImage}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
