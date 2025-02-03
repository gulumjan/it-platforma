"use client";
import React from "react";
import scss from "./DetailMasterClass.module.scss";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useLanguageStore } from "@/stores/UseLanguageStore";
import { useGetMasterClassDetailQuery } from "@/redux/api/product";

const DetailMasterClass = () => {
  const language = useLanguageStore((state) => state.language);
  const { id } = useParams();
  const { data } = useGetMasterClassDetailQuery(Number(id));

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
        <Link className={scss.homeNav} href={"/"}>
          {translate("main")}
        </Link>

        <Link className={scss.nav} href={"/allMasterClass"}>
          {translate("allMasterClass")}
        </Link>

        <Link className={scss.navAb} href={"/allMasterClass"}>
          {translate("java")}
        </Link>

        <div className={scss.content}>
          <div className={scss.left}>
            <h1>{data?.title}</h1>
            <p>{data?.description_about_master_class}</p>
            <button>{translate("buy")}</button>
          </div>
          <div className={scss.right}>
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
