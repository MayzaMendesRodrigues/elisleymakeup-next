"use client";

import { usePathname } from "next/navigation";
import styles from "./ButtonFloating.module.css";

export default function ButtonFloating() {
  const pathName = usePathname();
  const hiddenPaths = ["/contatti", "/sposa"];

  if (hiddenPaths.includes(pathName)) {
    return null;
  }

  const handleClick = () => {
    if (typeof window !== "undefined" && window.goatcounter) {
      window.goatcounter.count({
        path: "click-preventivo-floatingButton",
        title: "Click Preventivo Floating Button",
        event: true,
      });
    }
  };

  return (
    <a
      href="/contatti"
      className={styles.floatingButton}
      onClick={handleClick}
    >
      Richiedi un preventivo
    </a>
  );
}
