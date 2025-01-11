import { FC } from "react";
import scss from "./AboutSchool.module.scss";
import Image from "next/image";
import Img from "@/assets/web_development_banner 1.png";

const AboutSchool: FC = () => {
  return (
    <section className={scss.AboutSchool}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.text}>
            <div className={scss.relate}>
              <h1>О нашей школе:</h1>
              <p>
                Наша платформа — это интенсивная программа обучения для тех, кто
                хочет освоить востребованную профессию, войти в IT и
                зарабатывать больше.
              </p>
            </div>
            <div className={scss.relate}>
              <h1>Наша миссия:</h1>
              <p>
                Сформировать интерес к современным технологиям <br /> и помочь
                школьнику определиться с выбором <br /> будущей специальности.
              </p>
            </div>
          </div>
          <Image width={489} height={435} src={Img} alt="" />
        </div>
      </div>
    </section>
  );
};

export default AboutSchool;
