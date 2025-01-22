"use client";
import React, { useEffect } from "react";
import scss from "./AboutMasterClass.module.scss";
import { useLanguageStore } from "@/stores/UseLanguageStore";
import { useParams } from "next/navigation";
import { useGetMasterClassDetailQuery } from "@/redux/api/product";
import { Link as Scrollhref } from "react-scroll";

const AboutMasterClass = () => {
  const language = useLanguageStore((state) => state.language);
  const { id } = useParams();
  const { data } = useGetMasterClassDetailQuery(Number(id));

  useEffect(() => {
    console.log("Current language in Header:", language);
  }, [language]);

  const translations = {
    ru: {
      was: "Что, как и почему",
      about: "О МАСТЕР-КЛАССЕ",

      block:
        "В режиме мастер-класса он продемонстрировал, почему так важен неблокирующий ввод-вывод, в чем минусы классической многопоточности, в каких ситуациях нужна реактивность, и что она может дать. А еще описал недостатки реактивного подхода.",
      video: "Переходите к видеоурокам, что бы научится:",
      buy: `Купить мастер-класс за ${data?.price} $`,
      watch: "Смотреть программу",
      dostup: "Доступ",
      include: "В мастер-класс входит",
    },
    ky: {
      was: "Эмне, кантип жана эмнеликтен",
      about: "Мастер-класстан жөнүндө",
      block:
        "Мастер-класс режиминде ал блоктоп калбай турган киргизүү-чыгаруу маанилүүлүгүн, классикалык көптөгүндөгү программалоонун кемчиликтерин, кайсы учурларда реактивдүүлүк керектигин жана ал эмне берет экенин көрсөттү. Мындан тышкары реактивдүү ыкманын кемчиликтерин түшүндүрүп берди.",
      video: "Видео сабактарга өтүңүз, үйрөнүү үчүн:",
      buy: `Мастер-классты сатып алуу ${data?.price} $`,
      watch: "Программаны караңыз",
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
    <div className={scss.AboutMasterClass}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.left}>
            <h3>{translate("was")}</h3>
            <h1>{translate("about")}</h1>
            <p>{translate("block")}</p>
            <div className={scss.left_bottom}>
              <h4>{translate("video")}</h4>
              <ul>
                {data?.materials.map((el, index) => (
                  <li key={index}>{el.name}</li>
                ))}
              </ul>
            </div>
            <div className={scss.buttons}>
              <button>{translate("video")}</button>
              <Scrollhref
                activeClass="active"
                to="programm"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                <button>{translate("watch")}</button>
              </Scrollhref>
            </div>
          </div>
          <div className={scss.right}>
            <h2>
              {translate("dostup")}: <span>{data?.dostup}</span>
            </h2>
            <h3>
              {translate("include")}:<span>{data?.count_lesson}</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMasterClass;
