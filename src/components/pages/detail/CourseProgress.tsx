import React, { useEffect } from "react";
import styles from "./CourseProgress.module.scss";
import "aos/dist/aos.css";
import AOS from "aos";

const CourseProgress = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.content_text} data-aos="fade-up">
          <h1>Frontend-разработчик</h1>
          <p>
            Когда нужно переходить от прокачивания личной эффективности к
            изучению эффективности командой?
          </p>
        </div>

        <div className={styles.progress_section} data-aos="fade-up">
          <h2>Прогресс по курсу</h2>

          <div className={styles.progress_bar}>
            <div className={styles.progress_fill}></div>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat_item} data-aos="fade-left">
              <p className={styles.stat_label}>Пройдено модулей</p>
              <p className={styles.stat_value}>0/3</p>
            </div>
            <div className={styles.stat_item} data-aos="fade-right">
              <p className={styles.stat_label}>Пройдено материалов</p>
              <p className={styles.stat_value}>4/60</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseProgress;
