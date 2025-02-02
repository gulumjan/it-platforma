"use client"
import React, { useEffect } from "react";
import scss from "@/components/pages/Home/SectionHome4.module.scss";
import Image from "next/image";
import img_home4 from "@/assets/home4_img.png";
import AOS from "aos";
import "aos/dist/aos.css";

const questions = [
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
];

const SectionHome4 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div id={scss.answer1}>
      <div className="container">
        <div className={scss.answer1} data-aos="fade-up">
          <div className={scss.answer1_text}>
            <h2>Остались вопросы?</h2>
            <Image src={img_home4} alt="img" />
          </div>

          <div className={scss.answer}>
            {questions.map((el, index) => (
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
