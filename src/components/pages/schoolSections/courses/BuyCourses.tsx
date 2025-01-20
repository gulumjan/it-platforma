"use client";

import React, { useEffect, useState } from "react";
import scss from "./BuyCourses.module.scss";
import { useParams } from "next/navigation";
import ModalWindow from "@/ui/modal_window/ModalWindow";
import { useLanguageStore } from "@/stores/UseLanguageStore";
import { useGetCoursDetailQuery } from "@/redux/api/product";
import { TbTrack } from "react-icons/tb";

const BuyCourses = () => {
  const { id } = useParams();
  const { data } = useGetCoursDetailQuery(Number(id));

  const language = useLanguageStore((state) => state.language);

  useEffect(() => {
    console.log("Current language in Header:", language);
  }, [language]);

  const translations = {
    ru: {
      agree: "Я ознакомился и согласен с Условиями оказания услуг",
      pay: "Оплатить",
      cart: "Выберите платежную карту",
      number: "Номер карты *",
    },
    ky: {
      agree: "Мен кызмат көрсөтүү шарттары менен тааныштым жана макулмун",
      pay: "Төлөм жасоо",
      cart: "Төлөм картасын тандаңыз",
      number: "Картанын номери *",
    },
  };

  const translate = (key: keyof (typeof translations)["ru"]) => {
    return (
      translations[language as keyof typeof translations]?.[key] ??
      translations.ru[key]
    );
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
          <h1 className={scss.inputText}>{translate("cart")}</h1>
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
          <h1 className={scss.inputText}>{translate("cart")}</h1>
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
            {translate("pay")}
            {data?.price}.00 $
          </button>
          <div className={scss.checkBox}>
            <input
              type="checkbox"
              id="checkbox3"
              className={scss.customCheckbox}
            />
            <label htmlFor="checkbox3"></label>{" "}
            <h1 className={scss.text}>{translate("agree")}</h1>
          </div>{" "}
        </div>
      </div>
    </section>
  );
};

export default BuyCourses;
