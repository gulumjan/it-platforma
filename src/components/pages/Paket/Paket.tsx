"use client";
import React from "react";
import scss from "@/components/pages/Paket/Paket.module.scss";
import { useGetPaketTarifQuery } from "@/redux/api/product";
import { useRouter } from "next/navigation"; 

const Paket = () => {
  const { data } = useGetPaketTarifQuery();
  const router = useRouter();

  console.log(data, "sdfghj");

  const handlebox = (id: number) => {
    router.push(`/buy/${id}`); 
  };

  return (
    <div className={scss.paket}>
      <div className="container">
        <h1>Выберите свой пакет участия</h1>
        <div className={scss.paket}>
          {data?.map((el, idx) => (
            <div className={scss.paket_card} key={idx}>
              <h6>{el.term_status}</h6>
              <h2>{el.sum}</h2>
              <button className={scss.btn}>{el.tariff_pay}</button>
              {el.tariff_info.map((el, idx) => (
                <ul key={idx}>
                  <li>{el.info}</li>
                </ul>
              ))}

              <div className={scss.btn1}>
                <button onClick={() => handlebox(el.id)}>
                  Оформить подписку
                </button>
              </div>
            </div>
          ))}
        </div>

        <p>
          Списания будут автоматическими. Вы всегда можете отменить подписку в
          Вашем личном кабинете и больше списаний не будет
        </p>
      </div>
    </div>
  );
};

export default Paket;
