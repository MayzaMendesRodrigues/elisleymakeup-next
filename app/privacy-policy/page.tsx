import styles from "./PrivacyPolicy.module.css";
import Title from "@/src/components/ui/Title/Title";

export default function PrivacyPolicyPage() {
  return (
    <main className={styles.page}>
      <section className={styles.container}>
        <header className={styles.header}>
          <Title text="Privacy Policy" variant="Brown" />
        </header>

        <section className={styles.section}>
          <h2>1. Titolare del trattamento dei dati</h2>
          <p>
            Ai sensi del Regolamento UE 2016/679 (GDPR), il titolare del
            trattamento dei dati personali è Elisley Vieira, in qualità di
            responsabile della squadra di Elisley Vieira Makeup, che gestisce
            questo sito e i servizi offerti.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Tipologia di dati trattati</h2>
          <p>
            Attraverso il modulo di contatto vengono raccolti i seguenti dati
            personali:
            <ul>
              <li>Nome e Cognome</li>
              <li>Numero di telefono</li>
              <li>Indirizzo email</li>
              <li>Data e orario del matrimonio</li>
              <li>Luogo del matrimonio</li>
              <li>Wedding Planner (se fornito)</li>
              <li>Fotografo (se fornito)</li>
              <li>Preferenze, richieste e messaggi relativi al trucco sposa</li>
              <li>
                Modalità di contatto preferita (WhatsApp, Email o Chiamata)
              </li>
            </ul>
          </p>
          <p>
            Il conferimento dei dati è facoltativo, ma necessario per poter
            rispondere alle richieste dell’utente.
          </p>
        </section>

        <section className={styles.section}>
          <h2>3. Finalità del trattamento</h2>
          <p>
            I dati personali sono trattati esclusivamente per le seguenti
            finalità:
            <ul>
              <li>
                Gestire e rispondere alle richieste inviate tramite il sito
              </li>
              <li>Contattare l’utente in merito ai servizi richiesti</li>
              <li>
                Organizzare appuntamenti e informazioni relative all’evento
              </li>
            </ul>
          </p>
          <p>
            I dati non saranno utilizzati per finalità di marketing,
            profilazione o newsletter senza consenso esplicito.
          </p>
        </section>

        <section className={styles.section}>
          <h2>4. Base giuridica del trattamento</h2>
          <p>
            Consenso dell’interessato (art. 6, par. 1, lett. a GDPR), espresso
            mediante l’invio volontario del modulo di contatto.
          </p>
        </section>

        <section className={styles.section}>
          <h2>5. Modalità di trattamento e conservazione</h2>
          <p>
            I dati sono trattati nel rispetto dei principi di liceità,
            correttezza e trasparenza e conservati solo per il tempo
            strettamente necessario al raggiungimento delle finalità indicate o
            per adempiere ad obblighi legali. Sono adottate misure tecniche e
            organizzative adeguate per garantire la sicurezza dei dati
            personali.
          </p>
        </section>

        <section className={styles.section}>
          <h2>6. Comunicazione e diffusione dei dati</h2>
          <p>
            I dati personali non saranno diffusi né ceduti a terzi. Potranno
            essere comunicati esclusivamente in caso di obbligo legale o
            richiesta da parte delle autorità competenti.
          </p>
        </section>

        <section className={styles.section}>
          <h2>7. Diritti dell’interessato</h2>
          <p>
            Ai sensi degli articoli 15–22 del GDPR, l’utente ha il diritto di:
            <ul>
              <li>Accedere ai propri dati personali</li>
              <li>Richiedere la rettifica o la cancellazione </li>
              <li>Limitare o opporsi al trattamento</li>
              <li>Revocare il consenso in qualsiasi momento</li>
            </ul>
          </p>

          <p>
            Le richieste possono essere inviate tramite i contatti indicati sul
            sito.
          </p>
        </section>

        <section className={styles.section}>
          <h2>8. Modifiche alla presente informativa</h2>
          <p>
            La presente Privacy Policy può essere soggetta ad aggiornamenti. Si
            invita l’utente a consultarla periodicamente.
          </p>
        </section>
      </section>
    </main>
  );
}
