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
            <Image
              src={Men}
              alt="Developer"
              className={scss.main_image}
              width={651}
              height={535}
            />
            <div className={scss.floating_icons}>
              <Image
                src={Settings}
                alt="Settings"
                className={scss.settings}
                width={120}
                height={120}
              />
              <Image
                src={Brace}
                alt="Code"
                className={scss.brace}
                width={132}
                height={136}
              />
              <Image
                src={Tools}
                alt="Tools"
                className={scss.tools}
                width={300}
                height={300}
              />
              <Image
                src={Lamp}
                alt="Idea"
                className={scss.lamp}
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;