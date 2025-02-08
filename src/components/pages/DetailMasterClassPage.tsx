import React from "react";
import DetailMasterClass from "./schoolSections/master-class/DetailMasterClass";
import AboutMasterClass from "./schoolSections/master-class/AboutMasterClass";
import Process from "./schoolSections/master-class/Procees";
import SectionHome4 from "./Home/SectionHome4";
import ProgrammMasterClass from "./schoolSections/master-class/ProgrammMasterClass";

const DetailMasterClassPage = () => {
  return (
    <>
      <DetailMasterClass />
      <AboutMasterClass />
      <ProgrammMasterClass />

      <Process />
      <SectionHome4 />
    </>
  );
};

export default DetailMasterClassPage;
