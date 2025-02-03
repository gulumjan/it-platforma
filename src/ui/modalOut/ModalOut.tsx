"use client";
import React from "react";
import style from "./ModalOut.module.scss";
import { useLogoutUserMutation } from "@/redux/api/auth";

const ModalOut = ({
  onConfirm,
  onCancel,
}: {
  onConfirm: () => void;
  onCancel: () => void;
}) => {
  const [logoutUser] = useLogoutUserMutation();

  async function logout() {
    try {
      const tokens = localStorage.getItem("tokens");
      if (!tokens) return;

      const parsedTokens = JSON.parse(tokens);
      console.log("🚀 ~ logout ~ parsedTokens:", parsedTokens);

      const res = await logoutUser({
        access: parsedTokens.tokens.access,
      });

      if ("data" in res) {
        localStorage.removeItem("tokens");
        window.location.href = "/login";
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  }

  return (
    <div className={style.modal}>
      <p>Вы уверены, что хотите выйти?</p>
      <div className={style.btns}>
        <button
          onClick={() => {
            logout();
            onConfirm();
          }}
        >
          Да
        </button>
        <button onClick={onCancel}>Нет</button>
      </div>
    </div>
  );
};

export default ModalOut;
