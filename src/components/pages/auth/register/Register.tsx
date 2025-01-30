"use client";
import Image from "next/image";
import React, { FC, useState } from "react";
import logo from "@/assets/logo.svg";
import Link from "next/link";
import s from "./Register.module.scss";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRegisterUserMutation } from "@/redux/api/auth";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const { register, handleSubmit } = useForm<AUTH.RegisterUserRequest>();
  const [registerUser] = useRegisterUserMutation();

  const onSubmit: SubmitHandler<AUTH.RegisterUserRequest> = async (data) => {
    console.log(data);
    try {
      const res = await registerUser(data);
      console.log(
        "🚀 ~ constonSubmit:SubmitHandler<AUTH.RegisterUserRequest>=async ~ res:",
        res
      );
      localStorage.setItem("tokens", JSON.stringify(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.login}>
      <Image src={logo} alt="logo" width={170} height={106} />
      <div className={s.wrapperInput}>
        <label htmlFor="email">Email*</label>
        <input
          {...register("email", { required: true })}
          placeholder="E mail*"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          title="Please enter a valid email address"
          required
          type="email"
        />
      </div>
      <div className={s.wrapperInput}>
        <label htmlFor="username">Username*</label>
        <input
          {...register("username", { required: true })}
          placeholder="Username*"
          required
          type="text"
        />
      </div>
      <div className={s.wrapperInput}>
        <label htmlFor="birthday">Birthday*</label>
        <input
          {...register("birthday", { required: true })}
          placeholder="Date*"
          title="Please enter a valid email address"
          required
          type="date"
        />
      </div>
      <div className={s.wrapperInput}>
        <label htmlFor="gender_status">Gender*</label>
        <input
          {...register("gender_status", { required: true })}
          placeholder="Gender*"
          required
          type="text"
        />
      </div>
      <div className={s.wrapperInput}>
        <label htmlFor="phone_number">Phone number*</label>
        <input
          {...register("phone_number", { required: true })}
          placeholder="Phone number*"
          required
          type="text"
        />
      </div>
      <div className={s.wrapperInput}>
        <label htmlFor="city">City*</label>
        <input
          {...register("city", { required: true })}
          placeholder="City*"
          required
          type="text"
        />
      </div>
      <div className={s.wrapperInput}>
        <label htmlFor="country">Country*</label>
        <input
          {...register("country", { required: true })}
          placeholder="Country*"
          required
          type="text"
        />
      </div>
      <div className={s.wrapperInput}>
        <label htmlFor="position">Position*</label>
        <input
          {...register("position", { required: true })}
          placeholder="Position*"
          required
          type="text"
        />
      </div>
      <div className={s.wrapperInput}>
        <label htmlFor="password">Пароль*</label>
        <input
          {...register("password", { required: true })}
          placeholder="Пароль*"
          pattern=".{6,}"
          title="Password must be at least 6 characters long"
          required
          type={showPassword ? "text" : "password"}
        />
        {showPassword ? (
          <GoEye onClick={() => setShowPassword(!showPassword)} />
        ) : (
          <GoEyeClosed onClick={() => setShowPassword(!showPassword)} />
        )}
      </div>
      <div className={s.btn}>
        <Link href="/auth/register">У вас уже есть аккаунт ? </Link>
        <Link href={"/"} className={s.forgot}>
          Забыли пароль?
        </Link>
      </div>
      <button type="submit">Войти</button>
    </form>
  );
};

export default Register;
