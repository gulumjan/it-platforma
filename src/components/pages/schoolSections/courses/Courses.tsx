"use client";
import { FC } from "react";
import scss from "./Courses.module.scss";
import { useRouter } from "next/navigation";
import { useGetCoursQuery } from "@/redux/api/product";

const Courses: FC = () => {
  const router = useRouter();
  const { data } = useGetCoursQuery();
  return (
    <section className={scss.Courses}>
      <h1>Курсы</h1>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.blocks}>
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
      </div>
      <button onClick={() => router.push(`/courses`)} className={scss.allBtn}>
        Все курсы
      </button>
    </section>
  );
};

export default Courses;
