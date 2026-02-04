import styles from "./remaining-time.module.css";
import classnames from "classnames/bind";

const cn = classnames.bind(styles);

export const RemainingTime = () => {
  return (
    <div className={styles.container}>
      <h4 className={cn(styles.paragraph, "sn-pro-regular")}>
        ДО ТОРЖЕСТВА ОСТАЛОСЬ:
      </h4>
      <div className={styles.remainingTime}>
        <div className={styles.item}>0{"\n"}дней</div>
        <div className={styles.item}>0{"\n"}часов</div>
        <div className={styles.item}>0{"\n"}минут</div>
        <div className={styles.item}>0{"\n"}секунд</div>
      </div>
    </div>
  );
};
