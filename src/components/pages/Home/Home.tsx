import React from "react";
import scss from "../Home/Home.module.scss";
import img_home from "@/assets/hero.svg";
import Image from "next/image";

const Home = () => {
  return (
    <div id={scss.home}>
      <div className="container">
        <div className={scss.home}>
        <div className={scss.home_text}>
            <h1>IT образовательная платформа </h1>
            <p>
              Наша образовательная платформа вам даст необходимые практические
              знания для адаптации в IT-сфере.
            </p>
          </div>
          <Image src={img_home} alt="img" />
         
        </div>
      </div>
    </div>
  );
};

export default Home;
