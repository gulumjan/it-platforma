"use client";
import { FC, useEffect } from "react";
import scss from "./Material.module.scss";
import Image from "next/image";
import img from "@/assets/ЗВЕЗДА.svg";
import img2 from "@/assets/Frame 10.svg";
import img3 from "@/assets/100 материао.svg";
import { useParams } from "next/navigation";
import { useGetCoursDetailQuery } from "@/redux/api/product";
import AOS from "aos";
import "aos/dist/aos.css"; // Импортируем стили для AOS

const Material: FC = () => {
  const { id } = useParams();
  const { data } = useGetCoursDetailQuery(Number(id));

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section className={scss.Material}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.blocks}>
            <div className={scss.block} data-aos="fade-up">
              <Image height={83} width={113} src={img3} alt="" />
              <h4>100 материалов</h4>
              <p>
                Только полезная информация, никакой воды. Применяйте эти знания
                первыми!
              </p>
            </div>
            <div className={scss.block} data-aos="fade-up" data-aos-delay="200">
              <Image height={83} width={113} src={img} alt="" />
              <h4>100 материалов</h4>
              <p>
                Только полезная информация, никакой воды. Применяйте эти знания
                первыми!
              </p>
            </div>
            <div className={scss.block} data-aos="fade-up" data-aos-delay="400">
              <Image height={103} width={123} src={img2} alt="" />
              <h4>100 материалов</h4>
              <p>
                Только полезная информация, никакой воды. Применяйте эти знания
                первыми!
              </p>
            </div>
          </div>

          <div className={scss.author} data-aos="fade-up" data-aos-delay="600">
            <Image
              width={568}
              height={588}
              src={
                data?.image_prepod! ||
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg-WjMailx0S8JX3m80ELdb8mIIpvx9dGcig&s"
              }
              alt=""
            />
            <p>Мастер класс ведет</p>
            <h1>{data?.full_name}</h1>
            {data?.position}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Material;
