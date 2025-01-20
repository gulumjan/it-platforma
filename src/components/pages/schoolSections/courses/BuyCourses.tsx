"use client";

import React, { useState } from "react";
import scss from "./BuyCourses.module.scss";
import { useParams } from "next/navigation";
import ModalWindow from "@/ui/modal_window/ModalWindow";
import { useLanguageStore } from "@/stores/UseLanguageStore";

const BuyCourses = () => {
  const params = useParams();
  const courseId = Number(params?.confirm);
  const { language } = useLanguageStore();

  const courses = [
    {
      id: 1,
      teacherProfession: "Frontend разработчик",

      access: "навсегда",
      includes: ["9 модулей"],
      price: 200,
      about:
        "Идея реактивного программирования появилась сравнительно недавно, лет 10 назад. ",
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
        "Идея реактивного программирования появилась сравнительно недавно, лет 10 назад. ",
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
        "Идея реактивного программирования появилась сравнительно недавно, лет 10 назад. ",
      teacher: "Евгений Александрович",
      includes: ["3 модулей", "30 материалов"],
      price: 40,
      access: "год",
      name: "UX / UI Дизайнер",
      info: "Креативный специалист, который придумывает дизайн и интерфейс продукта.",
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const selectedCourse = courses.find((course) => course.id === courseId);

  return (
    <section className={scss.BuyInputs}>
      <ModalWindow isOpen={isModalOpen} onClose={closeModal} />
      <div className={scss.content}>
        <div className={scss.nameInput}>
          <h1 className={scss.inputText}>Ф.И.О*</h1>
          <input type="text" className={scss.input} />
        </div>
        <div className={scss.numberInput}>
          {" "}
          <h1 className={scss.inputText}>Телефон*</h1>
          <div className={scss.inputBlock}>
            <h1 className={scss.inputBlockText}>+996</h1>
            <input type="number" className={scss.input} />
          </div>
        </div>
        <div className={scss.emailInput}>
          {" "}
          <h1 className={scss.inputText}>E mail*</h1>
          <input type="email" className={scss.input} />
        </div>
        <div className={scss.card}>
          {" "}
          <h1 className={scss.inputText}>
            {t("Төлөм картасын тандаңыз", "Выберите платежную карту")}
          </h1>
          <div className={scss.checkBoxes}>
            <div className={scss.checkBox}>
              <input
                type="checkbox"
                id="checkbox1"
                className={scss.customCheckbox}
              />
              <label htmlFor="checkbox1"></label>
              <h1 className={scss.cardText}>Visa</h1>
            </div>
            <div className={scss.checkBox}>
              <input
                type="checkbox"
                id="checkbox2"
                className={scss.customCheckbox}
              />
              <label htmlFor="checkbox2"></label>{" "}
              <h1 className={scss.cardText}>MasterCard</h1>
            </div>{" "}
          </div>
        </div>
        <div className={scss.cardNumber}>
          {" "}
          <h1 className={scss.inputText}>
            {t("Картанын номери *", "Номер карты *")}
          </h1>
          <input type="number" className={scss.input} />
        </div>
        <div className={scss.cardCode}>
          <div className={scss.year}>
            <h1 className={scss.inputText}>ММ/ГГ *</h1>{" "}
            <input type="number" className={scss.input} />
          </div>
          <div className={scss.cvc}>
            <h1 className={scss.inputText}>CVC *</h1>{" "}
            <input type="number" className={scss.input} />
          </div>
        </div>
        <div className={scss.actions}>
          <button className={scss.button} onClick={openModal}>
            {t("Төлөм жасоо ", "Оплатить ")}
            {selectedCourse?.price}.00 $
          </button>
          <div className={scss.checkBox}>
            <input
              type="checkbox"
              id="checkbox3"
              className={scss.customCheckbox}
            />
            <label htmlFor="checkbox3"></label>{" "}
            <h1 className={scss.text}>
              {t(
                "Мен кызмат көрсөтүү шарттары менен тааныштым жана макулмун",
                "Я ознакомился и согласен с Условиями оказания услуг "
              )}
            </h1>
          </div>{" "}
        </div>
      </div>
    </section>
  );
};

export default BuyCourses;
