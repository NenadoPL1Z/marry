import styles from "./form.module.css";
import classnames from "classnames/bind";
import { useState } from "react";

const cn = classnames.bind(styles);

export const Form = () => {
  const [name, setName] = useState("");

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h2 className={cn(styles.title, "sn-pro-regular")}>АНКЕТА</h2>
        <p className={cn(styles.paragraph, "sn-pro-regular")}>
          Будем очень признательны, если Вы сообщите нам о своем решении до
          01.03.2026
        </p>
      </div>
      <form className={styles.form}>
        <div className={styles.formItem}>
          <label
            className={styles.label}
            htmlFor="name-input">
            Ваше имя и фамилия
          </label>
          <input
            type="text"
            id="name-input"
            name="user_name"
            max={50}
            placeholder="ФИО"
            className={styles.input}
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.formItem}>
          <label
            className={styles.label}
            htmlFor="radio">
            Планируете ли вы присутствовать на свадьбе?
          </label>
          ...
        </div>
        <div className={styles.formItem}>
          <label
            className={styles.label}
            htmlFor="checkbox">
            Что предпочитаете из напитков?
          </label>
          ...
        </div>
        <button
          type="submit"
          className={styles.button}>
          ОТПРАВИТЬ
        </button>
      </form>
    </div>
  );
};
