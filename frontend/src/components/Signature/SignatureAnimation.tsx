"use client";

import { useEffect, useRef, useMemo } from "react";
import letters from "../../utils/letters";
import styles from "./Signature.module.css";

interface SignatureAnimationProps {
  children: string;
  duration?: number;
  delay?: number;
}

export default function SignatureAnimation({
  children,
  duration = 1,
  delay = 0,
}: SignatureAnimationProps) {
  const signRef = useRef<HTMLDivElement | null>(null);

  const text = useMemo(() => children.split(""), [children]);

  useEffect(() => {
    const animateLetters = async () => {
      if (!signRef.current) return;

      const letterDivs = Array.from(
        signRef.current.children
      ) as HTMLDivElement[];

      for (const letter of letterDivs) {
        const paths = letter.querySelectorAll("path");

        for (const path of Array.from(paths)) {
          const length = path.getTotalLength();

          path.style.strokeDasharray = `${length}`;
          path.style.strokeDashoffset = `${length}`;
          path.style.transition = "none";

          await new Promise((resolve) => setTimeout(resolve, 20));

          path.style.transition = `stroke-dashoffset ${duration}s ease-in-out`;
          path.style.strokeDashoffset = "0";
        }

        if (delay > 0) {
          await new Promise((resolve) => setTimeout(resolve, delay * 1000));
        }
      }
    };

    animateLetters();
  }, [text, duration, delay]);

  return (
    <div className={styles.signatureMain} ref={signRef}>
      {text.map((char, index) =>
        char === " " ? (
          <div key={index} style={{ minWidth: 12 }} />
        ) : letters[char] ? (
          <div
            key={index}
            className={`${styles.letter} ${
              char === char.toUpperCase() ? styles.up : styles.lo
            }`}
            dangerouslySetInnerHTML={{ __html: letters[char] }}
          />
        ) : null
      )}
    </div>
  );
}
