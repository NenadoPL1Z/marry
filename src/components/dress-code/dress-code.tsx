import styles from "./dress-code.module.css";
import classnames from "classnames/bind";
import { HeartIcon } from "../../ui/icons";

const cn = classnames.bind(styles);

export const DressCode = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h2 className={cn(styles.title, "sn-pro-regular")}>DRESS CODE</h2>
        <p className={cn(styles.paragraph, "sn-pro-regular")}>
          Дорогие гости, мы с особым трепетом готовимся к этому дню! Нам будет
          очень приятно, если ваш наряд будет соответствовать цветовой гамме
          нашей свадьбы!
        </p>
      </div>
      <div className={styles.main}></div>
      <div className={styles.borderContainer}>
        <div className={styles.border}>
          <div className={styles.heart}>
            <HeartIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
