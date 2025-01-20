"use client";
import React, { useEffect } from "react";
import styles from "./BriefEmail.module.scss";
import { useLanguageStore } from "@/stores/UseLanguageStore";

interface ModalWindowProps {
  isOpen: boolean;
  onClose: () => void;
}

const BriefEmail: React.FC<ModalWindowProps> = ({ isOpen, onClose }) => {
  const language = useLanguageStore((state) => state.language);

  useEffect(() => {
    console.log("Current language in ModalWindow:", language);
  }, [language]);

  const translations = {
    ru: {
      brief: "Письмо для сброса пароля отправлено",
      okey: "Проверьте почту",
    },
    ky: {
      brief: "Сыр сөздү калыбына келтирүү кат жөнөтүлдү",
      okey: "Почтаңызды текшериңиз",
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

export default BriefEmail;
