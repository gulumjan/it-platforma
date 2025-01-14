import { FC } from "react";
import scss from "./Material.module.scss";
import Image from "next/image";
import img from "@/assets/ЗВЕЗДА.svg";
import img2 from "@/assets/Frame 10.svg";
import img3 from "@/assets/100 материао.svg";
import profile from "@/assets/Rectangle 2196.svg";

const Material: FC = () => {
  return (
    <section className={scss.Material}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.blocks}>
            <div className={scss.block}>
              <Image height={83} width={113} src={img3} alt="" />
              <h4>100 материалов</h4>
              <p>
                Только полезная информация, никакой воды. Применяйте эти знания
                первыми!
              </p>
            </div>
            <div className={scss.block}>
              <Image height={83} width={113} src={img} alt="" />
              <h4>100 материалов</h4>
              <p>
                Только полезная информация, никакой воды. Применяйте эти знания
                первыми!
              </p>
            </div>
            <div className={scss.block}>
              <Image height={103} width={123} src={img2} alt="" />
              <h4>100 материалов</h4>
              <p>
                Только полезная информация, никакой воды. Применяйте эти знания
                первыми!
              </p>
            </div>
          </div>
          <div className={scss.author}>
            <Image width={568} height={588} src={profile} alt="" />
            <p>Мастер класс ведет</p>
            <h1>Евгений Александрович</h1>
            Frontend developer
            <p></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Material;
