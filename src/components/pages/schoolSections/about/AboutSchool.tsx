"use client";
import { FC } from "react";
import scss from "./AboutSchool.module.scss";
import Image from "next/image";
import Img from "@/assets/web_development_banner 1.png";
import { useGetAboutSchoolQuery } from "@/redux/api/product";

const AboutSchool: FC = () => {
  const { data } = useGetAboutSchoolQuery();
  return (
    <>
      {data && (
        <>
          <section className={scss.AboutSchool}>
            <div className="container">
              {data.map((el, index) => (
                <div key={index} className={scss.content}>
                  <div className={scss.text}>
                    <div className={scss.relate}>
                      <h1>{el.title1}</h1>
                      <p>{el.description1}</p>
                    </div>
                    <div className={scss.relate}>
                      <h1>{el.title2}</h1>
                      <p>{el.description2}</p>
                    </div>
                  </div>
                  <Image width={489} height={435} src={Img} alt="" />
                </div>
              ))}
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default AboutSchool;
