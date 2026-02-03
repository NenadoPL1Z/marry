import styles from "./about.module.css";

export const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.layer} />
      <div className={styles.textWrapper}>
        <span className={styles.small}>&</span>
        <h1 className={`${styles.name} great-vibes-regular`}>
          Maxim
          <br />
          Valeria
        </h1>
      </div>
      <div className={styles.bottom} />
    </div>
  );
};
