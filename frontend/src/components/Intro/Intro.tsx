"use client";

import { useState } from "react";
import styles from "./Intro.module.css";

export default function Intro() {
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
          TRUCCO PER SPOSE, EVENTI E MOMENTI SPECIALI
        </h1>

        <p className={styles.intro__atencion}>Bellezza nella diversità</p>

        <p className={styles.intro__paragraph}>
          La mia più grande gioia è vederti riconoscere e amare ancora di più te
          stessa guardandoti allo specchio. Attraverso il trucco, esalto la tua
          essenza con delicatezza, cura e intenzione.
          <br />
          <br />
          Specializzata make-up per spose, eventi come lauree, diciottesimi e
          servizi fotografici, mi immergo con pennelli e colori nel tuo giorno
          speciale per raccontare ciò che vivi. Attraverso il trucco, voglio
          farti sentire davvero te stessa, esaltando la tua delicatezza, forza e
          bellezza. Ti va di conoscerci?
        </p>
      </div>
    </section>
  );
}
