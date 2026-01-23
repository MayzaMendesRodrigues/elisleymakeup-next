import styles from "./Button.module.css";

type ButtonVarient = "Brown" | "White";
interface ButtonProps {
  text: string;
  variant?: ButtonVarient;
}

export default function Button({ text, variant = "White" }: ButtonProps) {
  return (
    <button className={`${styles.button} ${styles[`button${variant}`]}`}>
      {text}
    </button>
  );
}
