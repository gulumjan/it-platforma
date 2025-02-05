"use client";
import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import scss from "@/components/pages/Home/SectionHome5.module.scss";
import AOS from "aos";
import "aos/dist/aos.css"; // Импортируем стили для AOS
import { useLanguageStore } from "@/stores/UseLanguageStore";

interface FormData {
  fullName: string;
  phone: string;
  email: string;
}

const SectionHome5 = () => {
  const language = useLanguageStore((state) => state.language);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Длительность анимации
      easing: "ease-in-out", // Эффект перехода
    });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const sendToTelegram = async (data: FormData) => {
    try {
      const chatId = -1002043264040;
      const token = `7043496915:AAEoRK9THxBn75bvcsgliKltPXT25dHhvcc`;
      const apiUrl = `https://api.telegram.org/bot${token}/sendMessage`;

      const message = `
        <b>Новая заявка:</b>\n
        <b>ФИО:</b> ${data.fullName}\n
        <b>Телефон:</b> ${data.phone}\n
        <b>Email:</b> ${data.email}
      `;

      await axios.post(apiUrl, {
        chat_id: chatId,
        parse_mode: "HTML",
        text: message,
      });

      toast.success(language === "ky" ? "Заявка успешно отправлена!" : "Заявка успешно отправлена!", {
        position: "top-right",
        autoClose: 2000,
        theme: "light",
      });

      reset();
    } catch (error) {
      toast.error(language === "ky" ? "Произошла ошибка при отправке заявки." : "Произошла ошибка при отправке заявки.", {
        position: "top-right",
        autoClose: 2000,
        theme: "light",
      });
    }
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    sendToTelegram(data);
  };

  return (
    <div id={scss.home5}>
      <div className="container">
        <div className={scss.home5}>
          <div className={scss.home5_text} data-aos="fade-up">
            <h2>{language === "ky" ? "Заявка калтырыңыз" : "Оставить заявку"}</h2>
            <p>
              {language === "ky" ? "Кыскача форма толтуруп, биз сиз менен сүйлөшүүгө даяр болобуз." : "Заполните краткую форму с ключевыми вопросами, и мы подготовимся к разговору с вами."}
            </p>
          </div>

          <div
            className={scss.home_form}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <p>{language === "ky" ? "Аты-жөнү*" : "ФИО*"}</p>
              <div className={scss.inputWrapper}>
                <input
                  type="text"
                  placeholder={language === "ky" ? "Аты-жөнүңүздү киргизиңиз" : "Введите ФИО"}
                  {...register("fullName", {
                    required: language === "ky" ? "Бул талааны толтуруңуз" : "Пожалуйста, заполните это поле",
                  })}
                  className={errors.fullName ? scss.errorInput : ""}
                />
                {errors.fullName && (
                  <span className={scss.errorText}>
                    {errors.fullName.message}
                  </span>
                )}
              </div>

              <p>{language === "ky" ? "Телефон номери*" : "Номер телефона*"}</p>
              <div className={scss.inputWrapper}>
                <input
                  type="tel"
                  placeholder={language === "ky" ? "Телефон номериңизди киргизиңиз" : "Введите номер телефона"}
                  {...register("phone", {
                    required: language === "ky" ? "Телефон номериңизди киргизиңиз" : "Пожалуйста, введите номер телефона",
                  })}
                  className={errors.phone ? scss.errorInput : ""}
                />
                {errors.phone && (
                  <span className={scss.errorText}>{errors.phone.message}</span>
                )}
              </div>

              <p>{language === "ky" ? "Email*" : "Email*"}</p>
              <div className={scss.inputWrapper}>
                <input
                  type="email"
                  placeholder={language === "ky" ? "Email'иңизди киргизиңиз" : "Введите email"}
                  {...register("email", {
                    required: language === "ky" ? "Email'иңизди киргизиңиз" : "Пожалуйста, введите email",
                    pattern: {
                      value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      message: language === "ky" ? "Дурус email киргизиңиз" : "Введите корректный email",
                    },
                  })}
                  className={errors.email ? scss.errorInput : ""}
                />
                {errors.email && (
                  <span className={scss.errorText}>{errors.email.message}</span>
                )}
              </div>

              <button type="submit">{language === "ky" ? "Жиберүү" : "Отправить"}</button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SectionHome5;
