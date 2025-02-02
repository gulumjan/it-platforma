import { FC } from "react";
import scss from "./DetailCourses.module.scss";
import Direction from "./Direction";
import ProgrammCourses from "./ProgrammCourses";
import Material from "./Material";

const DetailCourses: FC = () => {
  return (
    <section className={scss.DetailCourses}>
      <Direction />
      <ProgrammCourses />
      <Material />
    </section>
  );
};

export default DetailCourses;
