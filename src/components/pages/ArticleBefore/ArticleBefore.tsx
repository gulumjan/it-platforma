import React from "react";
import scss from "@/components/pages/ArticleBefore/ArticleBefore.module.scss";
import article_img from "@/assets/Article_img.png";
import Image from "next/image";

const ArticleBefore = () => {
  return (
    <div id={scss.articleBef}>
      <div className="container">
        <div className={scss.articleBef}>
          <h2>
            Мы подготовили подборку самых популярных курсов по направлению Java
            в IBS Training Center.
          </h2>
          <p>
            Когда-то ни один крупный проект не обходился без применения
            функционального и асинхронного программирования. Эти подходы до сих
            пор популярны за счет своих преимуществ: они помогают выдерживать
            большие нагрузки и писать эффективный код, не теряя в скорости
            разработки.{" "}
          </p>
          <Image src={article_img} alt="img" />
          <h6>
            В рамках курса от IBS Training Center вы поймете, как работают
            основные фичи Spring Framework 5, и узнаете:
          </h6>

          <ul>
            <li>Какие существуют конфигурации для Spring Framework 5;</li>
            <li>
              Как работать с REST-сервисами и документацией при помощи Swagger.
            </li>
            <li>Что такое бины и как с ними работать;</li>
            <li>Что такое Концепция IoC;</li>
            <li>Примеры использования AOP;</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ArticleBefore;
