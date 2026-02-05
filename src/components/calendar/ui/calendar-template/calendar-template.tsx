import styles from "./template.module.css";

export const CalendarTemplate = () => {
  const daysOfWeek: string[] = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
  const daysInMonth: number = 31;
  const startOffset: number = 6; // Отступ, так как 1-е число на изображении в пятницу (индекс 4)

  const emptyCells = Array.from({ length: startOffset }).map((_, index) => (
    <div
      key={`empty-${index}`}
      className={`${styles.calendarDay} ${styles.empty}`}></div>
  ));

  const daysCells = Array.from({ length: daysInMonth }).map((_, index) => (
    <div
      key={index + 1}
      className={styles.calendarDay}>
      {index + 1}
    </div>
  ));

  return (
    <div className={styles.calendarContainer}>
      <div className={styles.calendarHeader}>
        {daysOfWeek.map((day) => (
          <div
            key={day}
            className={styles.dayOfWeek}>
            {day}
          </div>
        ))}
      </div>
      <div className={styles.daysGrid}>
        {emptyCells}
        {daysCells}
      </div>
    </div>
  );
};
