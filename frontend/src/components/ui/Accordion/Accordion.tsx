"use client";
import { useState } from "react";
import styles from "./Accordion.module.css";

type AccordionItem = {
  title: string;
  content: string;
};

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items = [] }: AccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className={styles.accordionContainer}>
      {items.map((item, index) => (
        <div
          key={index}
          className={`${styles.accordion} ${
            activeIndex === index ? styles.open : ""
          }`}
        >
          <button
            className={styles.accordionHeader}
            onClick={() => toggleAccordion(index)}
            aria-expanded={activeIndex === index}
          >
            {item.title}
            <span className={styles.arrow}>
              {activeIndex === index ? "▲" : "▼"}
            </span>
          </button>

          <div
            className={`${styles.accordionContent} ${
              activeIndex === index ? styles.active : ""
            }`}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
}
