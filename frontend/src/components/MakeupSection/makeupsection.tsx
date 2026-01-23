// import "./makeupSection.css";
// import eli from "../../images/home__makeup.jpg"; // Seu CSS atualizado, incluindo o da connect/bride
import Button from "../ui/Button/Button";
import Image from "next/image";
import Title from "../ui/Title/Title";
import styles from "./makeupsection.module.css";
import eli from "@/public/images/home__makeup.jpg";
import Paragraph from "../ui/Paragraph/Paragraph";

export default function MakeupSection() {
  return (
    <section className={styles.makeup}>
      <div>
        <Image
          src={eli}
          alt="Make-up profissional"
          className={styles.makeup__img}
          loading="lazy"
        />
      </div>

      <div className={styles.makeup__self}>
        <Title>Make-up</Title>
        <Paragraph>
          Prima ancora di iniziare, ti ascolto per capire il tuo stile, la tua
          personalità e ciò che desideri esprimere. Il trucco è un modo per
          rivelare la tua versione migliore, aumentare la fiducia in te stessa e
          valorizzare la tua bellezza unica. Che sia per un’occasione speciale o
          semplicemente per sentirti più bella ogni giorno, il mio obiettivo è
          farti sentire radiosa e naturale.
        </Paragraph>
        <hr />

        <Title>Self-makeup e Consulenza</Title>

        <Paragraph>
          Offro anche lezioni personalizzate di autotrucco, per aiutarti a
          truccarti con sicurezza, praticità e autenticità. Se hai dubbi sulla
          cura della pelle o non sai quali prodotti siano i più adatti a te,
          propongo una consulenza completa per guidarti con attenzione e
          competenza.
        </Paragraph>
        <hr />
        <Title> Parliamo di Beauty</Title>
        <Paragraph>
          Se desideri rimanere sempre aggiornata sul mondo del make-up, con
          consigli, tendenze e ispirazioni, visita il mio blog e scopri
          contenuti pensati per valorizzare la tua bellezza ogni giorno.
        </Paragraph>

        <Button text="Scopri di più" variant="secondary" type="button" />
      </div>
    </section>
  );
}
