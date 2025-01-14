import React from 'react';
import scss from "@/components/pages/ArticleBefore/ArticleSection3.module.scss"
import article3_img from "@/assets/article3_img.png"
import Image from 'next/image';

const ArticleSection3 = () => {
    return (
        <div id={scss.article2}>
            <div className="container">
                <h2>Комментарии</h2>
                <div className={scss.article2}>
                    <Image src={article3_img} alt="img" />
                    <div className={scss.article2_text}>
                        <h3>Вы не зарегистрировались!</h3>
                        <span className={scss.span1}>Чтобы оставить комментарий, пожалуйста авторизуйтесь или зарегитрируйтесь.</span>
                        
                        



                    </div>

                    <div className={scss.article2_btn}>
                        <button>Зарегистрироваться</button>

                    </div>

                </div>
            </div>

            
        </div>
    );
};

export default ArticleSection3;