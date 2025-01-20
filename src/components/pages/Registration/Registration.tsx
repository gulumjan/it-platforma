"use client";

import React, { useState } from "react";
import scss from "@/components/pages/Registration/Registration.module.scss";
import Link from "next/link";


const Registration = () => {
    const [selectedCard, setSelectedCard] = useState<string>("");

   

    const handleCardInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        let input = event.target.value.replace(/\D/g, ""); // Удалить все символы, кроме цифр
        input = input.match(/.{1,4}/g)?.join(" ") || ""; // Разделить на группы по 4 символа
        event.target.value = input; // Обновить значение поля
    };

    const handleDateInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        let input = event.target.value.replace(/\D/g, ""); // Удалить все символы, кроме цифр
        if (input.length > 2) {
            input = input.slice(0, 2) + "/" + input.slice(2); // Добавить `/` после 2 символов
        }
        event.target.value = input; // Обновить значение поля
    };

    const handleCardSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedCard(event.target.value); // Сохранить выбранную карту
    };



    return (
        <div id={scss.registration}>
            <div className="container">
                <div className={scss.registration}>
                    <h2>Год</h2>
                    <form className={scss.form}>
                        <label>
                            Ф.И.О
                            <input type="text" placeholder="Ваше имя" />
                        </label>
                        <label>
                            Телефон*
                            <input type="tel" placeholder="+996" />
                        </label>
                        <label>
                            E-mail*
                            <input type="email" placeholder="example@mail.com" />
                        </label>
                        <label>
                            Пароль
                            <input type="password" placeholder="••••••••" />
                        </label>

                        <div className={scss.cardOptions}>
                            <p>Выберите платежную карту:</p>
                            <div className={scss.cardSelection}>
                                <label>
                                    <input
                                        type="radio"
                                        name="card"
                                        value="Visa"
                                        onChange={handleCardSelection}
                                    />
                                    Visa
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="card"
                                        value="MasterCard"
                                        onChange={handleCardSelection}
                                    />
                                    MasterCard
                                </label>
                            </div>
                            <p>Вы выбрали карту: {selectedCard || "не выбрано"}</p>
                        </div>
                        <label>
                            Номер карты*
                            <input
                                type="text"
                                placeholder="0000 0000 0000 0000"
                                maxLength={19}
                                onInput={handleCardInput}
                                autoComplete="off"
                                pattern="[\d ]*"
                            />
                        </label>
                        <label>
                            MM/ГГ*
                            <input
                                type="text"
                                placeholder="MM/YY"
                                maxLength={5} // Учитываем длину с `/`
                                onInput={handleDateInput}
                                autoComplete="off"
                            />
                        </label>
                        <label>
                            CVC*
                            <input type="text" placeholder="CVC" maxLength={3} />
                        </label>
                    
                        <label className={scss.checkbox}>
                            <input type="checkbox" />
                            Я ознакомился и согласен с Условиями оказания услуг
                        </label>
                        <Link href={"/articleAfter"}><button type="submit" className={scss.submitBtn}>
                            Оплатить 225.00$
                        </button></Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;

