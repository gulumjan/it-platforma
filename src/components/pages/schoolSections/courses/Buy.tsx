"use client";

import React, { useEffect } from "react";
import scss from "./Buy.module.scss";

import { useLanguageStore } from "@/stores/UseLanguageStore";
import BuyCourses from "./BuyCourses";
import { useParams } from "next/navigation";
import { useGetCoursDetailQuery } from "@/redux/api/product";

const Buy = () => {
  const { id } = useParams();
  const { data } = useGetCoursDetailQuery(Number(id));
  const language = useLanguageStore((state) => state.language);

  useEffect(() => {
    console.log("Current language in Header:", language);
  }, [language]);

  const translations = {
    ru: {
      material:
        "материалы включают уроки, тесты и задания. Некоторые материалы могут быть недоступны при самостоятельном обучении.",
      dostup: "Доступ",
      register: "Зарегистрироваться на курс",
      come: "В курс входит",
    },
    ky: {
      material:
        "Материалдар сабактарды, тесттерди жана тапшырмаларды камтыйт. Кээ бир материалдар өз алдынча окуу учурунда жеткиликсиз болушу мүмкүн.",
      dostup: "Жеткиликтүүлүк",
      register: "Курска катталуу",
      come: "Курска кирет",
    },
  };

  const translate = (key: keyof (typeof translations)["ru"]) => {
    return (
      translations[language as keyof typeof translations]?.[key] ??
      translations.ru[key]
    );
  };

  return (
    <section className={scss.Buy}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.path}></div>
          <div className={scss.forumBlock}>
            <h1 className={scss.title}>{translate("register")}</h1>
            <div className={scss.forum}>
              <div className={scss.info}>
                <div className={scss.course}>
                  <h1 className={scss.courseTitle}>Курс</h1>
                  <h1 className={scss.courseName}>{data?.title}</h1>
                  <h1 className={scss.courseText}>{data?.description1}</h1>
                </div>
                <div className={scss.br}></div>
                <div className={scss.teacher}>
                  {" "}
                  <h1 className={scss.courseTitle}>Лектор</h1>
                  <h1 className={scss.courseName}>{data?.full_name}</h1>
                  <h1 className={scss.courseText}>{data?.position}</h1>
                </div>{" "}
                <div className={scss.br}></div>
                <div className={scss.access}>
                  <div className={scss.include}>
                    <h1 className={scss.courseTitle}>{translate("come")}</h1>
                    {data?.into_course.map((include, index) => (
                      <h1 key={index} className={scss.includeText}>
                        ● {include.material}
                      </h1>
                    ))}
                  </div>
                  <div className={scss.accessBlock}>
                    <h1 className={scss.courseTitle}>{translate("dostup")}</h1>
                    <h1 className={scss.includeText}>{data?.dostup_course}</h1>
                  </div>
                </div>{" "}
                <div className={scss.br}></div>
                <div className={scss.courseInfo}>
                  <h1 className={scss.includeText}>
                    {translate("material")}* -{" "}
                  </h1>
                </div>
              </div>
              <BuyCourses />{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Buy;
