"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/assets/logo.svg";
import Link from "next/link";
import s from "./Login.module.scss";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLoginUserMutation } from "@/redux/api/auth";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const { register, handleSubmit } = useForm<AUTH.LoginUserRequest>();
  const [loginUser] = useLoginUserMutation();
  const onSubmit: SubmitHandler<AUTH.LoginUserRequest> = async (data) => {
    console.log(data);
    try {
      const res = await loginUser(data);

      console.log(
        "🚀 ~ constonSubmit:SubmitHandler<AUTH.LoginUserRequest>=async ~ res:",
        res
      );
      localStorage.setItem("tokens", JSON.stringify(res.data));

      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.login}>
      <Image src={logo} alt="logo" width={170} height={106} />
      <div className={s.wrapperInput}>
        <label htmlFor="">Email*</label>
        <input
          {...register("email")}
          placeholder="E mail*"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          title="Please enter a valid email address"
          required
          type="email"
        />
      </div>
      <div className={s.wrapperInput}>
        <label htmlFor="">Пароль*</label>
        <input
          {...register("password")}
          placeholder="Пароль*"
          pattern=".{6,}"
          title="Password must be at least 6 characters long"
          required
          type={`${showPassword ? "text" : "password"}`}
        />
        {showPassword && (
          <GoEye onClick={() => setShowPassword(!showPassword)} />
        )}
        {showPassword || (
          <GoEyeClosed onClick={() => setShowPassword(!showPassword)} />
        )}
      </div>
      <div className={s.btn}>
        <Link href="/auth/register">У Вас нет аккаунта? </Link>
        <Link href={"/auth/forgot"} className={s.forgot}>
          Забыли пароль?
        </Link>
      </div>
      <button type="submit">Войти</button>
    </form>
  );
};

export default LoginPage;
