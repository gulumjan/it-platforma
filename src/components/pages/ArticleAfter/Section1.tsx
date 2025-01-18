import React from "react";
import scss from "@/components/pages/ArticleAfter/Section1.module.scss";

const Section1 = () => {
  return (
    <div id={scss.section1}>
      <div className="container">
        <div className={scss.section1}>
          <p>
            Ищите способы ускорить проектирование приложений? Используйте Spring
            Framework 5. Этот легковесный каркас с открытыми исходными текстами
            не связан с конкретной моделью программирования и поэтому
            универсален. Его можно использовать не только для крупных
            корпоративных кейсов, но и для небольших проектов.
          </p>
          <p>
            Интересно? Присоединяйтесь к нашему курсу и узнайте об основных
            модулях этого фреймворка, вариантах их использования и как Spring
            Framework работает совместно с другими технологиями.
          </p>

          <p>
            Если вы уже знакомы с Spring Framework 5 и хотите углубить свои
            знания, то этот курс для вас! Вместе с IBS Training Center вы
            изучите темы, необходимые для профессионального применения Spring
            Framework на практике. Вы познакомитесь со Spring REST, HATEOAS и
            CORS, научитесь использовать сериализацию и ограничение данных,
            освоите тонкости применения аннотации @Transactional и
            оптимистических транзакций.
          </p>

          <p>
            Также вас ждет много практики, разбор реальных кейсов и другие
            важные темы:
          </p>
          <ul>
            <li>JWT-авторизация;</li>
            <li>
              Практическое применение реактивного программирования с
              использованием WebFlux;
            </li>
            <li>Тестирование Spring-сервисов</li>
            <li>Планировщик задач и Actuator</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Section1;
