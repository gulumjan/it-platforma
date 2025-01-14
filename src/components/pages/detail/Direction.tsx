import { FC } from "react";
import scss from "./Direction.module.scss";

const Direction: FC = () => {
  return (
    <section className={scss.Direction}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.content_text}>
            <h1>Frontend-разработчик</h1>
            <p>
              {" "}
              Идея реактивного программирования появилась сравнительно недавно,
              лет 10 назад. Что вызвало популярность этого относительно нового
              подхода и почему сейчас он в тренде, рассказал на конференции
            </p>
            <button>Купить курс за 46 $ </button>
          </div>
          <div className={scss.access}>
            <div className={scss.together}>
              <p>Доступ:</p>
              <h4>Навсегда</h4>
            </div>
            <div className={scss.together}>
              <p>В курс входит: </p>
              <h4>3 модулей 60 материалов</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Direction;
