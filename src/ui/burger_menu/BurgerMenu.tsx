"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import scss from "./BurgerMenu.module.scss";
import { usePathname, useRouter } from "next/navigation";
import { useLanguageStore } from "@/stores/UseLanguageStore";
import Language from "../language/Language";
import { CgPlayListRemove } from "react-icons/cg";
import { IoMdMenu } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [disableClicks, setDisableClicks] = useState(false);
  const pathname = usePathname();
  const language = useLanguageStore((state) => state.language);
  const menuRef = useRef<HTMLDivElement>(null);
  const user = localStorage.getItem("tokens");
  console.log("🚀 ~ BurgerMenu ~ user:", user);
  const router = useRouter();

  const translations = {
    ru: {
      school: "О школе",
      course: "Наши курсы",
      about: "О нас",
      signIn: "Войти",
      follow: "Подписаться",
    },
    ky: {
      course: "Биздин курстар",
      school: "Мектеп жөнүндө",
      about: "Биз жөнүндө",
      signIn: "Кирүү",
      follow: "Катталуу",
    },
  };
  const translate = (key: keyof (typeof translations)["ru"]) => {
    return (
      translations[language as keyof typeof translations]?.[key] ?? translations
    );
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setDisableClicks(true);
    setTimeout(() => {
      setDisableClicks(false);
    }, 500);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        isOpen
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={scss.burgerMenu} ref={menuRef}>
      <button className={scss.burgerIcon} onClick={toggleMenu}>
        {isOpen ? <CgPlayListRemove /> : <IoMdMenu />}
      </button>
      <div className={`${scss.menu} ${isOpen ? scss.open : ""}`}>
        <Link
          href="/about"
          onClick={toggleMenu}
          className={pathname === "/accessory" ? scss.active : ""}
          tabIndex={disableClicks ? -1 : 0}
        >
          {translate("about")}
        </Link>
        <Link
          href="/school"
          onClick={toggleMenu}
          className={pathname === "/catalog" ? scss.active : ""}
          tabIndex={disableClicks ? -1 : 0}
        >
          {translate("school")}
        </Link>

        <Link
          href="/courses"
          onClick={toggleMenu}
          className={pathname === "/contact" ? scss.active : ""}
          tabIndex={disableClicks ? -1 : 0}
        >
          {translate("course")}
        </Link>
        <Link href={""} className={scss.contact}>
          <Language />
        </Link>
        <div className={scss.cond}>
          {user ? (
            <>
              {" "}
              <button> {translate("signIn")}</button>
              <button>{translate("follow")}</button>
            </>
          ) : (
            <>
              <button className={scss.note}>
                <IoMdNotificationsOutline />
              </button>
              <button onClick={() => router.push("/profile")}> Профиль</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
