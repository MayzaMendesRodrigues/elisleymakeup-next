import Link from "next/link";
import styles from "./Button.module.css";

type ButtonVarient = "Brown" | "White";
interface ButtonProps {
  text: string;
  variant?: ButtonVarient;
  href: string;
}

export default function Button({ text, variant = "White", href }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`${styles.button} ${styles[`button${variant}`]}`}
    >
      {text}
    </Link>
  );
}
