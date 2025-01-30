"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/assets/logo.svg";
import s from "./ForgotPassword.module.scss";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { useForgotPasswordMutation } from "@/redux/api/auth";
import BriefEmail from "@/ui/modal_window/BriefEmail";

const ForgotPassword = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<AUTH.ForgotPasswordRequest>();
  const [forgotPassword] = useForgotPasswordMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    router.push("/auth/reset");
  };

  const onSubmit: SubmitHandler<AUTH.ForgotPasswordRequest> = async (data) => {
    console.log("Form Data:", data);
    try {
      const res = await forgotPassword(data).unwrap();
      console.log("Forgot Password Response:", res);
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
        <label htmlFor="email">Email*</label>
        <input
          id="email"
          {...register("email")}
          placeholder="E-mail*"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"
          title="Please enter a valid email address"
          required
          type="email"
        />
      </div>

      <button type="submit" className={s.submitBtn}>
        Отправить
      </button>
    </form>
  );
};

export default ForgotPassword;
