"use client";

import React, { useState } from "react";
import s from "./ProfileNavBar.module.scss";
import Image from "next/image";
import userImg from "@/assets/user-icon.svg";
import { FaRegComment, FaRegUser } from "react-icons/fa";
import Link from "next/link";
import { SlWallet } from "react-icons/sl";
import { CiShoppingBasket } from "react-icons/ci";
import { TbLogout } from "react-icons/tb";
import { MobileProfileNavBar } from "./MobileProfilNav";
import ModalOut from "@/ui/modalOut/ModalOut";
import { useRouter } from "next/navigation";
import { useLogoutUserMutation } from "@/redux/api/auth";

const ProfileNavBar = () => {
  const [openModal, setOpenModal] = useState(false);
  const router = useRouter();
  const [logoutUser] = useLogoutUserMutation();

  const handleLogout = async () => {
    const tokens = localStorage.getItem("tokens");
    if (!tokens) {
      console.error("Ошибка: нет токенов в localStorage.");
      return;
    }

    try {
      const parsedTokens = JSON.parse(tokens);
      const refreshToken = parsedTokens?.tokens?.refresh;

      if (!refreshToken) {
        console.error("Ошибка: отсутствует refresh токен.");
        return;
      }

      console.log("Отправляем запрос на logout...");
      await logoutUser({ refresh: refreshToken }).unwrap();

      localStorage.removeItem("tokens");
      setOpenModal(false);
      console.log("Выход успешен!");
      router.push("/login");
    } catch (error) {
      console.error("Ошибка при выходе:", error);
    }
  };

  return (
    <>
      <MobileProfileNavBar />
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
          <Link href={"/profile/comments"}>
            <FaRegComment />
            Комментарии
          </Link>
          <Link href={"/profile/purchases"}>
            <CiShoppingBasket />
            Мои покупки
          </Link>
          <span onClick={() => setOpenModal(true)}>
            <TbLogout />
            Выйти
          </span>
        </nav>
      </div>

      {openModal && (
        <>
          <ModalOut
            onConfirm={handleLogout}
            onCancel={() => setOpenModal(false)}
          />
          <div
            className={s.bg}
            onClick={() => setOpenModal(false)}
            aria-hidden="true"
          ></div>
        </>
      )}
    </>
  );
};

export default ProfileNavBar;
