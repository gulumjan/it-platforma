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

  // Render the keys_statya list
  const renderKeysList = (keys) => {
    return keys?.map((item, idx) => (
      <ul key={idx}>
        <li>{item.key}</li>
      </ul>
    ));
  };

  // Render the keys_statya2 list
  const renderKeys2List = (keys) => {
    return keys?.map((el, idx) => (
      <ul key={idx}>
        <li>{el.keys}</li>
      </ul>
    ));
  };

  return (
    <div id={scss.articleBef}>
      <div className="container">
        {/* Main article section - always rendered */}
        <div className={scss.articleBef}>
          <h2>{data?.title}</h2>
          <p>{data?.description}</p>
          <Image src={article_img} alt="img" />
          <h6>{data?.for_key_description}</h6>
          {renderKeysList(data?.keys_statya)}
        </div>

        {/* Section1 - conditionally rendered */}
        {data?.description1 && (
          <div className={scss.section1}>
            <p>{data?.description1}</p>
            <p>{data?.description2}</p>
            <p>{data?.description3}</p>
            <p>{data?.for_key_description2}</p>
            {renderKeys2List(data?.keys_statya2)}
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticleBefore;