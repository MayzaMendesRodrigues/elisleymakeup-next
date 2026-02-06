import styles from "./connect.module.css";
interface ConnectProps {
  title: string;
  username: string;
  link: string;
}

export default function Connect({ title, username, link }: ConnectProps) {
  return (
    <section className={styles.connect} id="connect">
      <div className={styles.connect__content}>
        <h2 className={styles.connect__title}>{title}</h2>
        <a
          className={styles.connect__paragraph}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {username}
        </a>
      </div>
    </section>
  );
}
