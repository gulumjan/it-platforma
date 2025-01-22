"use client";
import React from "react";
import scss from "./Process.module.scss";
import { FaCheck } from "react-icons/fa";
import { useParams } from "next/navigation";
import { useGetMasterClassDetailQuery } from "@/redux/api/product";

const Process = () => {
  const { id } = useParams();
  const { data } = useGetMasterClassDetailQuery(Number(id));

  return (
    <div className={scss.ProcessOfMaster}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.left}>
            <div className={scss.left_text}>
              <h1> Процесс обучения</h1>
              <p>
                Каждый из наших мастер-классов состоит из 2-8 уроков.
                Рекомендуем проходить мастер-класс последовательно, урок за
                уроком
              </p>
            </div>
            <div className={scss.cards}>
              {data?.master_classes.map((item, index) => (
                <div key={index} className={scss.card}>
                  <h2>{index + 1}</h2>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={scss.right}>
            <div className={scss.buyCard}>
              <h1>{data?.description_process}</h1>
              <h2>{data?.price}</h2>
              <ul>
                <li>
                  <span>
                    <FaCheck />
                  </span>
                  Доступ к мастер классу навсегда
                </li>
                <li>
                  <span>
                    <FaCheck />
                  </span>
                  Доступны все 5 уроков
                </li>
                <li>
                  <span>
                    <FaCheck />
                  </span>
                  Дополнительные материалы
                </li>
              </ul>
              <div className={scss.buttons}>
                <button>Купить мастер-класс</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
