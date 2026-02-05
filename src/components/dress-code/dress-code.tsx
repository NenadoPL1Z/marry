import styles from "./dress-code.module.css";
import classnames from "classnames/bind";
import { HeartIcon } from "../../ui/icons";
import { COLORS } from "./constants.ts";

const cn = classnames.bind(styles);

export const DressCode = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h2
          data-aos="fade-up"
          className={cn(styles.title, "sn-pro-regular")}>
          DRESS CODE
        </h2>
        <p
          data-aos="fade-right"
          className={cn(styles.paragraph, "sn-pro-regular")}>
          Дорогие гости, мы с особым трепетом готовимся к этому дню! Нам будет
          очень приятно, если ваш наряд будет соответствовать цветовой гамме
          нашей свадьбы!
        </p>
      </div>
      <div className={styles.main}>
        {COLORS.map((color, index) => (
          <div
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-delay={((index + 1) % 4 || 4) * 100}
            className={styles.colorContainer}
            key={color}>
            <div
              className={styles.color}
              style={{ backgroundColor: color }}
            />
            <div className={styles.colorText}>{color.toUpperCase()}</div>
          </div>
        ))}
      </div>
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        className={styles.borderContainer}>
        <div className={styles.border}>
          <div className={styles.heart}>
            <HeartIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
