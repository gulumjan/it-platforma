"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/assets/logo.svg";
import s from "./NewPassword.module.scss";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  useForgotPasswordMutation,
  useNewPasswordMutation,
} from "@/redux/api/auth";
import BriefEmail from "@/ui/modal_window/BriefEmail";
import { GoEye, GoEyeClosed } from "react-icons/go";

const NewPassword = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<AUTH.NewPasswordRequest>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPassword] = useNewPasswordMutation();
  const [showPassword, setShowPassword] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const onSubmit: SubmitHandler<AUTH.NewPasswordRequest> = async (data) => {
    console.log("Form Data:", data);
    try {
      const res = await newPassword(data).unwrap();
      console.log("New Password Response:", res);
      openModal();
    } catch (error) {
      console.error("Error submitting forgot password request:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.login}>
      <Image src={logo} alt="logo" width={170} height={106} />
      <BriefEmail isOpen={isModalOpen} onClose={closeModal} />

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

      <button type="submit" className={s.submitBtn}>
        Отправить
      </button>
    </form>
  );
};

export default NewPassword;
