import Image from 'next/image';
import React from 'react';
import s from "./Payment.module.scss";
import cardImg from "@/assets/card-img.svg"
import visa from "@/assets/visa.svg";

const Payment = () => {
    return (
        <div className={s.payment}>
            <h1>Платежные карты</h1>
            <div className={s.cards}>
                <div className={s.card}>
                    <h2>Visa Classic</h2>
                    <Image src={cardImg} alt='img'/>
                    <h4>4000 1234 5678 9010</h4>
                    <span>12/34</span>
                    <Image src={visa} alt='img' className={s.visa}/>
                </div>
                <div className={s.card}>
                    <h2>Visa Classic</h2>
                    <Image src={cardImg} alt='img'/>
                    <h4>4000 1234 5678 9010</h4>
                    <span>12/34</span> 
                    <Image src={visa} alt='img' className={s.visa}/>
                </div>
            </div>
            <div className={s.addCard}>
                <h1>Добавить карту</h1>
                <p>Добавьте свою карту, чтобы больше не тратить время на ввод данных вручну</p>
                <button>Добавить карту</button>
                <p>Для проверки карты будет снята минимальная сумма в размере 1$.  Сумма будет возвращена вам а течении 48 часов</p>
            </div>
        </div>
    );
};

export default Payment;