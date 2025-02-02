"use client";
import React, { useEffect } from "react";
import scss from "@/components/pages/Home/SectionHome3.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/navigation";

const SectionHome3 = () => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init({ duration: 1000, once: true });
    }
  }, []);

  return (
    <div id={scss.home3}>
      <div className="container">
        <div className={scss.home3} data-aos="fade-up">
          <div className={scss.home3_text} data-aos="fade-right">
            <h2>Подпишитесь сейчас за 19,00 $ / мес</h2>
            <p>
              И получите доступ к материалам и кейсам, а также к новым
              мастер-классам
            </p>
          </div>

          <div className={scss.home3_btn} data-aos="fade-left">
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
