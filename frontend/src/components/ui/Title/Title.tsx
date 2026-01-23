import styles from "./Title.module.css";

type TextVarient = "Brown" | "White";

type TitleProps = {
  text: string;
  variant?: TextVarient;
};

export default function Title({ text, variant = "White" }: TitleProps) {
  return (
    <h2 className={`${styles.title} ${styles[`title${variant}`]}`}>{text}</h2>
  );
}
