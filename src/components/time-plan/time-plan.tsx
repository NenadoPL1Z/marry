import styles from "./time-plan.module.css";
import classnames from "classnames/bind";

const cn = classnames.bind(styles);

const PLAN = [
  { name: "Торжественная регистрация в ЗАГСЕ", time: "11:00" },
  { name: "Сбор гостей", time: "17:30" },
  { name: "Праздничный торт", time: "21:30" },
  { name: "Завершение вечера", time: "23:00" },
];

export const TimePlan = () => {
  return (
    <div className={styles.container}>
      <h2 className={cn(styles.title, "sn-pro-regular")}>ПЛАН МЕРОПРИЯТИЯ</h2>
      <div className={styles.wrapper}>
        {PLAN.map(({ name, time }, index) => {
          return (
            <div className={cn(styles.item, { right: index % 2 === 1 })}>
              <div
                className={cn(styles.back, "sn-pro-regular", {
                  rightBack: index % 2 === 1,
                })}>
                {time}
              </div>
              <div className={styles.itemWrapper}>
                <div className={cn(styles.time, "sn-pro-regular")}>{time}</div>
                <div className={cn(styles.name, "sn-pro-regular")}>{name}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
