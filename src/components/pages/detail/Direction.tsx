"use client";
import { FC } from "react";
import scss from "./Direction.module.scss";
import { useParams, useRouter } from "next/navigation";
import { useGetCoursDetailQuery } from "@/redux/api/product";
import CourseProgress from "./CourseProgress";
import AboutCourses from "./AboutCourses";

const Direction: FC = () => {
  const router = useRouter();
  const { id } = useParams();
  const { data } = useGetCoursDetailQuery(Number(id));
  console.log("🚀 ~ data: fghj", data);
  return (
    <section className={scss.Direction}>
      <div className="container">
        {data?.private_video_course ? (
          <CourseProgress />
        ) : (
          <>
            <div className={scss.content}>
              <div className={scss.content_text}>
                <h1>{data?.title}</h1>
                <p> {data?.description1}</p>

                <button onClick={() => router.push(`/kaufen/${data?.id}`)}>
                  Купить курс за {data?.price}${" "}
                </button>
              </div>
              <div className={scss.access}>
                <div className={scss.together}>
                  <p>Доступ:</p>
                  <h4>{data?.dostup_course}</h4>
                </div>
                <div className={scss.together}>
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
