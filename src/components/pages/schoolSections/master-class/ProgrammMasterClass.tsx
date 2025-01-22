"use client";
import { FC } from "react";
import scss from "./ProgrammMasterClass.module.scss";
import Img from "@/assets/proggramImg.svg";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useGetMasterClassDetailQuery } from "@/redux/api/product";

const ProgrammMasterClass: FC = () => {
  const { id } = useParams();
  const { data } = useGetMasterClassDetailQuery(Number(id));
  return (
    <section className={scss.ProgrammCourses}>
      <div className="container">
        <h1>Zakirova</h1>
        <div className={scss.content}>
          <div className={scss.blocks}>
            {data?.programma_master_classes.map((el, index) => (
              <div key={index} className={scss.block}>
                <h5>Модуль {index + 1}</h5>
                <p>{el.name_master}</p>
              </div>
            ))}

            <button>Зарегистрироваться</button>
          </div>
          <Image width={480} height={503} src={Img} alt="" />
        </div>
      </div>
      <div className={scss.author}>
        <Image
          width={568}
          height={588}
          src={
            data?.image_master! ||
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg-WjMailx0S8JX3m80ELdb8mIIpvx9dGcig&s"
          }
          alt=""
        />
        <p>Мастер класс ведет</p>
        <h1>Евгений Александрович</h1>
        {data?.position}
      </div>
    </section>
  );
};

export default ProgrammMasterClass;
