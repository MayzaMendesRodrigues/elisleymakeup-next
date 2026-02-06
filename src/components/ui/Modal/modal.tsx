"use client";

import styles from "./modal.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
}

export default function Modal({ isOpen, onClose, title, message }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.icon}>✔</div>
        <h3>{title}</h3>
        <p>{message}</p>

        <button onClick={onClose} className={styles.button}>
          Chiudi
        </button>
      </div>
    </div>
  );
}
