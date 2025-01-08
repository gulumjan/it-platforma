import { FC } from "react";
import scss from "./AboutSchool.module.scss";

const AboutSchool: FC = () => {
  return (
    <section className={scss.AboutSchool}>
      <div className="container">
        <div className={scss.content}>AboutSchool</div>
      </div>
    </section>
  );
};

export default AboutSchool;
