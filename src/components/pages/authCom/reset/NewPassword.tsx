"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/assets/logo.svg";
import s from "./NewPassword.module.scss";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { useChangePasswordMutation } from "@/redux/api/auth";
import { GoEye, GoEyeClosed } from "react-icons/go";
import PasswordChanged from "@/ui/modal_window/PasswordChanged";

const NewPassword = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<AUTH.ChangePasswordRequest>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [changePassword] = useChangePasswordMutation();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    router.push("/auth/login");
  };

  const onSubmit: SubmitHandler<AUTH.ChangePasswordRequest> = async (data) => {
    console.log("Form Data:", data);
    try {
      const res = await changePassword(data).unwrap();
      console.log("New Password Response:", res);
      openModal();
    } catch (error) {
      console.error("Error submitting forgot password request:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.login}>
      <Image src={logo} alt="logo" width={170} height={106} />
      <PasswordChanged isOpen={isModalOpen} onClose={closeModal} />

      <div className={s.wrapperInput}>
        <label htmlFor=""> Электронная почта*</label>
        <input
          {...register("email")}
          placeholder="Пароль*"
          pattern=".{6,}"
          title="Password must be at least 6 characters long"
          required
        />
      </div>
      <div className={s.wrapperInput}>
        <label htmlFor="">Код подтверждения *</label>
        <input
          {...register("reset_code")}
          placeholder="Пароль*"
          pattern=".{6,}"
          title="Password must be at least 6 characters long"
          required
        />
      </div>
      <div className={s.wrapperInput}>
        <label htmlFor="">Новый Пароль*</label>
        <input
          {...register("new_password")}
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

      <button type="submit" className={s.submitBtn}>
        Отправить
      </button>
    </form>
  );
};

export default NewPassword;
