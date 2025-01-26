import React from "react";
import scss from "./Home.module.scss";
import Image from "next/image";
import Men from "@/assets/men 1.svg";
import Settings from "@/assets/images (1) 1.svg";
import Brace from "@/assets/images (1) 2.svg";
import Lamp from "@/assets/lamp 1.svg";
import Tools from "@/assets/tools 1.svg";
const Home = () => {
  return (
    <section className={scss.home}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.text}>
            <h1>IT образовательная платформа</h1>
            <p>
              Наша образовательная платформа вам даст необходимые практические
              знания для адаптации в IT-сфере.
            </p>
          </div>
          <div className={scss.illustration}>
            <Image src={Men} alt="Developer" className={scss.main_image} />
            <div className={scss.floating_icons}>
              <Image
                width={120}
                height={120}
                src={Settings}
                alt="Settings"
                className={scss.settings}
              />
              <Image
                width={132}
                height={136}
                src={Brace}
                alt="Code"
                className={scss.brace}
              />
              <Image
                width={196}
                height={191}
                src={Tools}
                alt="Tools"
                className={scss.tools}
              />
              <Image
                width={135}
                height={133}
                src={Lamp}
                alt="Idea"
                className={scss.lamp}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
