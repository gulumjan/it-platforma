"use client";
import { FC, useEffect } from "react";
import scss from "./OurCourses.module.scss";
import { useRouter } from "next/navigation";
import { useGetCoursQuery } from "@/redux/api/product";
import AOS from "aos";
import "aos/dist/aos.css";

const OurCourses: FC = () => {
  const router = useRouter();
  const { data } = useGetCoursQuery();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className={scss.Courses}>
      <h1 data-aos="zoom-in">Курсы</h1>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.blocks}>
            {data?.map((el) => (
              <div
                onClick={() => router.push(`/courses/${el.id}`)}
                key={el.id}
                className={scss.block}
                data-aos="fade-up"
              >
                <h2>{el.title}</h2>
                <p>{el.description}</p>
                <button onClick={() => router.push(`/detail-course`)}>
                  Подробнее
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCourses;
