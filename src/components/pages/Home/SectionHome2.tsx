import React from 'react';
import scss from "@/components/pages/Home/SectionHome2.module.scss";
import home2_img from "@/assets/home2_img.png";
import Image from 'next/image';
import { FaClipboardList } from "react-icons/fa";

const articles = Array(6).fill({
    title: "Статьи",
    description: "Мы подготовили подборку самых популярных курсов по направлению Java в IBS Training Center.",
    date: "01.02.2022",
    image: home2_img,
});

const SectionHome2 = () => {
    return (
        <div id={scss.home2}>
            <div className="container">
                <h1>Последние статьи</h1>
                <div className={scss.home2}>
                    {articles.map((article, index) => (
                        <div key={index} className={scss.home2_block}>
                            <Image src={article.image} alt="img" />
                            <div className={scss.home2_text}>
                                <h6>{article.title}</h6>
                                <p>{article.description}</p>
                                <div className={scss.home2_read}>
                                    <h5><FaClipboardList /><span></span>Читать</h5>
                                    <h5>{article.date}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                  
                </div>
                <div className={scss.btn}>
                <button>Показать больше</button>

                </div>
              
            </div>
        </div>
    );
};

export default SectionHome2;
