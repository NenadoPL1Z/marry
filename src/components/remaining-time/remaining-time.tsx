import styles from "./remaining-time.module.css";
import classnames from "classnames/bind";
import { useState, useEffect } from "react";

const cn = classnames.bind(styles);

const getPlural = (value: number, titles: [string, string, string]) => {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[
    value % 100 > 4 && value % 100 < 20
      ? 2
      : cases[value % 10 < 5 ? value % 10 : 5]
  ];
};

const formatNumber = (num: number): string => num.toString().padStart(2, "0");

// Фиксированная дата по Челябинску
const TARGET_DATE = new Date("2026-03-20T17:00:00+05:00").getTime();

export const RemainingTime = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculate = () => {
      const diff = TARGET_DATE - Date.now();

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff / 3600000) % 24),
        minutes: Math.floor((diff / 60000) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    calculate();
    const timer = setInterval(calculate, 1000);
    return () => clearInterval(timer);
  }, []);

  const items = [
    {
      v: timeLeft.days,
      t: ["день", "дня", "дней"] as [string, string, string],
    },
    {
      v: timeLeft.hours,
      t: ["час", "часа", "часов"] as [string, string, string],
    },
    {
      v: timeLeft.minutes,
      t: ["минута", "минуты", "минут"] as [string, string, string],
    },
    {
      v: timeLeft.seconds,
      t: ["секунда", "секунды", "секунд"] as [string, string, string],
    },
  ];

  return (
    <div className={styles.container}>
      <h4
        data-aos="fade-up"
        className={cn(styles.paragraph, "sn-pro-regular")}>
        ДО ТОРЖЕСТВА ОСТАЛОСЬ:
      </h4>
      <div
        data-aos="fade-up"
        className={styles.remainingTime}>
        {items.map((item, i) => (
          <div
            key={i}
            className={styles.item}>
            {formatNumber(item.v)}
            {"\n"}
            {getPlural(item.v, item.t)}
          </div>
        ))}
      </div>
    </div>
  );
};
