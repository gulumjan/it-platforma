"use client";
import React from "react";
import style from "./ModalOut.module.scss";

const ModalOut = ({
  onConfirm,
  onCancel,
}: {
  onConfirm: () => void;
  onCancel: () => void;
}) => {
  return (
    <div className={style.modal}>
      <p>Вы уверены, что хотите выйти?</p>
      <div className={style.btns}>
        <button onClick={onConfirm}>Да</button>
        <button onClick={onCancel}>Нет</button>
      </div>
    </div>
  );
};

export default ModalOut;
