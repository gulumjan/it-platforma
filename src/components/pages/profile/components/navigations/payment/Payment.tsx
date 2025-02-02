"use client";
import Image from "next/image";
import React, { useState } from "react";
import s from "./Payment.module.scss";
import cardImg from "@/assets/card-img.svg";
import visa from "@/assets/visa.svg";

const Payment = () => {
  const [addCart, setAddCart] = useState(false);
  return (
    <div className={s.payment}>
      <h1>Платежные карты</h1>
      <div className={s.cards}>
        <div className={s.card}>
          <h2>Visa Classic</h2>
          <Image src={cardImg} alt="img" />
          <h4>4000 1234 5678 9010</h4>
          <span>12/34</span>
          <Image src={visa} alt="img" className={s.visa} />
        </div>
        <div className={s.card}>
          <h2>Visa Classic</h2>
          <Image src={cardImg} alt="img" />
          <h4>4000 1234 5678 9010</h4>
          <span>12/34</span>
          <Image src={visa} alt="img" className={s.visa} />
        </div>
      </div>
      <div className={s.addCard}>
        {addCart ? (
          <>
            <div className={s.number}>
              <h1 className={s.inputText}>Номер карты *</h1>{" "}
              <input type="text" className={s.input} />
            </div>
            <div className={s.checkBoxes}>
              <div className={s.checkBox}>
                <input
                  type="checkbox"
                  id="checkbox1"
                  className={s.customCheckbox}
                />
                <label htmlFor="checkbox1"></label>
                <h1 className={s.cardText}>Visa</h1>
              </div>
              <div className={s.checkBox}>
                <input
                  type="checkbox"
                  id="checkbox2"
                  className={s.customCheckbox}
                />
                <label htmlFor="checkbox2"></label>{" "}
                <h1 className={s.cardText}>MasterCard</h1>
              </div>{" "}
            </div>
            <div className={s.cardCode}>
              <div className={s.year}>
                <h1 className={s.inputText}>ММ/ГГ *</h1>{" "}
                <input type="number" className={s.input} />
              </div>
              <div className={s.year}>
                <h1 className={s.inputText}>CVC *</h1>{" "}
                <input type="number" className={s.input} />
              </div>
            </div>
            <button onClick={() => setAddCart(false)}>Сохранить картy</button>
          </>
        ) : (
          <>
            <h1>Добавить карту</h1>
            <p>
              Добавьте свою карту, чтобы больше не тратить время на ввод данных
              вручну
            </p>
            <button onClick={() => setAddCart(true)}>Добавить карту</button>
            <p>
              Для проверки карты будет снята минимальная сумма в размере 1$.
              Сумма будет возвращена вам а течении 48 часов
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Payment;
