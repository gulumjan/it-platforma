"use client";
import React, { useState, useEffect } from "react";
import scss from "@/components/pages/Home/SectionHome2.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { FaClipboardList } from "react-icons/fa";
import { useGetStatyaQuery } from "@/redux/api/product";
import { useRouter } from "next/navigation";

const SectionHome2 = () => {
  const route = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init({ duration: 1000, once: true });
    }
  }, []);

  const handlebox = (id: number) => {
    route.push(`/articleBefore/${id}`);
  };

  const { data } = useGetStatyaQuery();
  const [visibleCount, setVisibleCount] = useState(6);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const visibleData = data?.slice(0, visibleCount);

  return (
    <div id={scss.home2}>
      <div className="container">
        <h1 data-aos="fade-up">Последние статьи</h1>
        <div className={scss.home2}>
          {visibleData?.map((el, index) => (
            <div
              key={index}
              className={scss.home2_block}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <Image src={el.image} width={250} height={250} alt="img" />
              <div className={scss.home2_text}>
                <h6>Статьи</h6>
                <p>{el.title.slice(0, 100)}</p>
                <div className={scss.home2_read}>
                  <h5 onClick={() => handlebox(el.id)}>
                    <FaClipboardList />
                    <span></span>Читать
                  </h5>
                  <h5>{el.date}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>

        {data && visibleCount < data.length && (
          <div className={scss.btn} data-aos="fade-up">
            <button onClick={handleShowMore}>Показать больше</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionHome2;
