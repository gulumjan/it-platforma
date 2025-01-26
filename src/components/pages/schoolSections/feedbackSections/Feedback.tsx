"use client";
import { FC } from "react";
import scss from "./Feedback.module.scss";
import Image from "next/image";

import { useGetFeedbackQuery } from "@/redux/api/product";

const Feedback: FC = () => {
  const { data } = useGetFeedbackQuery();

  return (
    <section className={scss.Feedback}>
      <div className="container">
        <h2 className={scss.title}>Отзывы наших студентов</h2>
        <div className={scss.cardsContainer}>
          {data?.map((el, index) => (
            <div className={scss.card} key={index}>
              <Image
                src={el.user.image}
                alt="img"
                className={scss.image}
                width={50}
                height={50}
              />
              <h3 className={scss.name}>{el.user.fio}</h3>
              <p className={scss.text}>{el.text}</p>
              <span className={scss.date}>{el.created_date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feedback;
