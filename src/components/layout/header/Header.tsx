"use client";
import { FC, useEffect, useState } from "react";
import scss from "./Header.module.scss";
import Logo from "@/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { useLanguageStore } from "@/stores/UseLanguageStore";
import Language from "@/ui/language/Language";
import { useGetUserQuery } from "@/redux/api/auth";
import { IoMdNotificationsOutline } from "react-icons/io";
import { json } from "stream/consumers";

const BurgerMenu = dynamic(() => import("@/ui/burger_menu/BurgerMenu"), {
  ssr: false,
});

const Header: FC = () => {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const language = useLanguageStore((state) => state.language);
  const { data } = useGetUserQuery();
  const user = localStorage.getItem("tokens");
  console.log("🚀 ~ user:", user);

  useEffect(() => {
    console.log("Current language in Header:", language);
  }, [language]);

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
      translations[language as keyof typeof translations]?.[key] ??
      translations.ru[key]
    );
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1119);
    setIsMobile(window.innerWidth <= 1119);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.main}>
            <Image
              onClick={() => router.push("/")}
              src={Logo}
              width={72}
              height={45}
              alt="Logo"
            />
            {!isMobile ? (
              <>
                <nav>
                  <Link href="/school">{translate("school")}</Link>
                  <Link href="/courses">{translate("course")}</Link>
                  <Link href="/about">{translate("about")}</Link>
                  <Language />
                </nav>
                <div className={scss.btns}>
                  {user == "undefined" ? (
                    <>
                      <button
                        onClick={() => router.push(`/auth/login`)}
                        className={scss.loginBtn}
                      >
                        {translate(`signIn`)}
                      </button>
                      <button
                        onClick={() => router.push(`/registration`)}
                        className={scss.subscribeBtn}
                      >
                        {translate("follow")}
                      </button>
                    </>
                  ) : (
                    <>
                      <button className={scss.note}>
                        <IoMdNotificationsOutline />
                      </button>
                      <button
                        onClick={() => router.push(`/profile`)}
                        className={scss.subscribeBtn2}
                      >
                        Профиль
                      </button>
                    </>
                  )}
                </div>
              </>
            ) : (
              <BurgerMenu />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
