"use client";
import React, { useEffect } from "react";
import scss from "@/components/pages/Home/SectionHome4.module.scss";
import Image from "next/image";
import img_home4 from "@/assets/home4_img.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLanguageStore } from "@/stores/UseLanguageStore";

const questions = {
  ru: [
    {
      question: "Что такое зарезервированные слова в программировании?",
      answer:
        "Зарезервированные слова — это ключевые слова, которые имеют специальное значение в языке программирования и не могут быть использованы в качестве имен переменных, функций и других идентификаторов.",
    },
    {
      question: "Могу ли я отказаться от автопродления подписки?",
      answer:
        "Да, в настройках профиля можно отключить автопродление подписки в любое время.",
    },
    {
      question: "Могу ли я вернуть деньги?",
      answer:
        "Условия возврата зависят от политики платформы. Ознакомьтесь с правилами возврата на странице поддержки.",
    },
    {
      question: "Какие направления в IT самые актуальные?",
      answer:
        "На данный момент актуальны направления: искусственный интеллект, кибербезопасность, веб-разработка, DevOps, мобильная разработка и блокчейн.",
    },
    {
      question: "Платформа обновляется?",
      answer:
        "Да, платформа регулярно обновляется, добавляются новые курсы и улучшается функционал.",
    },
    {
      question:
        "Нужно ли учить другой язык программирования перед изучением C++?",
      answer:
        "Нет, но если у вас нет опыта, лучше начать с Python или JavaScript, так как они проще для изучения.",
    },
    {
      question: "Как я могу получить доступ ко всем курсам?",
      answer:
        "Вы можете оформить подписку или приобрести курсы отдельно в разделе 'Обучение'.",
    },
  ],
  ky: [
    {
      question: "Программалоо тилиндеги резервделген сөздөр деген эмне?",
      answer:
        "Резервделген сөздөр – бул программалоо тилиндеги атайын мааниге ээ болгон ачкыч сөздөр. Алар өзгөрмөлөрдүн, функциялардын жана башка идентификаторлордун аттары катары колдонулбайт.",
    },
    {
      question: "Мен автоматтык узартуудан баш тарта аламбы?",
      answer:
        "Ооба, профилдин жөндөөлөрүндө автоматтык узартууну каалаган убакта өчүрө аласыз.",
    },
    {
      question: "Мен акчамды кайтарып алсам болобу?",
      answer:
        "Кайтаруу шарттары платформа саясатына жараша болот. Колдоо барагында кайтаруу эрежелери менен таанышып чыгыңыз.",
    },
    {
      question: "IT тармагында кайсы багыттар актуалдуу?",
      answer:
        "Азыркы учурда төмөнкү багыттар актуалдуу: жасалма интеллект, киберкоопсуздук, веб-өнүгүү, DevOps, мобилдик тиркемелерди иштеп чыгуу жана блокчейн.",
    },
    {
      question: "Платформа жаңыланып турабы?",
      answer:
        "Ооба, платформа дайыма жаңыланып турат, жаңы курстар кошулуп, функционал жакшыртылып турат.",
    },
    {
      question: "C++ үйрөнүү алдында башка программалоо тилин үйрөнүү керекпи?",
      answer:
        "Жок, бирок эгерде сизде тажрыйба жок болсо, анда Python же JavaScriptтен баштоо оңой болот.",
    },
    {
      question: "Бардык курстарга кантип жетүүм мүмкүн?",
      answer:
        "Сиз жазылууну тариздей аласыз же курстарды 'Окуу' бөлүмүнөн өзүнчө сатып ала аласыз.",
    },
  ],
};

const SectionHome4 = () => {
  const language = useLanguageStore((state) => state.language);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const translatedQuestions =
    questions[language as keyof typeof questions] || questions.ru;

  return (
    <div id={scss.answer1}>
      <div className="container">
        <div className={scss.answer1} data-aos="fade-up">
          <div className={scss.answer1_text}>
            <h2>
              {language === "ky" ? "Суроолоруңуз барбы?" : "Остались вопросы?"}
            </h2>
            <Image src={img_home4} alt="img" />
          </div>

          <div className={scss.answer}>
            {translatedQuestions.map((el, index) => (
              <details
                key={index}
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
                data-aos-duration="1500"
                className={scss.details}
              >
                <summary>{el.question}</summary>
                <p>{el.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionHome4;
