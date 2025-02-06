"use client";
import { FC, useEffect } from "react";
import scss from "./AboutCourses.module.scss";
import { useParams } from "next/navigation";
import { useGetCoursDetailQuery } from "@/redux/api/product";
import "aos/dist/aos.css"; // Импортируем стили для AOS
import AOS from "aos";      // Импортируем библиотеку AOS

const AboutCourses: FC = () => {
  const { id } = useParams();
  const { data } = useGetCoursDetailQuery(Number(id));

  useEffect(() => {
    AOS.init({
      duration: 1000, // Длительность анимации (в миллисекундах)
      easing: 'ease-in-out', // Функция плавности анимации
      once: true, // Анимация срабатывает только один раз
    });
  }, []);

  return (
    <section className={scss.AboutCourses}>
      <div className="container">
        <h2 className={scss.title} data-aos="fade-up">О КУРСЕ</h2>
        <p>{data?.description2}</p>
        <p>{data?.description3}</p>
        <p>{data?.description4}</p>
        <div className={scss.info}>
          <div className={scss.column} data-aos="fade-right">
            <h3>Для кого это</h3>
            {data?.who_for_course?.map((el) => (
              <ul key={el.id}>
                <li>{el.name}</li>
              </ul>
            ))}
          </div>
          <div className={scss.column} data-aos="fade-left">
            <h3>Вы изучите</h3>
            <div className={scss.net}>
              {data?.you_learns?.map((el) => (
                <ul key={el.id}>
                  <li>{el.name}</li>
                </ul>
              ))}
            </div>
          </div>
        </div>

        <div className={scss.results}>
          <h3 data-aos="fade-up">К каким результатам вас может привести этот курс?</h3>
          <p>{data?.description3}</p>
          <p>{data?.description4}</p>
        </div>

        <div className={scss.actions}>
          <button className={scss.buyButton} data-aos="zoom-in">Купить курс</button>
          <button className={scss.programButton} data-aos="zoom-in">Смотреть программу</button>
        </div>
      </div>
    </section>
  );
};

export default AboutCourses;
