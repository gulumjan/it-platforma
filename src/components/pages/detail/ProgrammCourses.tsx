"use client";
import { FC } from "react";
import scss from "./ProgrammCourses.module.scss";
import Img from "@/assets/proggramImg.svg";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useGetCoursDetailQuery } from "@/redux/api/product";

const ProgrammCourses: FC = () => {
  const { id } = useParams();
  const { data } = useGetCoursDetailQuery(Number(id));
  return (
    <section className={scss.ProgrammCourses}>
      <div className="container">
        <h1>{data?.description5}</h1>
        <div className={scss.content}>
          <div className={scss.blocks}>
            {data?.modules.map((el) => (
              <div key={el.id} className={scss.block}>
                <h5>Модуль {el.module_num}</h5>
                <p>{el.description}</p>
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
            data?.image_prepod! ||
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg-WjMailx0S8JX3m80ELdb8mIIpvx9dGcig&s"
          }
          alt=""
        />
        <p>Мастер класс ведет</p>
        <h1>{data?.full_name}</h1>
        {data?.position}
      </div>
    </section>
  );
};

export default ProgrammCourses;
