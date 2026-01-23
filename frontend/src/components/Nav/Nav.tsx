"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./Nav.module.css";
import Image from "next/image";
import logo from "@/public/images/logo.png";
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
            <Link href="/" onClick={closeMenu}>
              Elisley Vieira
            </Link>
          </li>

          <li>
            <Link href="/servizi" onClick={closeMenu}>
              Servizi
            </Link>
          </li>

          <li>
            <Link href="/sposa" onClick={closeMenu}>
              Make-up Sposa
            </Link>
          </li>

          <li>
            <Link href="/gallery" onClick={closeMenu}>
              Galleria
            </Link>
          </li>

          <li>
            <Link href="/contatti" onClick={closeMenu}>
              Contatti
            </Link>
          </li>
        </ul>
      </div>

      {/* Desktop menu */}
      <ul className={styles.navItems}>
        <li>
          <Link href="/">Elisley Vieira</Link>
        </li>
        <li>
          <Link href="/servizi">Servizi</Link>
        </li>
        <li>
          <Link href="/sposa">Make-up Sposa</Link>
        </li>
        <li>
          <Link href="/gallery">Galleria</Link>
        </li>
      </ul>

      <Link href="/contatti" className={styles.navContact}>
        Contatti
      </Link>
    </nav>
  );
}
