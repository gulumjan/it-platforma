"use client";
import { FC } from "react";
import scss from "./ProgrammCourses.module.scss";
import Img from "@/assets/proggramImg.svg";
import Image from "next/image";

const ProgrammCourses: FC = () => {
  return (
    <section className={scss.ProgrammCourses}>
      <div className="container">
        <h1>ПРОГРАММА КУРСА</h1>
        <div className={scss.content}>
          <div className={scss.blocks}>
            <div className={scss.block}>
              <h5>Модуль 1</h5>
              <p>Reactivity</p>
            </div>
            <div className={scss.block}>
              <h5>Модуль 1</h5>
              <p>Reactivity</p>
            </div>{" "}
            <div className={scss.block}>
              <h5>Модуль 1</h5>
              <p>Reactivity</p>
            </div>{" "}
            <div className={scss.block}>
              <h5>Модуль 1</h5>
              <p>Reactivity</p>
            </div>{" "}
            <div className={scss.block}>
              <h5>Модуль 1</h5>
              <p>Reactivity</p>
            </div>
            <div className={scss.block}>
              <h5>Модуль 1</h5>
              <p>Reactivity</p>
            </div>{" "}
            <button>Зарегистрироваться</button>
          </div>
          <Image width={480} height={503} src={Img} alt="" />
        </div>
      </div>
    </section>
  );
};

export default ProgrammCourses;
