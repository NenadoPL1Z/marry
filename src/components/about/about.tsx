import styles from "./about.module.css";

export const About = () => {
  return (
    <div className={styles.container}>
      <img
        data-aos="slide-custom"
        data-aos-duration="1000"
        alt="m&v"
        src="/public/images/maxim&valeria.jpg"
        className={styles.image}
      />
      <div className={styles.layer} />
      <div
        data-aos="fade-left"
        data-aos-duration="1000"
        className={styles.textWrapper}>
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
