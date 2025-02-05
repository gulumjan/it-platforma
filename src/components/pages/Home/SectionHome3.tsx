"use client";
import React, { useEffect } from "react";
import scss from "@/components/pages/Home/SectionHome3.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/navigation";
import { useLanguageStore } from "@/stores/UseLanguageStore";

const SectionHome3 = () => {
  const router = useRouter();
  const language = useLanguageStore((state) => state.language);

  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init({ duration: 1000, once: true });
    }
  }, []);

  const translations = {
    ru: {
      title: "Подпишитесь сейчас за 19,00 $ / мес",
      description:
        "И получите доступ к материалам и кейсам, а также к новым мастер-классам",
      button: "Оформить подписку",
      moreInfo: "Подробнее о пакетах",
    },
    ky: {
      title: "Азыр жазылыңыз 19,00 $ / ай",
      description:
        "Материалдарга жана кейстерге, ошондой эле жаңы мастер-класстарга жетүү мүмкүнчүлүгүнө ээ болуңуз",
      button: "Жазылууну тариздөө",
      moreInfo: "Пакеттер жөнүндө көбүрөөк маалымат",
    },
  };

  const translate = (key: keyof typeof translations["ru"]) => {
    return translations[language as keyof typeof translations]?.[key] ?? translations.ru[key];
  };

  return (
    <div id={scss.home3}>
      <div className="container">
        <div className={scss.home3} data-aos="fade-up">
          <div className={scss.home3_text} data-aos="fade-right">
            <h2>{translate("title")}</h2>
            <p>{translate("description")}</p>
          </div>

          <div className={scss.home3_btn} data-aos="fade-left">
            <button onClick={() => router.push(`/registration`)}>
              {translate("button")}
            </button>
            <p>{translate("moreInfo")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionHome3;
