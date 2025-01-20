"use client";
import { FC } from "react";
import scss from "./OurCourses.module.scss";
import { useRouter } from "next/navigation";
import { useGetCoursQuery } from "@/redux/api/product";

const OurCourses: FC = () => {
  const router = useRouter();
  const { data } = useGetCoursQuery();
  console.log("🚀 ~ data:", data);
  return (
    <section className={scss.Courses}>
      <h1>Курсы</h1>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.blocks}>
            {data?.map((el) => (
              <div
                onClick={() => router.push(`/courses/${el.id}`)}
                key={el.id}
                className={scss.block}
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
