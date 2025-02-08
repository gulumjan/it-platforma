"use client";
import { FC, useEffect } from "react";
import scss from "./ProgrammCourses.module.scss";
import Img from "@/assets/proggramImg.svg";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useGetCoursDetailQuery } from "@/redux/api/product";
import AOS from "aos";
import "aos/dist/aos.css"; // Импортируем стили для AOS

const ProgrammCourses: FC = () => {
  const { id } = useParams();
  const { data } = useGetCoursDetailQuery(Number(id));

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section className={scss.ProgrammCourses}>
      <div className="container">
        <h1 data-aos="fade-up">ПРОГРАММА КУРСА</h1>
        {data?.private_video_course ? (
          <div className={scss.lesson}>
            {data.private_video_course.map((el, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={`${index * 200}`}
              >
                <video
                  style={{ width: "500px", height: "200px" }}
                  controls
                  src={el.video}
                ></video>
                <div className={scss.lessonText}>
                  <p>{el.name}</p>
                  <p>{el.module}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className={scss.content} data-aos="fade-up">
              <div className={scss.blocks}>
                {data?.modules?.map((el) => (
                  <div key={el.id} className={scss.block} data-aos="fade-up">
                    <h5>Модуль {el.module_num}</h5>
                    <p>{el.description}</p>
                  </div>
                ))}
                <button data-aos="fade-up" data-aos-delay="200">
                  Зарегистрироваться
                </button>
              </div>
              <Image
                width={480}
                height={503}
                src={Img}
                alt=""
                data-aos="fade-up"
                data-aos-delay="400"
              />
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ProgrammCourses;
