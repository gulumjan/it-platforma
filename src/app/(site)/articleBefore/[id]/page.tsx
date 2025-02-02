"use client";
import React from "react";
import { useSearchParams, useParams } from "next/navigation";
import ArticleBefore from "@/components/pages/ArticleBefore/ArticleBefore";
import ArticleAfter from "@/components/pages/ArticleAfterPage"; // Добавь компонент после оплаты
import SectionArticle2 from "@/components/pages/ArticleBefore/SectionArticle2";
import ArticleSection3 from "@/components/pages/ArticleBefore/ArticleSection3";
import OtherArticle from "@/components/pages/ArticleBefore/OtherArticle";

const Page = () => {
  const { id } = useParams();
  const searchParams = useSearchParams();
  const pattern = searchParams.get("pattern");

  let content = null;

  if (pattern === "before") {
    content = <ArticleBefore />;
  } else if (pattern === "after") {
    content = <ArticleAfter />; // Отображаем статью после оплаты
  }

  return (
    <div>
      {content}
      <SectionArticle2 />
      <ArticleSection3 />
      <OtherArticle />
    </div>
  );
};

export default Page;
