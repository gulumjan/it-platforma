"use client";
import React from "react";
import scss from "./DetailMasterClass.module.scss";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useLanguageStore } from "@/stores/UseLanguageStore";

const DetailMasterClass = () => {
  const nav = useRouter();
  const { t } = useLanguageStore();

  return (
    <section className={scss.DetMasterClass}>
      <div className="container">
        <Link className={scss.homeNav} href={"/"}>
          {t("Башкы бет", "Главная")}/
        </Link>

        <Link className={scss.nav} href={"/allMasterClass"}>
          {t("Бардык мастер-класстар", "Мастер классы")}/
        </Link>

        <Link className={scss.navAb} href={"/allMasterClass"}>
          {t(
            "Java'да реактивдүү программалоо",
            "Реактивное программирование на Java"
          )}
        </Link>

        <div className={scss.content}>
          <div className={scss.left}>
            <h1>
              {t(
                "Java'да реактивдүү программалоо: кантип, эмне үчүн жана керекпи? 1-бөлүк",
                "Реактивное программирование на Java: как, зачем и стоит ли? Часть 1"
              )}
            </h1>
            <p>
              {t(
                "Реактивдүү программалоонун идеясы салыштырмалуу жакында, 10 жыл мурун пайда болгон. Бул салыштырмалуу жаңы ыкманын популярдуулугун эмне пайда кылды жана эмне үчүн азыр ал трендде экенин конференцияда айтып берди",
                "Идея реактивного программирования появилась сравнительно недавно, лет 10 назад. Что вызвало популярность этого относительно нового подхода и почему сейчас он в тренде, рассказал на конференции"
              )}
            </p>
            <button onClick={() => nav.push("/poslePodpiski")}>
              {t(
                "Мастер-классты 46 $ сатып алуу",
                "Купить мастер-класс за 46 $"
              )}
            </button>
          </div>
          <div className={scss.right}>
            <h2>
              {t("Жеткиликтүүлүк", "Доступ")}:{" "}
              <span>{t("6 апта", "6 недель")}</span>
            </h2>
            <h3>
              {t("Мастер-класска кирет", "В мастер-класс входит")}:{" "}
              <span>{t("5 сабак", "5 уроков")}</span>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailMasterClass;
