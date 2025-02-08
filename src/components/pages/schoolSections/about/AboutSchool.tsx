"use client";
import { FC, useEffect } from "react";
import scss from "./AboutSchool.module.scss";
import Image from "next/image";
import Img from "@/assets/web_development_banner 1.png";
import { useGetAboutSchoolQuery } from "@/redux/api/product";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutSchool: FC = () => {
  const { data } = useGetAboutSchoolQuery();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {data && (
        <section className={scss.AboutSchool}>
          <div className="container">
            {data?.map((el, index) => (
              <div key={index} className={scss.content}>
                <div className={scss.text} data-aos="fade-up">
                  <div className={scss.relate}>
                    <h1>{el.title1}</h1>
                    <p>{el.description1}</p>
                  </div>
                  <div className={scss.relate}>
                    <h1>{el.title2}</h1>
                    <p>{el.description2}</p>
                  </div>
                </div>
                <Image
                  width={489}
                  height={435}
                  src={Img}
                  alt="Img"
                  data-aos="zoom-in"
                />
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default AboutSchool;
