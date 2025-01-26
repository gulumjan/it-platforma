import React from "react";
import s from "./Notification.module.scss";
import Link from "next/link";
import { CiCreditCard1 } from "react-icons/ci";

const Notification = () => {
  return (
    <div className={s.notification}>
      <div className="container">
        <div className={s.main}>
          <Link href={"/#"}>
            <span> Главная / </span> Уведомлении
          </Link>
        </div>
        <h1>Уведомлении</h1>
        <div className={s.card}>
          <CiCreditCard1 />
          <div className={s.cardText}>
            <h3>02.05.2022 г</h3>
            <br />
            <h3>Вы оформили подписку пакет “год” </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
