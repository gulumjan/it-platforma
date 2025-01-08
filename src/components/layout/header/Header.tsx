import { FC } from "react";
import scss from "./Header.module.scss";
import Logo from "@/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";

const Header: FC = () => {
  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.main}>
            <Image src={Logo} width={40} height={40} alt="Logo" />
            <nav>
              <Link href="#">О школе</Link>
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
