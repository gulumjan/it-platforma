"use client";
import React, { useEffect } from "react";
import styles from "./BriefEmail.module.scss";
import { useLanguageStore } from "@/stores/UseLanguageStore";

interface ModalWindowProps {
  isOpen: boolean;
  onClose: () => void;
}

const PasswordChanged: React.FC<ModalWindowProps> = ({ isOpen, onClose }) => {
  const language = useLanguageStore((state) => state.language);

  const translations = {
    ru: {
      brief: "Пароль успешно изменен",
      okey: "Ok",
    },
    ky: {
      brief: "Сыр сөз ийгиликтүү өзгөртүлдү",
      okey: "Ok",
    },
  };

  const translate = (key: keyof (typeof translations)["ru"]) => {
    return (
      translations[language as keyof typeof translations]?.[key] ??
      translations.ru[key]
    );
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.main} onClick={handleOverlayClick}>
      <div className={styles.mainModal}>
        <h1 className={styles.text}>{translate("brief")}</h1>
        <button type="button" className={styles.btn} onClick={onClose}>
          {translate("okey")}
        </button>
      </div>
    </div>
  );
};

export default PasswordChanged;
