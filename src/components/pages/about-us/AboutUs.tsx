import { FC } from "react";
import scss from "./AboutUs.module.scss";

const AboutUs: FC = () => {
  return (
    <section className={scss.AboutUs}>
      <div className="container">
        <div className={scss.content}>AboutUs</div>
      </div>
    </section>
  );
};

export default AboutUs;
