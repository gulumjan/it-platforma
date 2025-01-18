import React from "react";
import DetailMasterClass from "./schoolSections/master-class/DetailMasterClass";
import AboutMasterClass from "./schoolSections/master-class/AboutMasterClass";
import Process from "./schoolSections/master-class/Procees";
import ProgrammCourses from "./detail/ProgrammCourses";
import SectionHome4 from "./Home/SectionHome4";

const DetailMasterClassPage = () => {
  return (
    <>
      <DetailMasterClass />
      <AboutMasterClass />
      <ProgrammCourses />
      <Process />
      <SectionHome4 />
    </>
  );
};

export default DetailMasterClassPage;
