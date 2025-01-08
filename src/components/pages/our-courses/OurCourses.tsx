import { FC } from "react";
import scss from "./OurCourses.module.scss";

const OurCourses: FC = () => {
  return (
    <section className={scss.OurCourses}>
      <div className="container">
        <div className={scss.content}>OurCourses</div>
      </div>
    </section>
  );
};

export default OurCourses;
