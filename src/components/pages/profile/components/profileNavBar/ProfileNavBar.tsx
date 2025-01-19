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

const ProfileNavBar = () => {
  const [openModal, setOpenModal] = useState(false);
  const router = useRouter()

  const handleLogoutConfirm = () => {
    setOpenModal(false);
    router.push("/")
  };

  const handleLogoutCancel = () => {
    setOpenModal(false);
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
            onConfirm={handleLogoutConfirm}
            onCancel={handleLogoutCancel}
          />
          <div
            className={s.bg}
            onClick={handleLogoutCancel}
            aria-hidden="true"
          ></div>
        </>
      )}
    </>
  );
};

export default ProfileNavBar;
