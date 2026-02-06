"use client";

import { useState } from "react";
import styles from "./Intro.module.css";

interface IntroProps {
  subtitle?: string;
  title?: string;
  description?: string;
}

export default function Intro({ subtitle, title, description }: IntroProps) {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className={styles.intro} aria-labelledby="intro-title">
      <div
        className={styles.intro__bookingContent}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        aria-hidden="true"
      >
        <span
          className={`${styles.intro__booking} ${
            isPaused ? styles.paused : ""
          }`}
        >
          Prenota ora la tua consulenza • Prenota ora la tua consulenza •
          Prenota ora la tua consulenza • Prenota ora la tua consulenza •
          Prenota ora la tua consulenza • Prenota ora la tua consulenza •
          Prenota ora la tua consulenza • Prenota ora la tua consulenza •
          Prenota ora la tua consulenza • Prenota ora la tua consulenza •
          Prenota ora la tua consulenza • Prenota ora la tua consulenza •
        </span>
      </div>

      {/* Conteúdo */}
      <div className={styles.intro__content}>
        <h1 id="intro-title" className={styles.intro__title}>
          {subtitle}
        </h1>

        <p className={styles.intro__atencion}>{title}</p>

        <p className={styles.intro__paragraph}>{description}</p>
      </div>
    </section>
  );
}
