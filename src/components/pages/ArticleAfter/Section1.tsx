"use client";
import React from "react";
import scss from "@/components/pages/ArticleAfter/Section1.module.scss";
import { useGetStatyaDoQuery } from "@/redux/api/product";
import { useParams } from "next/navigation";

const Section1 = () => {
  const { id } = useParams();

  const { data } = useGetStatyaDoQuery(Number(id));
  console.log(data, "aiddd");
  console.log(id, "dhghgj");

  return (
    <div id={scss.section1}>
      <div className="container">
        <div className={scss.section1}>
          <p>{data?.description1}</p>
          <p>{data?.description2}</p>

          <p>{data?.description3}</p>

          <p>{data?.for_key_description2}</p>
          {data?.keys_statya2.map((el, idx) => (
            <ul key={idx}>
              <li>{el.keys}</li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section1;
