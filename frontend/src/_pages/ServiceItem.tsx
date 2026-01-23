import styles from "./ServiceItem.module.css";
import Button from "../components/ui/Button/Button";
import Title from "../components/ui/Title/Title";
import Paragraph from "../components/ui/Paragraph/Paragraph";
import Image, { StaticImageData } from "next/image";

interface ServiceItemProps {
  title: string;
  text?: string;
  variant?: "brown" | "white";
  buttonText?: string;
  imageSrc?: StaticImageData | undefined;
  reverse?: boolean;
  children?: React.ReactNode;
}

export default function ServiceItem({
  title,
  text,
  variant = "brown",
  buttonText = "Richiedi Preventivo",
  imageSrc,
  reverse = false,
  children,
}: ServiceItemProps) {
  const hasImage = Boolean(imageSrc);
  return (
    <div
      className={`${styles.serviceBlock} ${
        variant === "brown" ? styles.serviceBrown : styles.serviceWhite
      } ${reverse && hasImage ? styles.reverse : ""}`}
    >
      <div
        className={`${styles.serviceContent} ${
          !hasImage ? styles.noImage : ""
        }`}
      >
        {imageSrc && (
          <div className={styles.imageWrapper}>
            <Image src={imageSrc} alt="Servizio makeup" />
          </div>
        )}

        <div className={styles.textContent}>
          <Title
            text={title}
            variant={variant === "brown" ? "White" : "Brown"}
          />

          {children ? children : <Paragraph text={text} variant="Brown" />}

          <Button
            text={buttonText}
            variant={variant === "brown" ? "White" : "Brown"}
          />
        </div>
      </div>
    </div>
  );
}
