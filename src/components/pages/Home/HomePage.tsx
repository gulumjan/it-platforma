import React from 'react';
import Home from "@/components/pages/Home/Home";
import SectionHome2 from "@/components/pages/Home/SectionHome2";
import SectionHome3 from "@/components/pages/Home/SectionHome3";
import SectionHome4 from './SectionHome4';
import SectionHome5 from './SectionHome5';

const HomePage = () => {
    return (
        <div>
             <Home />
      <SectionHome2/>
      <SectionHome3/> 
      <SectionHome4/>
    <SectionHome5/>
        </div>
    );
};

export default HomePage;