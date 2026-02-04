import styles from "./calendar.module.css";
import classnames from "classnames/bind";
const cn = classnames.bind(styles);

export const Calendar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.about}>
        <div className={cn(styles.date, "sn-pro-regular")}>20.03.2026</div>
        <h2 className={cn(styles.title, "sn-pro-regular")}>ДОРОГИЕ ГОСТИ!</h2>
        <p className={cn("sn-pro-regular", styles.paragraph)}>
          Есть события, которые остаются в памяти на всю жизнь, и есть люди, с
          которыми хочется их разделить.
        </p>
        <p className={cn("sn-pro-regular", styles.paragraph)}>
          Один день в этом году станет для нас по-настоящему особенным.
        </p>
        <p className={cn("sn-pro-regular", styles.paragraph)}>
          Приглашаем вас разделить с нами праздник, посвященный созданию нашей
          семьи и отметить в кругу родных и близких нам людей.
        </p>
      </div>
      <div className={styles.calendar}>
        <div className={cn(styles.mouth, "sn-pro-regular")}>МАРТ 2026</div>
        <div className={styles.calendarImgContainer}>
          <img
            className={styles.calendarImg}
            alt="календарь"
            src="/images/calendar.png.webp"
          />
          <img
            className={styles.heartImg}
            alt="сердце"
            src="/images/heart.png"
          />
        </div>
      </div>
    </div>
  );
};
