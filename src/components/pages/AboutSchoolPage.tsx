import React from "react";
import AboutSchool from "./schoolSections/about/AboutSchool";
import Courses from "./schoolSections/courses/Courses";
import MasterClass from "./schoolSections/master-class/MasterClass";

const AboutSchoolPage = () => {
  return (
    <>
      <AboutSchool />
      <Courses />
      <MasterClass />
    </>
  );
};

export default AboutSchoolPage;
