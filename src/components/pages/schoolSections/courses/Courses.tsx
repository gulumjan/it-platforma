import { FC } from "react";
import scss from "./Courses.module.scss";

const Courses: FC = () => {
  return (
    <section className={scss.Courses}>
      <h1>Курсы</h1>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.blocks}>
            <div className={scss.block}>
              <h2>Frontend-разработчик</h2>
              <p>
                Мастер создания сайтов. Умеет делать их красивыми,
                интерактивными, с большим функционалом. Профессия отлично
                подойдет тем, кто хочет фрилансить и постоянно разрабатывать
                новые проекты
              </p>
              <button>Подробнее</button>
            </div>
            <div className={scss.block}>
              <h2>Frontend-разработчик</h2>
              <p>
                Мастер создания сайтов. Умеет делать их красивыми,
                интерактивными, с большим функционалом. Профессия отлично
                подойдет тем, кто хочет фрилансить и постоянно разрабатывать
                новые проекты
              </p>
              <button>Подробнее</button>
            </div>
            <div className={scss.block}>
              <h2>Frontend-разработчик</h2>
              <p>
                Мастер создания сайтов. Умеет делать их красивыми,
                интерактивными, с большим функционалом. Профессия отлично
                подойдет тем, кто хочет фрилансить и постоянно разрабатывать
                новые проекты
              </p>
              <button>Подробнее</button>
            </div>
          </div>
        </div>
      </div>
      <button className={scss.allBtn}>Все курсы</button>
    </section>
  );
};

export default Courses;
