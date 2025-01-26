"use client";
import { FC } from "react";
import scss from "./MasterClass.module.scss";
import { useRouter } from "next/navigation";
import { useGetMasterClassQuery } from "@/redux/api/product";

const AllMasterClass: FC = () => {
  const router = useRouter();
  const { data } = useGetMasterClassQuery();
  return (
    <section className={scss.MasterClass}>
      <div className="container">
        <h1>Мастер Kлассы</h1>
        <div className={scss.content}>
          {data?.map((el) => (
            <div
              key={el.id}
              onClick={() => router.push(`/detailMasterClass/${el.id}`)}
              className={scss.block}
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
