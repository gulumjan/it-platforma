import React from 'react';
import scss from "@/components/pages/ArticleBefore/ArticleSection2.module.scss"
import article2_img from "@/assets/sectionArticle2_img.png"
import Image from 'next/image';
import Link from 'next/link';

const SectionArticle2 = () => {
    return (
        <div id={scss.article2}>
            <div className="container">
                <div className={scss.article2}>
                    <Image src={article2_img} alt="img" />
                    <div className={scss.article2_text}>
                        <h3>Оформите подписку, чтобы посмотреть полную версию</h3>
                        <span className={scss.span1}>Вы уже авторизованы?</span>
                        <span className={scss.span2}>Авторизуйтесь</span>
                        



                    </div>

                    <div className={scss.article2_btn}>
                     <Link href={"/registration"}>   <button>Получить доступ за 225,00$</button>
                     </Link>
                    </div>

                </div>
            </div>

            
        </div>
    );
};

export default SectionArticle2;