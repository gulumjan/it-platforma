import React from "react";
import ArticleBefore from "./ArticleBefore/ArticleBefore";
import OtherArticle from "./ArticleBefore/OtherArticle";
import SectionComent from "./ArticleAfter/SectionComent";

const ArticleAfterPage = () => {
  return (
    <div>
      <ArticleBefore />
      <SectionComent />
      <OtherArticle />
    </div>
  );
};

export default ArticleAfterPage;
