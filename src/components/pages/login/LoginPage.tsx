"use client"
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/assets/logo.svg";
import Link from "next/link";
import s from "./Login.module.scss";
import { GoEye, GoEyeClosed } from "react-icons/go";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <form className={s.login}>
      <Image src={logo} alt="logo" width={170} height={106} />
      <div className={s.wrapperInput}>
        <label htmlFor="">Email*</label>
        <input type="email" />
      </div>
      <div className={s.wrapperInput}>
        <label htmlFor="">Пароль*</label>
        <input type={`${showPassword ? "text" : "password"}`} />
       {showPassword &&  <GoEye  onClick={() => setShowPassword(!showPassword)}/>}
       {showPassword ||  <GoEyeClosed  onClick={() => setShowPassword(!showPassword)}/>}
      </div>
      <div className={s.btn}>
        <button>Войти</button>
        <Link href={"#"}>Забыли пароль?</Link>
      </div>
    </form>
  );
};

export default LoginPage;
