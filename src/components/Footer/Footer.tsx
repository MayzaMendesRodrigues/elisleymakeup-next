import Link from "next/link";
import styles from "./Footer.module.css";
import SignatureAnimation from "../Signature/SignatureAnimation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer} id="footer" aria-label="Rodapé">
      <div className={styles.footer__content}>
        <div className={styles.footer__socialContent}>
          {/* ---- COLUNA 1 ---- */}
          <div className={styles.footer__social}>
            <h4 className={styles.footer__socialHeading}>Scopri di più</h4>

            <Link href="/form" className={styles.footer__link}>
              Richiedi preventivo
            </Link>

            <Link href="/servizi" className={styles.footer__link}>
              Servizi
            </Link>

            <Link href="/servizi" className={styles.footer__link}>
              Make-up sposa
            </Link>

            <Link href="/servizi" className={styles.footer__link}>
              Galleria
            </Link>

            <Link href="/contatti" className={styles.footer__link}>
              Contatti
            </Link>

            <Link href="/policy-privacy" className={styles.footer__link}>
              Policy Privacy
            </Link>
          </div>

          {/* ---- COLUNA 2 ---- */}
          <div className={styles.footer__social}>
            <h4 className={`${styles.footer__socialHeading} ${styles.dove}`}>
              Dove mi trovi
            </h4>
            <p className={`${styles.footer__link} ${styles.dove}`}>
              Con sede in Abruzzo, servizi disponibili in tutta Italia.
            </p>
          </div>

          {/* ---- COLUNA 3 ---- */}
          <div className={styles.footer__social}>
            <h4 className={styles.footer__socialHeading}>Seguimi sui social</h4>
            <div className={styles.footer__socialIcon}>
              <a
                href="https://www.instagram.com/elisley_vieiramakeup/"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="1x"
                  className={styles.faBrands}
                />
              </a>
              <a
                href="https://www.facebook.com/elisley.santos.7/"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faFacebookF}
                  size="1x"
                  className={styles.faBrands}
                />
              </a>
              <a
                href="https://www.tiktok.com/@elisleyvieiramakeup"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faTiktok}
                  size="1x"
                  className={styles.faBrands}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ---- LOGO ---- */}
      <div className={styles.footer__logoContent} translate="no">
        <SignatureAnimation delay={0.1} duration={2.0}>
          Elisley Vieira
        </SignatureAnimation>
      </div>

      {/* ---- COPYRIGHT ---- */}
      <div className={styles.footer__copyContent}>
        <p className={styles.footer__copy} translate="no">
          © 2025 Elisley Vieira Makeup
        </p>

        <p className={styles.footer__copy}>
          Website designed by{" "}
          <Link
            href="https://www.linkedin.com/in/mayza-ynara-mendes-rodrigues/"
            className={styles.footer__copyLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Mayza Ynara
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
