"use client";
import { FC } from "react";
import scss from "./AboutCourses.module.scss";
import { useParams } from "next/navigation";
import { useGetCoursDetailQuery } from "@/redux/api/product";

const AboutCourses: FC = () => {
  const { id } = useParams();
  const { data } = useGetCoursDetailQuery(Number(id));
  console.log("🚀 ~ data:", data);
  return (
    <section className={scss.AboutCourses}>
      <div className="container">
        <h2 className={scss.title}>О КУРСЕ</h2>
        <p>{data?.description2}</p>
        <p>{data?.description3}</p>
        <p>{data?.description4}</p>
        <div className={scss.info}>
          <div className={scss.column}>
            <h3>Для кого это</h3>
            {data?.who_for_course.map((el) => (
              <ul key={el.id}>
                <li>{el.name}</li>
              </ul>
            ))}
          </div>
          <div className={scss.column}>
            <h3>Вы изучите</h3>
            <div className={scss.net}>
              {data?.you_learns.map((el) => (
                <ul key={el.id}>
                  <li>{el.name}</li>
                </ul>
              ))}
            </div>
          </div>
        </div>

        <div className={scss.results}>
          <h3>К каким результатам вас может привести этот курс?</h3>
          <p>{data?.description3}</p>
          <p>{data?.description4}</p>
        </div>

        <div className={scss.actions}>
          <button className={scss.buyButton}>Купить курс</button>
          <button className={scss.programButton}>Смотреть программу</button>
        </div>
      </div>
    </section>
  );
};

export default AboutCourses;
