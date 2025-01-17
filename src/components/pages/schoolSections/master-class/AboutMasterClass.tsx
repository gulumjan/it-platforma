"use client";
import React from "react";
import scss from "./AboutMasterClass.module.scss";
import { Link as Scrollhref } from "react-scroll";
import { useLanguageStore } from "@/stores/UseLanguageStore";

const AboutMasterClass = () => {
  const { t } = useLanguageStore();

  return (
    <div className={scss.AboutMasterClass}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.left}>
            <h3>{t("Эмне, кантип жана эмнеликтен", "Что, как и почему")}</h3>
            <h1>{t("Мастер-класстан жөнүндө", "О МАСТЕР-КЛАССЕ")}</h1>
            <p>
              {t(
                "Мастер-класс режиминде ал блоктоп калбай турган киргизүү-чыгаруу маанилүүлүгүн, классикалык көптөгүндөгү программалоонун кемчиликтерин, кайсы учурларда реактивдүүлүк керектигин жана ал эмне берет экенин көрсөттү. Мындан тышкары реактивдүү ыкманын кемчиликтерин түшүндүрүп берди.",
                "В режиме мастер-класса он продемонстрировал, почему так важен неблокирующий ввод-вывод, в чем минусы классической многопоточности, в каких ситуациях нужна реактивность, и что она может дать. А еще описал недостатки реактивного подхода."
              )}
            </p>
            <div className={scss.left_bottom}>
              <h4>
                {t(
                  "Видео сабактарга өтүңүз, үйрөнүү үчүн:",
                  "Переходите к видеоурокам, что бы научится:"
                )}
              </h4>
              <ul>
                <li>
                  {t(
                    "Файлды окуу (blocked on reading file);",
                    "Чтению файла (blocked on reading file);"
                  )}
                </li>
                <li>
                  {t(
                    "Мамлекеттик маалымат базасын үйрөнүү (blocked on reading from DB);",
                    "Что бы научиться базе данных (blocked on reading from DB);"
                  )}
                </li>
                <li>
                  {t(
                    "Азырак эсептөөлөрдү жүргүзүү үчүн үйрөнүү (blocked on heavy calculations);",
                    "Научится использовать в сложных вычислениях (blocked on heavy calculations);"
                  )}
                </li>
                <li>
                  {t(
                    "Кардардан жооп алуу (blocked on responding the client).",
                    "На ответе от клиента (blocked on responding the client)."
                  )}
                </li>
              </ul>
            </div>
            <div className={scss.buttons}>
              <button>
                {t(
                  "Мастер-классты сатып алуу 46 $",
                  "Купить мастер-класс за 46 $"
                )}
              </button>
              <Scrollhref
                activeClass="active"
                to="programm"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                <button>
                  {t("Программаны караңыз", "Смотреть программу")}
                </button>
              </Scrollhref>
            </div>
          </div>
          <div className={scss.right}>
            <h2>
              {t("Жеткиликтүүлүк", "Доступ")}:{" "}
              <span>{t("6 жума", "6 недель")}</span>
            </h2>
            <h3>
              {t("Мастер-класска кирет", "В мастер-класс входит")}:
              <span>{t("5 сабак", "5 уроков")}</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMasterClass;
