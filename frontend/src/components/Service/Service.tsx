import Accordion from "../ui/Accordion/Accordion";
import Button from "../ui/Button/Button";
import styles from "./Service.module.css";

export default function Service() {
  const services = [
    {
      title: "MAKE-UP SPOSA",
      content:
        "Il servizio include consulenza personalizzata, prova trucco e realizzazione del make-up il giorno del matrimonio, per un look impeccabile e duraturo.",
    },
    {
      title: "MAKE-UP PER LAUREA",
      content:
        "Valorizza il tuo viso per le foto e la cerimonia di laurea, con un trucco elegante e adatto all'occasione.",
    },
    {
      title: "SELF-MAKEUP",
      content:
        "Lezione personalizzata per imparare le tecniche base del make-up, scoprire i prodotti più adatti a te e creare il tuo look perfetto.",
    },
    {
      title: "MAKE-UP EDITORIALE",
      content:
        "Trucco creativo e d'impatto per servizi fotografici, sfilate di moda o progetti editoriali.",
    },
    {
      title: "MAKE-UP DICIOTTESIMO",
      content:
        "Un make-up fresco e raffinato per celebrare un momento speciale come il tuo debutto in società.",
    },
    {
      title: "MAKE-UP PER SERVIZI FOTOGRAFICI",
      content:
        "Realizzazione di make-up specifici per shooting fotografici, garantendo un aspetto impeccabile davanti all'obiettivo.",
    },
  ];

  return (
    <section className={styles.service} id="service">
      <div className={styles.serviceContent}>
        <h2 className={styles.serviceTitle}>I Miei Servizi</h2>

        <Accordion items={services} />

        <Button text="Scopri di più" className="primary" />
      </div>
    </section>
  );
}
