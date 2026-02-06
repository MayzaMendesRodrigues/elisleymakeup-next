import Image from "next/image";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.about} id="about" aria-labelledby="about-title">
      <div className={styles.about__content}>
        <div className={styles.about__image}>
          <Image
            src="/images/elisley.webp"
            alt="La truccatrice Elisley è seduta, sorridente, esibendo il suo trucco professionale."
            className={styles.about__img}
            width={400}
            height={500}
            loading="lazy"
          />

          <div className={styles.about__details}></div>
        </div>

        <div className={styles.about__text}>
          <h2 id="about-title" className={styles.about__elisley}>
            Ciao, sono Elisley
          </h2>

          <p className={styles.about__paragraph}>
            Ho cominciato a truccarmi quando avevo solo 13 anni… ricordo ancora
            quanto quel gesto semplice mi abbia aiutata a sentirmi
            un’adolescente “normale”. In un mondo in cui mi sentivo troppo esile
            per essere e sentirmi bella, il trucco mi ha insegnato che possiamo
            essere diversi e “uguali” allo stesso tempo. Con il tempo ho
            imparato ad ascoltare la mia versione migliore, dando fiducia a me
            stessa. Così, all’età di 15 anni, ho truccato la mia prima cliente.
            Ricordo ancora le sue parole: “Voglio sentirmi più bella
            riconoscendomi.” È lì che ho capito che non sono solo una
            truccatrice per occasioni speciali, ma qualcuno che vuole farti
            sentire speciale e bella nella tua unicità di ogni giorno.
          </p>

          <Image
            src="/images/firma.webp"
            alt="Assinatura de Elisley Vieira"
            className={styles.about__signature}
            loading="lazy"
            width={200}
            height={400}
          />
        </div>
      </div>
    </section>
  );
}
