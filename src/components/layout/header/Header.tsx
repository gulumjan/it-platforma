"use client";
import { FC } from "react";
import scss from "./Header.module.scss";
import Logo from "@/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header: FC = () => {
  const router = useRouter();
  return (
    <header className={scss.Header}>
      <div className={scss.container}>
        <div className={scss.content}>
          <div className={scss.main}>
            <Image
              onClick={() => router.push("/")}
              src={Logo}
              width={72}
              height={45}
              alt="Logo"
            />

            <nav>
              <Link href="/school">О школе</Link>
              <Link href="#">Наши курсы</Link>
              <Link href="#">О нас</Link>
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
