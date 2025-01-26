import React from "react";
import scss from "@/components/pages/ArticleBefore/OtherArticle.module.scss";
import home2_img from "@/assets/home2_img.png";
import { FaClipboardList } from "react-icons/fa";
import Link from "next/link";

const articles = Array(3).fill({
  title: "Статьи",
  description:
    "Мы подготовили подборку самых популярных курсов по направлению Java в IBS Training Center.",
  date: "01.02.2022",
  image: home2_img,
});

const OtherArticle = () => {
  return (
    <div id={scss.otherArticle}>
      <div className="container">
        <h2>Другие статьи </h2>
        <div className={scss.otherArticle}>
          {articles.map((article, index) => (
            <div key={index} className={scss.otherArticle_block}>
              <div className={scss.otherArticle_text}>
                <h6>{article.title}</h6>
                <p>{article.description}</p>
                <div className={scss.otherArticle_read}>
                  <Link href={"/articleBefore"}>
                    {" "}
                    <h5>
                      <FaClipboardList />
                      <span></span>Читать
                    </h5>
                  </Link>

                  <h5>{article.date}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OtherArticle;
