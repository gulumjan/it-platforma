"use client";
import { FC, useState } from "react";
import scss from "./SignIn.module.scss";
import Logo from "@/assets/logo.svg";
import Image from "next/image";
import { HiEye } from "react-icons/hi";
import { ImEyeBlocked } from "react-icons/im";

const SignIn: FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <section className={scss.SignIn}>
      <div className="container">
        <div className={scss.content}>
          <Image width={169} height={106} src={Logo} alt="Logo" />
          <input
            type="text"
            placeholder="E mail*"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="Please enter a valid email address"
            required
          />
          <div className={scss.passwordWrapper}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Пароль*"
              pattern=".{6,}"
              title="Password must be at least 6 characters long"
              required
            />
            <span
              className={scss.eyeIcon}
              onClick={togglePasswordVisibility}
              role="button"
              aria-label="Toggle password visibility"
            >
              {showPassword ? <HiEye /> : <ImEyeBlocked />}
            </span>
          </div>
          <div className={scss.together}>
            <button type="submit">Войти</button>
            <a href="#">Забыли пароль?</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
