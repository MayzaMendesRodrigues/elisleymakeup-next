"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./Nav.module.css";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!navRef.current) return;

      if (window.scrollY > 50) {
        navRef.current.classList.add(styles.scrolled);
      } else {
        navRef.current.classList.remove(styles.scrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const trackClick = (label: string) => {
    if (typeof window !== "undefined" && window.goatcounter) {
      window.goatcounter.count({
        path: `nav-click-${label}`,
        title: `Nav click: ${label}`,
        event: true,
      });
    }
  };

  return (
    <nav ref={navRef} className={styles.nav}>
      <button
        className={`material-symbols-outlined  ${styles.navMenuIcon}`}
        aria-label="Abrir menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "close" : "menu"}
      </button>
      <Image
        src={logo}
        alt="Elisley Makeup Logo"
        className={styles.navLogo}
        priority
      />

      <div className={`${styles.navMenu} ${menuOpen ? styles.active : ""}`}>
        <ul className={styles.navItemsMobile}>
          <li>
            <Link
              href="/"
              onClick={() => {
                trackClick("Home-mobile");
                closeMenu();
              }}
            >
              Elisley Vieira
            </Link>
          </li>

          <li>
            <Link
              href="/servizi"
              onClick={() => {
                trackClick("Servizi-mobile");
                closeMenu();
              }}
            >
              Servizi
            </Link>
          </li>

          <li>
            <Link
              href="/sposa"
              onClick={() => {
                trackClick("Sposa-mobile");
                closeMenu();
              }}
            >
              Make-up Sposa
            </Link>
          </li>

          <li>
            <Link
              href="/gallery"
              onClick={() => {
                trackClick("Galleria-mobile");
                closeMenu();
              }}
            >
              Galleria
            </Link>
          </li>

          <li>
            <Link
              href="/contatti"
              onClick={() => {
                trackClick("Contatti-mobile");
                closeMenu();
              }}
            >
              Contatti
            </Link>
          </li>
        </ul>

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
          <a href="https://www.facebook.com/elisley.santos.7/" target="_blank">
            <FontAwesomeIcon
              icon={faFacebookF}
              size="1x"
              className={styles.faBrands}
            />
          </a>
          <a href="https://www.tiktok.com/@elisleyvieiramakeup" target="_blank">
            <FontAwesomeIcon
              icon={faTiktok}
              size="1x"
              className={styles.faBrands}
            />
          </a>
        </div>
      </div>

      {/* Desktop menu */}
      <ul className={styles.navItems}>
        <li>
          <Link href="/" onClick={() => trackClick("Home-desktop")}>
            Elisley Vieira
          </Link>
        </li>
        <li>
          <Link href="/servizi" onClick={() => trackClick("Servizi-desktop")}>
            Servizi
          </Link>
        </li>
        <li>
          <Link href="/sposa" onClick={() => trackClick("Sposa-desktop")}>
            Make-up Sposa
          </Link>
        </li>
        <li>
          <Link href="/gallery" onClick={() => trackClick("Galleria-desktop")}>
            Galleria
          </Link>
        </li>
      </ul>

      <Link
        href="/contatti"
        className={styles.navContact}
        onClick={() => trackClick("Contatti-desktop")}
      >
        Contatti
      </Link>
    </nav>
  );
}
