import React from "react";
import AboutSchool from "./schoolSections/about/AboutSchool";
import Courses from "./schoolSections/courses/Courses";
import MasterClass from "./schoolSections/master-class/MasterClass";
import SectionHome5 from "./Home/SectionHome5";
import Feedback from "./schoolSections/feedbackSections/Feedback";

const AboutSchoolPage = () => {
  return (
    <>
      <AboutSchool />
      <Courses />
      <MasterClass />
      <Feedback />
      <SectionHome5 />
    </>
  );
};

export default AboutSchoolPage;
