import styles from "./time-plan.module.css";
import classnames from "classnames/bind";

const cn = classnames.bind(styles);

export const TimePlan = () => {
  return (
    <div className={styles.container}>
      <h2 className={cn(styles.title, "sn-pro-regular")}>ПЛАН МЕРОПРИЯТИЯ</h2>
    </div>
  );
};
