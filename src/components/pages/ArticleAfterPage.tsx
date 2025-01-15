import React from "react";
import ArticleBefore from "./ArticleBefore/ArticleBefore";
import OtherArticle from "./ArticleBefore/OtherArticle";
import Section1 from "./ArticleAfter/Section1";
import SectionComent from "./ArticleAfter/SectionComent";

const ArticleAfterPage = () => {
  return (
    <div>
      <ArticleBefore />
      <Section1/>
      <SectionComent/>
      <OtherArticle />
    </div>
  );
};

export default ArticleAfterPage;
