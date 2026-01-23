import Link from "next/link";
import styles from "./Footer.module.css";

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

            <Link href="/service" className={styles.footer__link}>
              Servizi
            </Link>

            <Link href="/contatti" className={styles.footer__link}>
              Contatti
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
                className={styles.footer__socialLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Elisley Vieira"
              >
                <i className="fa-brands fa-instagram" />
              </a>

              <a
                href="https://www.linkedin.com/in/elisley-vieira-0294282b5/"
                className={styles.footer__socialLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Elisley Vieira"
              >
                <i className="fa-brands fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ---- LOGO ---- */}
      <div className={styles.footer__logoContent} translate="no">
        <h2 className={styles.footer__logoText}>Elisley Vieira</h2>
        <p className={styles.footer__logoMakeup}>MAKEUP</p>
      </div>

      {/* ---- COPYRIGHT ---- */}
      <div className={styles.footer__copyContent}>
        <p className={styles.footer__copy} translate="no">
          © 2025 Elisley Vieira Makeup
        </p>

        <p className={styles.footer__copy}>
          Website designed by{" "}
          <a
            href="https://www.linkedin.com/in/mayza-ynara-mendes-rodrigues/"
            className={styles.footer__copyLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Mayza Ynara
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
