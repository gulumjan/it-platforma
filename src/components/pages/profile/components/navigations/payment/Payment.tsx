"use client";
import Image from "next/image";
import React, { useState } from "react";
import s from "./Payment.module.scss";
import cardImg from "@/assets/card-img.svg";
import visa from "@/assets/visa.svg";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  useCreateVisaCartMutation,
  useGetVisaCartQuery,
} from "@/redux/api/product";
import { useLanguageStore } from "@/stores/UseLanguageStore";

const Payment = () => {
  const [addCart, setAddCart] = useState(false);
  const { register, handleSubmit, setValue } =
    useForm<PRODUCT.PostCreateVisaCartRequest>();
  const [createVisaCart] = useCreateVisaCartMutation();
  const { data } = useGetVisaCartQuery();
  console.log("🚀 ~ Payment ~ data:", data);

  const [selectedPayment, setSelectedPayment] = useState<string | null>();

  const language = useLanguageStore((state) => state.language);

  const translations = {
    ru: {
      cart: "Платежные карты",
      cart_number: "Номер карты",
      save: "Сохранить карту",
      add: "Добавить карту",
      text1:
        "Добавьте свою карту, чтобы больше не тратить время на ввод данных вручную",
      text2:
        "Для проверки карты будет снята минимальная сумма в размере 1$. Сумма будет возвращена вам в течение 48 часов",
    },
    ky: {
      cart: "Төлөм карталары",
      cart_number: "Картанын номери",
      save: "Картаны сактоо",
      add: "Картаны кошуу",
      text1:
        "Өз картаңызды кошуп, маалыматтарды кол менен киргизүүгө убакыт коротпоңуз",
      text2:
        "Картаны текшерүү үчүн 1$ өлчөмүндөгү минималдуу сумма алынат. Бул сумма 48 сааттын ичинде кайтарылып берилет",
    },
  };

  const translate = (key: keyof (typeof translations)["ru"]) => {
    return (
      translations[language as keyof typeof translations]?.[key] ??
      translations.ru[key]
    );
  };

  const handleCheckboxChange = (value: string) => {
    setSelectedPayment(value);
    setValue("bank_cart", value);
  };

  const onSubmit: SubmitHandler<PRODUCT.PostCreateVisaCartRequest> = async (
    data
  ) => {
    console.log(data);
    try {
      const newData = {
        user: 2,
        bank_cart: selectedPayment,
        number_cart: data.number_cart,
        graduation_date: data.graduation_date,
        csv: data.csv,
      };
      const result = await createVisaCart(newData);
      console.log("🚀 ~ Payment ~ result:", result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={s.payment}>
      <h1>{translate("cart")}</h1>
      <div className={s.cards}>
        {data?.map((el, index) => (
          <div key={index} className={s.card}>
            <h2>{el.bank_cart} Classic</h2>
            <Image src={cardImg} alt="img" />
            <h4>{el.number_cart}</h4>
            <span>{el.graduation_date}</span>
            <Image src={visa} alt="img" className={s.visa} />
          </div>
        ))}
      </div>
      <div className={s.addCard}>
        {addCart ? (
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className={s.number}>
              <h1 className={s.inputText}>{translate("cart_number")} *</h1>
              <input
                {...register("number_cart", {
                  required: "Номер карты обязателен",
                  pattern: {
                    value: /^[0-9]{16}$/,
                    message: "Введите правильный номер карты",
                  },
                })}
                type="text"
                className={s.input}
              />
            </div>
            <div className={s.checkBoxes}>
              <div className={s.checkBox}>
                <input
                  type="radio"
                  id="visa"
                  name="payment_type"
                  className={s.customCheckbox}
                  checked={selectedPayment === "visa"}
                  onChange={() => handleCheckboxChange("visa")}
                />
                <label htmlFor="visa">Visa</label>
              </div>
              <div className={s.checkBox}>
                <input
                  type="radio"
                  id="mastercard"
                  name="payment_type"
                  className={s.customCheckbox}
                  checked={selectedPayment === "mastercard"}
                  onChange={() => handleCheckboxChange("mastercard")}
                />
                <label htmlFor="mastercard">MasterCard</label>
              </div>
            </div>
            <div className={s.cardCode}>
              <div className={s.year}>
                <h1 className={s.inputText}>ММ/ГГ *</h1>
                <input
                  {...register("graduation_date", {
                    required: "Дата обязательна",
                  })}
                  type="date"
                  className={s.input}
                />
              </div>
              <div className={s.year}>
                <h1 className={s.inputText}>CVC *</h1>
                <input
                  {...register("csv", {
                    required: "CVC обязателен",
                    pattern: {
                      value: /^[0-9]{3,4}$/,
                      message: "Введите правильный CVC код",
                    },
                  })}
                  type="number"
                  className={s.input}
                />
              </div>
            </div>
            <button type="submit">{translate("save")}</button>
          </form>
        ) : (
          <>
            <h1>{translate("add")}</h1>
            <p>{translate("text1")}</p>
            <button onClick={() => setAddCart(true)}>{translate("add")}</button>
            <p>{translate("text2")}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Payment;
