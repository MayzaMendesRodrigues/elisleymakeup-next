import photo_1 from "../../../public/images/photoCarrosel_1.jpg";
import photo_2 from "../../../public/images/photoCarrosel_2.png";
import photo_3 from "../../../public/images/photoCarrosel_3.jpg";
import photo_4 from "../../../public/images/photograph.jpg";
import logo from "../../../public/images/logo.png";
import Image, { StaticImageData } from "next/image";
import styles from "./PhotographBride.module.css";

const photos: StaticImageData[] = [
  photo_1,
  photo_2,
  photo_3,
  photo_4,
  photo_1,
  photo_2,
  photo_3,
  photo_4,
  photo_1,
  photo_2,
  photo_3,
  photo_4,
  logo,
  logo,
  logo,
  logo,
];

export default function PhotographBride() {
  return (
    <section className={styles.photographBride}>
      <div className={styles.photosTrack}>
        {[...photos, ...photos].map((src, index) =>
          src !== logo ? (
            <Image
              key={`photo${index}`}
              src={src}
              alt={`Foto ${index + 1}`}
              className={styles.photo}
            />
          ) : null,
        )}
      </div>

      <div className={styles.logoTrack}>
        {[...photos, ...photos].map((src, index) =>
          src === logo ? (
            <Image
              key={`logo-${index}`}
              src={src}
              alt="Logo"
              className={styles.logo}
            />
          ) : null,
        )}
      </div>
    </section>
  );
}
