"use client";

import { FC, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import scss from "./AboutUs.module.scss";
import Image from "next/image";
import Feedback from "../schoolSections/feedbackSections/Feedback";
import SectionHome5 from "../Home/SectionHome5";
import { useGetAboutUsQuery } from "@/redux/api/product";
import defaultPhoto from "@/assets/03e9a2ec-8798-4366-a55b-35b1dd830b0a.jpg";

const AboutUs: FC = () => {
  const { data } = useGetAboutUsQuery();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    data && (
      <section className={scss.AboutUs}>
        <div className="container">
          {data?.map((el, index) => (
            <div key={index} className={scss.content} data-aos="fade-up">
              <h1>{el.title}</h1>
              <p>{el.description1}</p>
              <p>{el.description2}</p>
              <div className={scss.images} data-aos="zoom-in">
                {el.image1 && (
                  <Image
                    width={520}
                    height={350}
                    src={
                      el.image1 ||
                      "https://rukminim2.flixcart.com/image/850/1000/kg9qbgw0/emergency-sign/q/d/f/cd-6-clear-design-original-imafwjfaqr9zdwsz.jpeg?q=90&crop=false"
                    }
                    alt="Image 1"
                  />
                )}
                {el.image2 && (
                  <Image
                    width={520}
                    height={350}
                    src={
                      el.image2 ||
                      "https://rukminim2.flixcart.com/image/850/1000/kg9qbgw0/emergency-sign/q/d/f/cd-6-clear-design-original-imafwjfaqr9zdwsz.jpeg?q=90&crop=false"
                    }
                    alt="Image 2"
                  />
                )}
              </div>
              <div className={scss.sertf} data-aos="flip-left">
                <h1>{el.title_serti}</h1>
                <p>{el.description_serti}</p>
                {el.image_serti && (
                  <Image
                    width={582}
                    height={413}
                    src={
                      el.image_serti ||
                      "https://rukminim2.flixcart.com/image/850/1000/kg9qbgw0/emergency-sign/q/d/f/cd-6-clear-design-original-imafwjfaqr9zdwsz.jpeg?q=90&crop=false"
                    }
                    alt="Certificate Image"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
        <Feedback />
        <SectionHome5 />
      </section>
    )
  );
};

export default AboutUs;
