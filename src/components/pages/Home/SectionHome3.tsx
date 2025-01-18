"use client";
import React from "react";
import scss from "@/components/pages/Home/SectionHome3.module.scss";
import { useRouter } from "next/navigation";

const SectionHome3 = () => {
  const router = useRouter();
  return (
    <div id={scss.home3}>
      <div className="container">
        <div className={scss.home3}>
          <div className={scss.home3_text}>
            <h2>Подпишитесь сейчас за 19,00 $ / мес</h2>
            <p>
              И получите доступ к материалам и кейсам, а также к новым
              мастер-классам{" "}
            </p>
          </div>

          <div className={scss.home3_btn}>
            <button onClick={() => router.push(`/registration`)}>
              Оформить подписку
            </button>
            <p>Подробнее о пакетах </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionHome3;
