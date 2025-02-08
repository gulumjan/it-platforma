import React from "react";
import ArticleBefore from "./ArticleBefore/ArticleBefore";
import SectionArticle2 from "./ArticleBefore/SectionArticle2";
import ArticleSection3 from "./ArticleBefore/ArticleSection3";
import OtherArticle from "./ArticleBefore/OtherArticle";
import SectionComent from "./ArticleAfter/SectionComent";
import { useGetStatyaDoQuery } from "@/redux/api/product";
import { useParams } from "next/navigation";

const ArticleBeforePage = () => {
  const { id } = useParams();
  const { data } = useGetStatyaDoQuery(Number(id));

  if (data?.description1) {
    return (
      <div>
        <ArticleBefore />
        <SectionComent />
        <OtherArticle />
      </div>
    );
  }

  return (
    <div>
      <ArticleBefore />
      <SectionArticle2 />
      <ArticleSection3 />
      <OtherArticle />
    </div>
  );
};

export default ArticleBeforePage;
