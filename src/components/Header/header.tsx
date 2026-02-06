import Image from "next/image";
import SignatureAnimation from "../Signature/SignatureAnimation";
import styles from "./header.module.css";

interface HeaderProps {
  backgroundImage: string;
}

export default function Header({ backgroundImage }: HeaderProps) {
  return (
    <header className={styles.header}>
      <Image
        src={`/images/${backgroundImage}`}
        alt="Elisley Make-up background"
        fill
        priority={false}
        className={styles.backgroundImage}
        sizes="(max-width: 768px) 100vw, 100vw"
      />

      <div className={styles.overlay} />

      <div className={styles.headerContent}>
        <SignatureAnimation delay={0.1} duration={2.0}>
          Elisley Vieira
        </SignatureAnimation>
        <p className={styles.headerLocation}>Abruzzo • Italia</p>
      </div>
    </header>
  );
}
