import ServiceItem, { ServiceItemProps } from "./ServiceItem";
export default function Service() {
  const services: ServiceItemProps[] = [
    {
      title: "Sposa",
      text: `Indipendentemente da come immagini il tuo grande giorno, che sia
      intimo, elegante o all’aperto, offro esperienze di bellezza
      personalizzate per accompagnarti in ogni momento, dai preparativi fino
      agli ultimi istanti della celebrazione. Con prodotti di altissima
      qualità e un’attenzione meticolosa ai dettagli, il mio obiettivo è
      valorizzare la tua bellezza naturale con raffinatezza, garantendo un
      make-up impeccabile e duraturo. Ti sposi fuori dall’Abruzzo? Sono
      disponibile per servizi in location esclusive. Contattami per scoprire
      di più sui miei pacchetti sposa e sulle condizioni di trasferta.`,
      variant: "brown",
    },
    {
      title: "Laurea",
      text: `Un momento così importante merita un look all’altezza. Il trucco
      per la laurea è pensato per valorizzarti con eleganza e freschezza,
      accompagnandoti con sicurezza durante uno dei giorni più fotografati
      della tua vita. Utilizzo prodotti professionali e tecniche di lunga
      durata per garantire un make-up che resiste all’emozione, ai sorrisi e
      agli abbracci. Lascia che la tua bellezza racconti la tua conquista.`,
      variant: "white",
    },
    {
      title: "Self-Makeup",
      text: `Vuoi imparare a valorizzarti ogni giorno, in modo semplice e
      raffinato? Le mie lezioni di self-makeup sono pensate per te.
      Attraverso un percorso personalizzato, ti insegnerò le tecniche adatte
      al tuo viso, alla tua pelle e al tuo stile, per un trucco che ti faccia
      sentire sicura, autentica e luminosa. Una coccola per te stessa, che ti
      accompagnerà ogni giorno.`,
      variant: "brown",
    },
    {
      title: "Editoriale",
      text: `Dalla moda alla fotografia artistica, ogni progetto editoriale
      richiede creatività, tecnica e visione. Offro servizi di trucco
      professionale per shooting, riviste e campagne pubblicitarie, curando
      ogni dettaglio per tradurre il concept visivo in un make-up d’impatto.
      Sperimentazione, eleganza e precisione al servizio dell’immagine.`,
      variant: "white",
    },
    {
      title: "Diciottesimo",
      text: `Un evento unico, un passaggio speciale: il debutto merita un
      make-up che rispecchi la tua essenza con delicatezza e grazia. Creo
      look raffinati e armoniosi per esaltare la tua giovinezza, rispettando
      il dress code e il tono della cerimonia. Ogni dettaglio è pensato per
      farti sentire splendida e a tuo agio, nel tuo primo grande passo nella
      società.`,
      variant: "brown",
    },
    {
      title: "Servizi fotografici",
      text: `Che sia per un ritratto personale, un book professionale o una
      sessione tematica, il trucco fotografico richiede equilibrio tra
      naturalezza e presenza scenica. Lavoro con attenzione alla luce, ai
      colori e agli obiettivi dello shooting, per creare un make-up che
      valorizzi ogni scatto e ogni espressione.`,
      variant: "white",
    },
  ];

  return (
    <section className="service">
      {services.map((s, i) => (
        <ServiceItem key={i} {...s} />
      ))}
    </section>
  );
}
