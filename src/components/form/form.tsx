import styles from "./form.module.css";
import classnames from "classnames/bind";
import { type FormEvent, useState } from "react";

const cn = classnames.bind(styles);
const MAX_NAME_LENGTH = 100;

const DRINK_OPTIONS = [
  "Шампанское",
  "Вино белое",
  "Вино красное",
  "Коньяк",
  "Виски",
  "Водка",
  "Безалкогольные напитки",
];

interface FormErrors {
  name?: string;
  attendance?: string;
}

export const Form = () => {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState("");
  const [selectedDrinks, setSelectedDrinks] = useState<string[]>([]);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFailed, setIsFailed] = useState(false);

  // НОВЫЙ ФУНКЦИОНАЛ: состояние успеха
  const [isSubmitted, setIsSubmitted] = useState(
    localStorage.getItem("wedding_form_submitted") === "true",
  );

  const handleDrinkChange = (drink: string) => {
    setSelectedDrinks((prev) =>
      prev.includes(drink) ? prev.filter((d) => d !== drink) : [...prev, drink],
    );
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!name.trim()) {
      newErrors.name = "Введите ваше ФИО";
    } else if (name.trim().length < 2) {
      newErrors.name = "ФИО слишком короткое";
    } else if (name.trim().length > MAX_NAME_LENGTH) {
      newErrors.name = "ФИО слишком длинное";
    }
    if (!attendance) {
      newErrors.attendance = "Пожалуйста, выберите один из вариантов";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setIsFailed(false);

    try {
      console.log("Данные к отправке:", { name, attendance, selectedDrinks });

      await fetch("https://marry-tg.onrender.com/api/send-tg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          attendance,
          selectedDrinks: selectedDrinks ?? [],
        }),
      });

      localStorage.setItem("wedding_form_submitted", "true");
      setIsSubmitted(true);
    } catch (err) {
      setIsFailed(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  // НОВЫЙ ФУНКЦИОНАЛ: сброс формы
  const handleReset = () => {
    localStorage.removeItem("wedding_form_submitted");
    setIsSubmitted(false);
    setName("");
    setAttendance("");
    setSelectedDrinks([]);
    setErrors({});
  };

  if (isFailed) {
    return (
      <div className={styles.container}>
        <div className={styles.successWrapper}>
          <div className={cn(styles.successIcon, styles.errorIcon)}>!</div>
          <h2 className={cn(styles.title, "sn-pro-regular")}>ОШИБКА</h2>
          <p className={cn(styles.paragraph, "sn-pro-regular")}>
            К сожалению, не удалось отправить анкету. Пожалуйста, свяжитесь с
            нами в мессенджерах или по номеру телефона
          </p>
          <button
            className={cn(styles.button, styles.buttonAgain)}
            onClick={() => setIsFailed(false)}>
            ПОПРОБОВАТЬ ЕЩЕ РАЗ
          </button>
        </div>
      </div>
    );
  }

  if (isSubmitted) {
    return (
      <div className={styles.container}>
        <div className={styles.successWrapper}>
          <div className={styles.successIcon}>✓</div>
          <h2 className={cn(styles.title, "sn-pro-regular")}>СПАСИБО!</h2>
          <p className={cn(styles.paragraph, "sn-pro-regular")}>
            Ваш ответ успешно сохранен. <br />
            До встречи на свадьбе!
          </p>
          <button
            className={cn(styles.button, styles.buttonAgain)}
            onClick={handleReset}>
            ОТПРАВИТЬ ЕЩЕ РАЗ
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h2
          data-aos="fade-right"
          className={cn(styles.title, "sn-pro-regular")}>
          АНКЕТА
        </h2>
        <p
          data-aos="fade-right"
          className={cn(styles.paragraph, "sn-pro-regular")}>
          Будем очень признательны, если Вы сообщите нам о своем решении до
          01.03.2026
        </p>
      </div>

      <form
        className={styles.form}
        onSubmit={handleSubmit}
        noValidate>
        <div
          data-aos="fade-right"
          className={styles.formItem}>
          <label
            className={styles.label}
            htmlFor="name-input">
            Ваше имя и фамилия
          </label>
          <input
            type="text"
            id="name-input"
            className={cn(styles.input, { [styles.inputError]: errors.name })}
            value={name}
            placeholder="ФИО"
            maxLength={MAX_NAME_LENGTH} // Добавлено ограничение
            onChange={(e) => {
              setName(e.target.value);
              if (errors.name) setErrors({ ...errors, name: undefined });
            }}
          />
          {errors.name && (
            <span className={styles.errorText}>{errors.name}</span>
          )}
        </div>

        <div
          data-aos="fade-right"
          className={styles.formItem}>
          <label className={styles.label}>
            Планируете ли вы присутствовать?
          </label>
          <div
            className={cn(styles.radioGroup, {
              [styles.groupError]: errors.attendance,
            })}>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="attendance"
                value="Да, с удовольствием!"
                checked={attendance === "Да, с удовольствием!"}
                onChange={(e) => {
                  setAttendance(e.target.value);
                  setErrors({ ...errors, attendance: undefined });
                }}
                className={styles.radioInput}
              />
              Да, с удовольствием!
            </label>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="attendance"
                value="К сожалению, не смогу"
                checked={attendance === "К сожалению, не смогу"}
                onChange={(e) => {
                  setAttendance(e.target.value);
                  setErrors({ ...errors, attendance: undefined });
                }}
                className={styles.radioInput}
              />
              К сожалению, не смогу
            </label>
          </div>
          {errors.attendance && (
            <span className={styles.errorText}>{errors.attendance}</span>
          )}
        </div>

        {attendance === "Да, с удовольствием!" && (
          <div
            data-aos="fade-right"
            className={styles.formItem}>
            <label className={styles.label}>
              Что предпочитаете из напитков?
            </label>
            <div className={styles.checkboxGroup}>
              {DRINK_OPTIONS.map((drink) => (
                <label
                  key={drink}
                  className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    checked={selectedDrinks.includes(drink)}
                    onChange={() => handleDrinkChange(drink)}
                    className={styles.checkboxInput}
                  />
                  {drink}
                </label>
              ))}
            </div>
          </div>
        )}

        <button
          type="submit"
          className={styles.button}
          disabled={isSubmitting}>
          {isSubmitting ? "ОТПРАВКА..." : "ОТПРАВИТЬ"}
        </button>
      </form>
    </div>
  );
};
