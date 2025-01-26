"use client";
import React from "react";
import scss from "@/components/pages/ArticleBefore/ArticleBefore.module.scss";
import article_img from "@/assets/Article_img.png";
import Image from "next/image";
import { useGetStatyaDoQuery } from "@/redux/api/product";
import { useParams } from "next/navigation";

const ArticleBefore = () => {
  const { id } = useParams();

  const { data } = useGetStatyaDoQuery(Number(id));

  return (
    <div id={scss.articleBef}>
      <div className="container">
        <div className={scss.articleBef}>
          <h2>{data?.title}</h2>
          <p>{data?.description}</p>
          <Image src={article_img} alt="img" />
          <h6>{data?.for_key_description}</h6>

          {data?.keys_statya.map((item, idx) => (
            <ul key={idx}>
              <li>{item.key}</li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleBefore;
