"use client";
import React, { useEffect, useRef, useState } from "react";
import scss from "./Language.module.scss";
import { useLanguageStore } from "@/stores/UseLanguageStore";
import { MdKeyboardArrowDown } from "react-icons/md";

const Language = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const { language, setLanguage } = useLanguageStore();

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage && storedLanguage !== language) {
      setLanguage(storedLanguage);
      window.location.reload();
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    if (!isDisabled) {
      setIsOpen((prev) => !prev);
      setIsDisabled(true);
      setTimeout(() => {
        setIsDisabled(false);
      }, 300);
    }
  };

  const handleLanguageSelection = (selectedLanguage: string) => {
    localStorage.setItem("language", selectedLanguage);
    setLanguage(selectedLanguage);
    setIsOpen(false);
    window.location.reload();
  };

  useEffect(() => {
    console.log("Current language in Header:", language);
  }, [language]);

  const translations = {
    ru: {
      language: "Язык",
    },
    ky: {
      language: "Тил",
    },
  };

  const translate = (key: keyof (typeof translations)["ru"]) => {
    return (
      translations[language as keyof typeof translations]?.[key] ??
      translations.ru[key]
    );
  };

  const languages = [
    { code: "ru", label: "Ru" },
    { code: "ky", label: "Kgz" },
  ];

  return (
    <>
      <div className={scss.burgerMenu} ref={menuRef}>
        <h6 className={scss.burgerIcon} onClick={toggleMenu}>
          {translate("language")}
          <MdKeyboardArrowDown />
        </h6>

        {isOpen && (
          <div className={`${scss.menu} ${scss.open}`}>
            {languages.map((lang) => (
              <span
                key={lang.code}
                onClick={() => handleLanguageSelection(lang.code)}
                className={language === lang.code ? scss.active : ""}
                tabIndex={0}
              >
                {lang.label}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className={`${scss.menuu} ${scss.openn}`}>
        {languages.map((lang) => (
          <span
            key={lang.code}
            onClick={() => handleLanguageSelection(lang.code)}
            className={language === lang.code ? scss.active : ""}
            tabIndex={0}
          >
            {lang.label}
          </span>
        ))}
      </div>
    </>
  );
};

export default Language;
