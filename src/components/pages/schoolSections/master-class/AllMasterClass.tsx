"use client";
import { FC, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import scss from "./MasterClass.module.scss";
import { useRouter } from "next/navigation";
import { useGetMasterClassQuery } from "@/redux/api/product";

const AllMasterClass: FC = () => {
  const router = useRouter();
  const { data } = useGetMasterClassQuery();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className={scss.MasterClass}>
      <div className="container">
        <h1 data-aos="fade-up">Мастер Kлассы</h1>
        <div className={scss.content}>
          {data?.map((el) => (
            <div
              key={el.id}
              onClick={() => router.push(`/detailMasterClass/${el.id}`)}
              className={scss.block}
              data-aos="fade-up" // Анимация появления вверх
            >
              <h4>{el.title}</h4>
              <p>
                Программирования появилась сравнительно недавно, лет 10 назад.
                Что вызвало популярность этого относительно нового подхода и
                почему сейчас он в тренде, рассказал на конференции РИТ++ ...
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllMasterClass;
