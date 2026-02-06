import React from "react";
import styles from "./Feedback.module.css";

interface FeedbackProps {
  title: string;
  text: React.ReactNode;
}

export default function Feedback({ title, text }: FeedbackProps) {
  return (
    <section className={`${styles.feedback}`}>
      <div className={styles.feedback__content}>
        <h2 className={styles.feedback__title}>{title}</h2>
        <p className={styles.feedback__paragraph}>{text}</p>
      </div>
    </section>
  );
}
