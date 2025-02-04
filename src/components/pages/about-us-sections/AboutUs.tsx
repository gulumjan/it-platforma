"use client";
import { FC } from "react";
import scss from "./AboutUs.module.scss";
import Image from "next/image";

import Feedback from "../schoolSections/feedbackSections/Feedback";
import SectionHome5 from "../Home/SectionHome5";
import { useGetAboutUsQuery } from "@/redux/api/product";

const AboutUs: FC = () => {
  const { data } = useGetAboutUsQuery();
  return (
    <>
      {data && (
        <>
          <section className={scss.AboutUs}>
            <div className="container">
              {data?.map((el, index) => (
                <div key={index} className={scss.content}>
                  <h1>{el.title}</h1>
                  <p>{el.description1}</p>
                  <p>{el.description2}</p>
                  <div className={scss.images}>
                    <Image width={520} height={350} src={el.image1} alt="" />
                    <Image width={520} height={350} src={el.image2} alt="" />
                  </div>
                  <div className={scss.sertf}>
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
