import { FC } from "react";
import scss from "./AboutUs.module.scss";
import Image from "next/image";
import Img1 from "@/assets/image 20.svg";
import Img2 from "@/assets/image 21.svg";
import sertificat from "@/assets/sertificat.svg";
import Feedback from "../schoolSections/feedbackSections/Feedback";
import SectionHome5 from "../Home/SectionHome5";

const AboutUs: FC = () => {
  return (
    <section className={scss.AboutUs}>
      <div className="container">
        <div className={scss.content}>
          <h1>О нас</h1>
          <p>
            Курсы IT-профессий Motion Web была основана в 2021-ом году в Бишкеке
            с целью дать возможность каждому человеку, даже без опыта в
            технологиях, гарантированно освоить IT-профессию.
          </p>
          <p>
            Форма обучения - онлайн, с применением электронного обучения и
            дистанционных образовательных технологий на образовательной
            платформе Moodle и прямые эфиры с преподавателем. 154 академических
            часа трудоёмкости учебной деятельности отведено практическим
            занятиям и выполнению практических заданий.
          </p>
          <div className={scss.images}>
            <Image width={520} height={350} src={Img1} alt="" />
            <Image width={520} height={350} src={Img2} alt="" />
          </div>
          <div className={scss.sertf}>
            <h1>Сертификат</h1>
            <p>По окончании обучения выдается онлайн сертификат.</p>
            <Image width={582} height={413} src={sertificat} alt="" />
          </div>
        </div>
      </div>
      <Feedback />
      <SectionHome5 />
    </section>
  );
};

export default AboutUs;
