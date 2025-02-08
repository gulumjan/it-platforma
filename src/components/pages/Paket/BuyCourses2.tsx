"use client";

import React, { useState } from "react";
import scss from "./BuyCourses2.module.scss";
import { useParams, useRouter } from "next/navigation";
import ModalWindow from "@/ui/modal_window/ModalWindow";
import { useLanguageStore } from "@/stores/UseLanguageStore";
import {
  useGetCoursDetailQuery,
  useGetVisaCartQuery,
  usePaymentCourseTariffMutation,
} from "@/redux/api/product";
import { SubmitHandler, useForm } from "react-hook-form";
import { useGetUserQuery } from "@/redux/api/auth";

const BuyCourses2 = () => {
  const { id } = useParams();
  const { data } = useGetCoursDetailQuery(Number(id));
  const { data: visa } = useGetVisaCartQuery();
  const router = useRouter();
  const language = useLanguageStore((state) => state.language);
  const [paymentCourseTariff] = usePaymentCourseTariffMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: user } = useGetUserQuery();

  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm<PRODUCT.PostPaymentCourseTariffRequest>();

  const selectedCard = watch("card_number");

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

  const onSubmit: SubmitHandler<
    PRODUCT.PostPaymentCourseTariffRequest
  > = async (data) => {
    if (!data.card_number) {
      setError("card_number", {
        type: "manual",
        message: "Выберите карту для оплаты!",
      });
      return;
    }

    try {
      const newData = {
        user: user[0].id,
        tariff: Number(id),
        email: data.email,
        fio: data.fio,
        phone: data.phone,
        card_number: data.card_number,
        is_active: true,
      };
      const res = await paymentCourseTariff(newData);
      if (res) {
        router.push("/articleBefore");
      }
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

        <div className={scss.cardSelection}>
          <h1 className={scss.inputText}>{translate("cart")}</h1>
          <select
            className={scss.select}
            {...register("card_number")}
            defaultValue=""
          >
            <option value="" disabled>
              {translate("cart")}
            </option>
            {visa?.map((el) => (
              <option key={el.id} value={el.id}>
                {el.number_cart}
                {el.graduation_date}
              </option>
            ))}
          </select>
          {errors.card_number && (
            <p className={scss.errorText}>{errors.card_number.message}</p>
          )}
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

export default BuyCourses2;
