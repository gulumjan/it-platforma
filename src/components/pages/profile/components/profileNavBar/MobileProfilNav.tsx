"use client";

import { useState } from "react";
import { FaRegComment, FaRegUser } from "react-icons/fa";
import { SlArrowDown, SlWallet } from "react-icons/sl";
import style from "./MobileProfileNav.module.scss";
import Link from "next/link";
import { CiShoppingBasket } from "react-icons/ci";
import { TbLogout } from "react-icons/tb";
import ModalOut from "@/ui/modalOut/ModalOut";
import { useRouter } from "next/navigation";
import { useGetUserQuery, useLogoutUserMutation } from "@/redux/api/auth";

export const MobileProfileNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const { data } = useGetUserQuery();
  const [logoutUser] = useLogoutUserMutation();
  const router = useRouter();

  const items = [
    { href: "/profile", icon: <FaRegUser />, label: "Личные данные" },
    { href: "/profile/payment", icon: <SlWallet />, label: "Платежные карты" },
    { href: "/profile/comments", icon: <FaRegComment />, label: "Комментарии" },
    {
      href: "/profile/purchases",
      icon: <CiShoppingBasket />,
      label: "Мои покупки",
    },
    {
      href: "#",
      icon: <TbLogout />,
      label: "Выйти",
      requiresConfirmation: true,
    },
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (item: (typeof items)[0]) => {
    if (item.requiresConfirmation) {
      setOpenModal(true);
    } else {
      setIsOpen(false);
    }
  };

  const handleLogout = async () => {
    console.log("Начинаем выход...");

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
      router.push("/auth/login");
    } catch (error) {
      console.error("Ошибка при выходе:", error);
    }
  };

  return (
    <>
      <div className={style.mobile}>
        <ul>
          <li onClick={toggleDropdown}>
            <Link href={items[0].href}>
              {items[0].icon}
              {items[0].label}
              <SlArrowDown
                className={`${style.arrow} ${isOpen ? style.open : ""}`}
              />
            </Link>
          </li>

          {isOpen &&
            items.slice(1).map((item, idx) => (
              <li key={idx} onClick={() => handleSelect(item)}>
                {item.requiresConfirmation ? (
                  <span>
                    {item.icon} {item.label}
                  </span>
                ) : (
                  <Link href={item.href}>
                    {item.icon} {item.label}
                  </Link>
                )}
              </li>
            ))}
        </ul>
      </div>

      {openModal && (
        <>
          <ModalOut
            onConfirm={handleLogout}
            onCancel={() => setOpenModal(false)}
          />
          <div
            className={style.bg}
            onClick={() => setOpenModal(false)}
            aria-hidden="true"
          ></div>
        </>
      )}
    </>
  );
};
