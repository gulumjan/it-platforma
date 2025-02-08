"use client";
import { FC, useEffect } from "react";
import scss from "./Direction.module.scss";
import { useParams, useRouter } from "next/navigation";
import { useGetCoursDetailQuery } from "@/redux/api/product";
import CourseProgress from "./CourseProgress";
import AboutCourses from "./AboutCourses";
import "aos/dist/aos.css";
import AOS from "aos";

const Direction: FC = () => {
  const router = useRouter();
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
    <section className={scss.Direction}>
      <div className="container">
        {data?.private_video_course ? (
          <CourseProgress />
        ) : (
          <>
            <div className={scss.content} data-aos="fade-up">
              <div className={scss.content_text}>
                <h1>{data?.title}</h1>
                <p> {data?.description1}</p>

                <button
                  onClick={() => router.push(`/kaufen/${data?.id}`)}
                  data-aos="zoom-in"
                >
                  Купить курс за {data?.price}${" "}
                </button>
              </div>
              <div className={scss.access}>
                <div className={scss.together} data-aos="fade-left">
                  <p>Доступ:</p>
                  <h4>{data?.dostup_course}</h4>
                </div>
                <div className={scss.together} data-aos="fade-right">
                  <p>В курс входит: </p>
                  <h4>{data?.count_materials}</h4>
                </div>
              </div>
            </div>
            <AboutCourses />
          </>
        )}
      </div>
    </section>
  );
};

export default Direction;
