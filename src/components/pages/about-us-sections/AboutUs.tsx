"use client";
import { FC, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import scss from "./AboutUs.module.scss";
import Image from "next/image";
import Feedback from "../schoolSections/feedbackSections/Feedback";
import SectionHome5 from "../Home/SectionHome5";
import { useGetAboutUsQuery } from "@/redux/api/product";

const AboutUs: FC = () => {
  const { data } = useGetAboutUsQuery();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {data && (
        <>
          <section className={scss.AboutUs}>
            <div className="container">
              {data?.map((el, index) => (
                <div key={index} className={scss.content} data-aos="fade-up">
                  <h1>{el.title}</h1>
                  <p>{el.description1}</p>
                  <p>{el.description2}</p>
                  <div className={scss.images} data-aos="zoom-in">
                    <Image width={520} height={350} src={el.image1} alt="" />
                    <Image width={520} height={350} src={el.image2} alt="" />
                  </div>
                  <div className={scss.sertf} data-aos="flip-left">
                    <h1>{el.title_serti}</h1>
                    <p>{el.description_serti}</p>
                    <Image
                      width={582}
                      height={413}
                      src={el.image_serti}
                      alt=""
                    />
                  </div>
                </div>
              ))}
            </div>
            <Feedback />
            <SectionHome5 />
          </section>
        </>
      )}
    </>
  );
};

export default AboutUs;
