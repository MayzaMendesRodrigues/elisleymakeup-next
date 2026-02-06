import About from "@/src/components/About/About";
import Intro from "@/src/components/Intro/Intro";
import Feedback from "@/src/components/Feedback/Feedback";
import Service from "@/src/components/Service/Service";
import PhotographBride from "@/src/components/PhotographBride/PhotographBride";
import BrideHome from "@/src/components/BrideHome/BrideHome";
import Connect from "@/src/components/Social/connect";
import MakeupSection from "@/src/components/MakeupSection/makeupsection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Intro
        subtitle="TRUCCO PER SPOSE, EVENTI E MOMENTI SPECIALI"
        title=" Bellezza nella diversità"
        description=" La mia più grande gioia è vederti riconoscere e amare ancora di più te
          stessa guardandoti allo specchio. Attraverso il trucco, esalto la tua
          essenza con delicatezza, cura e intenzione.
        
          Specializzata make-up per spose, eventi come lauree, diciottesimi e
          servizi fotografici, mi immergo con pennelli e colori nel tuo giorno
          speciale per raccontare ciò che vivi. Attraverso il trucco, voglio
          farti sentire davvero te stessa, esaltando la tua delicatezza, forza e
          bellezza. Ti va di conoscerci?"
      />
      <About />
      <Feedback
        title="“ Elisley è una professionista di altissimo livello.”"
        text={
          <>
            Elisley è una professionista di altissimo livello. Mi ha seguito per
            il make up del mio matrimonio ed è stato tutto perfetto: ha un
            approccio gentile e comprensivo che in quelle giornate è
            fondamentale.
            <br />
            <br />
            Come tutte le spose, sono stata sottoposta a stress e grandi
            emozioni e avere al mio fianco una persona come lei è stato di
            grande aiuto. Sa ascoltare e comprende al volo i desideri, arrivando
            addirittura a prevederli. Il mio matrimonio è stato diviso su due
            giornate: si trattava di due stili diversi che necessitavano make up
            ad hoc e sono rimasta davvero colpita e stregata dalla sua bravura.
            <br />
            <br />
            Consiglio vivamente e di cuore Elisley per accompagnarti in questo
            meraviglioso viaggio. Grazie per averlo reso perfetto.
          </>
        }
      />

      <Service />
      <PhotographBride />
      <Feedback
        text={
          <>
            Eli è arrivata il giorno del mio matrimonio e ha portato subito una
            calma che ha contagiato tutti. È estremamente professionale e la sua
            presenza trasmette fiducia e tranquillità — ed è proprio questo che
            fa la differenza in una giornata così piena di emozioni.
            <br />
            <br />
            Non sono mai stata una grande amante del trucco, e avevo paura di
            non riconoscermi allo specchio... Ma lei mi ha fatta sentire così a
            mio agio! Il make-up ha valorizzato chi sono, senza eccessi — era
            come vedermi nella mia versione migliore.
            <br />
            <br />
            Tutto è stato così naturale che mi sono sentita davvero bella. E la
            cosa più bella: ho potuto godermi ogni momento con leggerezza.
          </>
        }
        title="“Mi sono sentita davvero me stessa”"
      />
      <BrideHome />
      <Connect
        title="connettiti con me"
        username="@ELISLEY_VIEIRAMAKEUP"
        link="https://www.instagram.com/elisley_vieiramakeup/"
      />
      <MakeupSection />
    </main>
  );
}
