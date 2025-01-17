"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Toastify styles
import scss from "@/components/pages/Home/SectionHome5.module.scss";

interface FormData {
  fullName: string;
  phone: string;
  email: string;
}

const SectionHome5 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const sendToTelegram = async (data: FormData) => {
    try {
      const chatId = -1002043264040; // Ваш chat_id
      const token = `7043496915:AAEoRK9THxBn75bvcsgliKltPXT25dHhvcc`; // Ваш токен бота
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

      toast.success("Заявка успешно отправлена!", {
        position: "top-right",
        autoClose: 2000,
        theme: "light",
      });

      reset();
    } catch (error) {
      toast.error("Произошла ошибка при отправке заявки.", {
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
          <div className={scss.home5_text}>
            <h2>Оставить заявку</h2>
            <p>
              Заполните краткую форму с ключевыми вопросами, и мы подготовимся к
              разговору с вами.
            </p>
          </div>

          <div className={scss.home_form}>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* ФИО */}
              <p>ФИО*</p>
              <div className={scss.inputWrapper}>
                <input
                  type="text"
                  placeholder="Введите ФИО"
                  {...register("fullName", { required: "Пожалуйста, заполните это поле" })}
                  className={errors.fullName ? scss.errorInput : ""}
                />
                {errors.fullName && (
                  <span className={scss.errorText}>{errors.fullName.message}</span>
                )}
              </div>

              {/* Номер телефона */}
              <p>Номер телефона*</p>
              <div className={scss.inputWrapper}>
                <input
                  type="tel"
                  placeholder="Введите номер телефона"
                  {...register("phone", { required: "Пожалуйста, введите номер телефона" })}
                  className={errors.phone ? scss.errorInput : ""}
                />
                {errors.phone && (
                  <span className={scss.errorText}>{errors.phone.message}</span>
                )}
              </div>

              {/* Email */}
              <p>Email*</p>
              <div className={scss.inputWrapper}>
                <input
                  type="email"
                  placeholder="Введите email"
                  {...register("email", {
                    required: "Пожалуйста, введите email",
                    pattern: {
                      value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      message: "Введите корректный email",
                    },
                  })}
                  className={errors.email ? scss.errorInput : ""}
                />
                {errors.email && (
                  <span className={scss.errorText}>{errors.email.message}</span>
                )}
              </div>

              {/* Кнопка отправки */}
              <button type="submit">Отправить</button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SectionHome5;
