"use client";
import { FC, useEffect, useState } from "react";
import scss from "./Header.module.scss";
import Logo from "@/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const BurgerMenu = dynamic(() => import("@/ui/burger_menu/BurgerMenu"), {
  ssr: false,
});

const Header: FC = () => {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

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
                  <Link href="/school">О школе</Link>
                  <Link href="#">Наши курсы</Link>
                  <Link href="#">О нас</Link>
                </nav>
                <div className={scss.btns}>
                  <button className={scss.loginBtn}>Войти</button>
                  <button className={scss.subscribeBtn}>Подписаться</button>
                </div>
              </>
            ) : (
              <BurgerMenu />
            )}

            <nav>
              <Link href="/school">О школе</Link>
              <Link href="/courses">Наши курсы</Link>
              <Link href="/about">О нас</Link>
            </nav>
          </div>

          <div className={scss.btns}>
            <button className={scss.loginBtn}>Войти</button>
            <button className={scss.subscribeBtn}>Подписаться</button>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
