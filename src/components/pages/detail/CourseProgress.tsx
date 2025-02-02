import React from "react";
import styles from "./CourseProgress.module.scss";

const CourseProgress = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.content_text}>
          <h1>Frontend-разработчик</h1>
          <p>
            Когда нужно переходить от прокачивания личной эффективности к
            изучению эффективности командой?
          </p>
        </div>

        <div className={styles.progress_section}>
          <h2>Прогресс по курсу</h2>

          <div className={styles.progress_bar}>
            <div className={styles.progress_fill}></div>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat_item}>
              <p className={styles.stat_label}>Пройдено модулей</p>
              <p className={styles.stat_value}>0/3</p>
            </div>
            <div className={styles.stat_item}>
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
