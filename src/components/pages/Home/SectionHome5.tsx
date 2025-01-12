import React from 'react';
import scss from "@/components/pages/Home/SectionHome5.module.scss"

const SectionHome5 = () => {
    return (
        <div id={scss.home5}>
            <div className="container">
                <div className={scss.home5}>
                    <div className={scss.home5_text}>
                        <h2>Оставить заявку</h2>
                        <p>Заполните краткую форму с ключевым вопросами, и мы подготовимся к разговору с вами </p>

                    </div>

                    <div className={scss.home_form}>
                        <form action="">
                            <p>ФИО*</p>
                            <input type="text" />
                            <p>Номер телефон*</p>
                            <input type="text" />
                            <p>Email*</p>
                            <input type="text" />

                        </form>
                        <button >Отправить</button>
                        
                    </div>

                </div>

            </div>
            
        </div>
    );
};

export default SectionHome5;