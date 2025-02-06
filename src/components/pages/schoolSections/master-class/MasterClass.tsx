"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import scss from "./DetailMasterClass.module.scss";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useLanguageStore } from "@/stores/UseLanguageStore";
import { useGetMasterClassDetailQuery } from "@/redux/api/product";

const DetailMasterClass = () => {
  const nav = useRouter();
  const language = useLanguageStore((state) => state.language);
  const { id } = useParams();
  const { data } = useGetMasterClassDetailQuery(Number(id));

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Инициализируем AOS
  }, []);

  const translations = {
    ru: {
      main: "Главная",
      allMasterClass: "Мастер классы",
      java: "Реактивное программирование на Java",
      buy: "Купить мастер-класс за 46 $",
      dostup: "Доступ",
      include: "В мастер-класс входит",
    },
    ky: {
      main: "Башкы бет",
      allMasterClass: "Бардык мастер-класстар",
      java: "Java да реактивдүү программалоо",
      buy: "Мастер-классты 46 $ сатып алуу",
      dostup: "Жеткиликтүүлүк",
      include: "Мастер-класска кирет",
    },
  };

  const translate = (key: keyof (typeof translations)["ru"]) => {
    return (
      translations[language as keyof typeof translations]?.[key] ??
      translations.ru[key]
    );
  };

  return (
    <section className={scss.DetMasterClass}>
      <div className="container">
        <Link className={scss.homeNav} href={"/"} data-aos="fade-right">
          {translate("main")}
        </Link>

        <Link className={scss.nav} href={"/allMasterClass"} data-aos="fade-right">
          {translate("allMasterClass")}
        </Link>

        <Link className={scss.navAb} href={"/allMasterClass"} data-aos="fade-right">
          {translate("java")}
        </Link>

        <div className={scss.content} data-aos="fade-up">
          <div className={scss.left} data-aos="fade-left">
            <h1>{data?.title}</h1>
            <p>{data?.description_about_master_class}</p>
            <button data-aos="zoom-in">{translate("buy")}</button>
          </div>
          <div className={scss.right} data-aos="fade-left">
            <h2>
              {translate("dostup")}: <span>{data?.dostup}</span>
            </h2>
            <h3>
              {translate("include")}: <span>{data?.count_lesson}</span>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailMasterClass;
