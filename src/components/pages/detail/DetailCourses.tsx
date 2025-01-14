import { FC } from "react";
import scss from "./DetailCourses.module.scss";
import Direction from "./Direction";
import AboutCourses from "./AboutCourses";
import ProgrammCourses from "./ProgrammCourses";
import Material from "./Material";

const DetailCourses: FC = () => {
  return (
    <section className={scss.DetailCourses}>
      <Direction />
      <AboutCourses />
      <ProgrammCourses />
      <Material />
    </section>
  );
};

export default DetailCourses;
