"use client";
import { usePathname } from "next/navigation";
import styles from "./ButtonFloating.module.css";
export default function ButtonFloating() {
  const pathName = usePathname();
  const hiddenPaths = ["/contatti", "/sposa"];
  if (hiddenPaths.includes(pathName)) {
    return null;
  }
  return (
    <a href="/contatti" className={styles.floatingButton}>
      Richiedi un preventivo
    </a>
  );
}
