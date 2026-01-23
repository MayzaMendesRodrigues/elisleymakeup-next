import React from "react";
import Link from "next/link";
import Button from "../ui/Button/Button";
import styles from "./BrideHome.module.css";

const BrideHome: React.FC = () => {
  return (
    <section className={styles.bride} id="bride-makeup">
      {/* <div className="bride__img" /> */}

      <div className={styles.brideContent}>
        <h2 className={styles.brideTitle}>
          Sei una sposa? Questo spazio è per te.
        </h2>

        <p className={styles.brideParagraph}>
          Compila il modulo per ricevere il tuo preventivo personalizzato e
          rendere il tuo giorno speciale ancora più magico.
        </p>

        <Link href="/form">
          <Button
            text="Richiedi Preventivo"
            variant="secondary"
            type="button"
          />
        </Link>
      </div>
    </section>
  );
};

export default BrideHome;
