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
  const [selected, setSelected] = useState({
    href: "/profile",
    icon: <FaRegUser />,
    label: "Личные данные",
  });

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

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (item: (typeof items)[0]) => {
    if (item.requiresConfirmation) {
      setOpenModal(true);
    } else {
      setSelected(item);
      setIsOpen(false);
    }
  };
  const handleLogout = async () => {
    const tokens = localStorage.getItem("tokens");

    if (!tokens) {
      console.error("No tokens found in localStorage. Cannot log out.");
      return;
    }

    try {
      const parsedTokens = JSON.parse(tokens);

      if (!parsedTokens?.tokens) {
        console.error("No refresh token found in tokens. Cannot log out.");
        return;
      }

      const res = await logoutUser({
        refresh: parsedTokens.tokens.refresh,
      });

      localStorage.removeItem("tokens");

      setOpenModal(false);
      console.log("Logout successful!");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <>
      <div className={style.mobile}>
        <ul>
          <li onClick={toggleDropdown}>
            <Link href={selected.href}>
              {selected.icon}
              {selected.label}
              <SlArrowDown
                className={`${style.arrow} ${isOpen ? style.open : ""}`}
                style={{
                  transform: isOpen ? "rotate(180deg)" : "rotate(360deg)",
                }}
              />
            </Link>
          </li>

          {isOpen &&
            items
              .filter((item) => item.href !== selected.href)
              .map((item, idx) => (
                <li key={idx} onClick={() => handleSelect(item)}>
                  <Link href={item.href}>
                    {item.icon}
                    {item.label}
                  </Link>
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
