import React from "react";
import s from "./Comments.module.scss";
// import Image from "next/image";

const Comments = () => {
  return (
    <>
      <div className={s.comment}>
        <h1>Коментарии</h1>
        <div className={s.cards}>
          <div className={s.card}>
            <div className={s.userImg}>
              {/* <Image src={""} alt='img'/> */}
              <div className={s.img}>H</div>
            </div>
            <div className={s.userInfo}>
              <div className={s.userName}>
                <h2>Осмонова Нурай</h2>
                <span>. 26. 05. 2022 г</span>
              </div>
              <p>Урок супер</p>
              <div className={s.action}>
                <button>Редактировать </button>
                <button>Удалить</button>
              </div>
            </div>
          </div>
          <div className={s.card}>
            <div className={s.userImg}>
              {/* <Image src={""} alt='img'/> */}
              <div className={s.img}>H</div>
            </div>
            <div className={s.userInfo}>
              <div className={s.userName}>
                <h2>Осмонова Нурай</h2>
                <span>. 1 минуту назад</span>
              </div>
              <p>
                Было классно.Все понятно и досканально описано каждая деталь. Я
                вообще не желею что купила эти курсы
              </p>
              <div className={s.action}>
                <button>Редактировать </button>
                <button>Удалить</button>
              </div>
            </div>
          </div>
        </div>
        <div className={s.empty}>Вы еще не написали комментариев</div>
      </div>

     
    </>
  );
};

export default Comments;
