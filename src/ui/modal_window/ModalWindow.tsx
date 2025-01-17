"use client";
import React from "react";
import styles from "./ModalWindow.module.scss";
// import { useParams } from "next/navigation";
import { useLanguageStore } from "@/stores/UseLanguageStore";

interface ModalWindowProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalWindow: React.FC<ModalWindowProps> = ({ isOpen, onClose }) => {
  //   const params = useParams();
  const courseId = Number(1);
  const { t } = useLanguageStore();

  const courses = [
    {
      id: 1,
      teacherProfession: "Frontend разработчик",
      access: "навсегда",
      includes: ["9 модулей"],
      price: 200,
      about:
        "Идея реактивного программирования появилась сравнительно недавно, лет 10 назад.",
      teacher: "Евгений Александрович",
      materials: "60 материалов",
      name: "Frontend-разработчик",
      info: "Мастер создания сайтов. Умеет делать их красивыми, интерактивными, с большим функционалом.",
    },
    {
      id: 2,
      teacherProfession: "Frontend разработчик",
      teacher: "Евгений Александрович",
      about:
        "Идея реактивного программирования появилась сравнительно недавно, лет 10 назад.",
      includes: ["6 модулей"],
      access: "месяц",
      price: 900,
      materials: "90 материалов",
      name: "Backend-разработчик",
      info: "Специалист, который отвечает за построение логики для воплощения любой идеи.",
    },
    {
      id: 3,
      teacherProfession: "Frontend разработчик",
      about:
        "Идея реактивного программирования появилась сравнительно недавно, лет 10 назад.",
      teacher: "Евгений Александрович",
      includes: ["3 модуля", "30 материалов"],
      price: 40,
      access: "год",
      name: "UX / UI Дизайнер",
      info: "Креативный специалист, который придумывает дизайн и интерфейс продукта.",
    },
  ];

  const selectedCourse = courses.find((course) => course.id === courseId);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  if (!isOpen || !selectedCourse) return null;

  return (
    <div className={styles.main} onClick={handleOverlayClick}>
      <div className={styles.mainModal}>
        <h1 className={styles.title}>
          {t(
            "Сатып алганыңыз үчүн ыраазычылык билдиребиз!!!",
            "Благодарим за покупку!!!"
          )}
        </h1>
        <h1 className={styles.text}>
          {t("Эми сизге курс жеткиликтүү ", "Теперь вам доступен курс ")}
          {selectedCourse.name}
        </h1>
        <button type="button" className={styles.btn} onClick={onClose}>
          {t("Ок, сатып алганды көрүү.", "Ок, посмотреть покупку")}
        </button>
      </div>
    </div>
  );
};

export default ModalWindow;
