import styles from "./map.module.css";
import classnames from "classnames/bind";
import { useEffect, useRef, useState } from "react";

const cn = classnames.bind(styles);

export const Map = () => {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.addEventListener("click", (event) => {
      setIsActive(event.target === ref.current);
    });
  });

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <p
          data-aos="fade-up"
          className={cn(styles.info, "sn-pro-regular")}>
          Торжественный вечер пройдет по адресу:
        </p>
        <p
          data-aos="fade-up"
          className={cn(styles.info, "sn-pro-regular")}>
          г. Челябинск, Сквер им. Андреевского, Центральный район, улица
          Энгельса, 107, 2 этаж.
        </p>
        <p
          data-aos="fade-up"
          className={cn(styles.info, styles.last, "sn-pro-regular")}>
          Заведение "More amore event hall", <br />
          Зал "BELLO"
        </p>
        <a
          data-aos="fade-up"
          className={cn(styles.link, "sn-pro-regular")}
          href="https://yandex.ru/maps/56/chelyabinsk/?from=mapframe&ll=61.381064%2C55.147771&mode=routes&rtext=~55.147695%2C61.381307&rtt=auto&ruri=~&source=mapframe&utm_source=mapframe&z=18"
          rel="noreferrer"
          target="_blank">
          КАК ДОБРАТЬСЯ ?
        </a>
      </div>
      <div
        ref={ref}
        className={cn(styles.iframeContainer, { active: isActive })}
        style={{ position: "relative", overflow: "hidden" }}>
        <iframe
          src="https://yandex.ru/map-widget/v1/?ll=61.381696%2C55.147597&mode=poi&poi%5Bpoint%5D=61.381305%2C55.147695&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D31075054813%26yclid%3D16318103294341021695%26banner_id%3D1891473168391350346&z=18"
          width="100%"
          height="399px"
          frameBorder="0"
          scrolling="no"
          allowFullScreen
          style={{ position: "relative" }}></iframe>
      </div>
    </div>
  );
};
