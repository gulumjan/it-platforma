import React from "react";
import s from "./ProfileNavBar.module.scss";
import Image from "next/image";
import userImg from "@/assets/user-icon.svg";
import { FaRegComment, FaRegUser } from "react-icons/fa";
import Link from "next/link";
import { MdPayment } from "react-icons/md";
import { SlWallet } from "react-icons/sl";
import { CiShoppingBasket } from "react-icons/ci";
import { TbLogout } from "react-icons/tb";

const ProfileNavBar = () => {
  return (
    <div className={s.navBar}>
      <Image src={userImg} alt="img" />
      <button>Добавить фото</button>
      <nav>
        <Link href={"/profile"}>
          <FaRegUser />
          Личные данные
        </Link>
        <Link href={"/profile/payment"}>
          <SlWallet />
          Платежные карты
        </Link>
        <Link href={"/profile/subscriptions"}>
          <MdPayment />
          Подписки
        </Link>
        <Link href={"/profile/comments"}>
          <FaRegComment />
          Комментарии
        </Link>
        <Link href={"/profile/purchases"}>
          <CiShoppingBasket />
          Мои покупки
        </Link>
        <Link href={"#"}>
          <TbLogout />
          Выйти
        </Link>
      </nav>
    </div>
  );
};

export default ProfileNavBar;
