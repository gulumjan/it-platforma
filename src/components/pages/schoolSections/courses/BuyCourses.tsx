"use client";

import React, { useEffect, useState } from "react";
import scss from "./BuyCourses.module.scss";
import { useParams } from "next/navigation";
import ModalWindow from "@/ui/modal_window/ModalWindow";
import { useLanguageStore } from "@/stores/UseLanguageStore";
import {
  useGetCoursDetailQuery,
  usePaymentCourseTariffMutation,
} from "@/redux/api/product";
import { SubmitHandler, useForm } from "react-hook-form";

const BuyCourses = () => {
  const { id } = useParams();
  const { data } = useGetCoursDetailQuery(Number(id));
  const { register, handleSubmit, setValue } =
    useForm<PRODUCT.PostPaymentCourseTariffRequest>();

  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const language = useLanguageStore((state) => state.language);
  const [paymentCourseTariff] = usePaymentCourseTariffMutation();

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

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleCheckboxChange = (value: string) => {
    setSelectedPayment(value);
    setValue("payment_method", value); // Set form value
  };

  const onSubmit: SubmitHandler<
    PRODUCT.PostPaymentCourseTariffRequest
  > = async (data) => {
    console.log({ ...data, payment_method: selectedPayment, course: id });
    try {
      const newData = {
        card_cvv: data.card_cvv,
        card_expiry: data.card_expiry,
        card_number: data.card_number,
        course: Number(id),
        email: data.email,
        fio: data.fio,
        payment_method: data.payment_method,
        phone: data.phone,
      };
      const res = await paymentCourseTariff(newData);
      console.log("🚀 ~ >= ~ res:", res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className={scss.BuyInputs}>
      <ModalWindow isOpen={isModalOpen} onClose={closeModal} />
      <form className={scss.content} onSubmit={handleSubmit(onSubmit)}>
        <div className={scss.nameInput}>
          <h1 className={scss.inputText}>Ф.И.О*</h1>
          <input {...register("fio")} type="text" className={scss.input} />
        </div>

        <div className={scss.numberInput}>
          <h1 className={scss.inputText}>Телефон*</h1>
          <div className={scss.inputBlock}>
            <h1 className={scss.inputBlockText}>+996</h1>
            <input
              {...register("phone")}
              type="number"
              className={scss.input}
            />
          </div>
        </div>

        <div className={scss.emailInput}>
          <h1 className={scss.inputText}>E-mail*</h1>
          <input {...register("email")} type="email" className={scss.input} />
        </div>

        <div className={scss.card}>
          <h1 className={scss.inputText}>{translate("cart")}</h1>
          <div className={scss.checkBoxes}>
            <div className={scss.checkBox}>
              <input
                type="checkbox"
                id="checkbox1"
                className={scss.customCheckbox}
                checked={selectedPayment === "visa"}
                onChange={() => handleCheckboxChange("visa")}
              />
              <label htmlFor="checkbox1"></label>
              <h1 className={scss.cardText}>Visa</h1>
            </div>

            <div className={scss.checkBox}>
              <input
                type="checkbox"
                id="checkbox2"
                className={scss.customCheckbox}
                checked={selectedPayment === "MasterCard"}
                onChange={() => handleCheckboxChange("MasterCard")}
              />
              <label htmlFor="checkbox2"></label>
              <h1 className={scss.cardText}>MasterCard</h1>
            </div>
          </div>
        </div>

        <div className={scss.cardNumber}>
          <h1 className={scss.inputText}>{translate("number")}</h1>
          <input
            {...register("card_number")}
            type="number"
            className={scss.input}
          />
        </div>

        <div className={scss.cardCode}>
          <div className={scss.year}>
            <h1 className={scss.inputText}>ММ/ГГ *</h1>
            <input
              {...register("card_expiry")}
              type="date"
              className={scss.input}
            />
          </div>
          <div className={scss.cvc}>
            <h1 className={scss.inputText}>CVC *</h1>
            <input
              {...register("card_cvv")}
              type="number"
              className={scss.input}
            />
          </div>
        </div>

        <div className={scss.actions}>
          <button className={scss.button} type="submit">
            {translate("pay")} {data?.price}.00 $
          </button>

          <div className={scss.checkBox}>
            <input
              type="checkbox"
              id="checkbox3"
              className={scss.customCheckbox}
            />
            <label htmlFor="checkbox3"></label>
            <h1 className={scss.text}>{translate("agree")}</h1>
          </div>
        </div>
      </form>
    </section>
  );
};

export default BuyCourses;
