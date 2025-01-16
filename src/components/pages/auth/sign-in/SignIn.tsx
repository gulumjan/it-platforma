import { FC } from "react";
import scss from "./SignIn.module.scss";
import Logo from "@/assets/logo.svg";
import Image from "next/image";

const SignIn: FC = () => {
  return (
    <section className={scss.SignIn}>
      <div className="container">
        <div className={scss.content}>
          <Image width={169} height={106} src={Logo} alt="Logo" />
          <input type="text" placeholder="E mail*" />
          <input type="password" placeholder="Пароль*" />
          <div className={scss.together}>
            <button>Войти</button>
            <a href="#">Забыли пароль?</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
