import { FC } from "react";
import scss from "./AboutCourses.module.scss";

const AboutCourses: FC = () => {
  return (
    <section className={scss.AboutCourses}>
      <div className="container">
        <h2 className={scss.title}>О КУРСЕ</h2>
        <p className={scss.description}>
          Это всё, что ты видишь и кликаешь на сайте или в приложении —
          картинки, кнопочки, анимации и даже бесная реклама.
        </p>
        <p className={scss.description}>
          Самые главные инструменты frontend разработки сайтов это JavaScript,
          HTML и CSS.
        </p>
        <p className={scss.description}>
          В Кыргызстане фронтенд-разработчики востребованы практически в каждой
          IT-компании. Это также одно из самых популярных направлений для
          фриланса и удалённой работы. Всё потому, что в современном мире сайт
          нужен каждому.
        </p>

        <div className={scss.info}>
          <div className={scss.column}>
            <h3>Для кого это</h3>
            <ul>
              <li>Для людей с математическим складом ума.</li>
            </ul>
          </div>
          <div className={scss.column}>
            <h3>Вы изучите</h3>
            <div className={scss.net}>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
              <ul>
                <li>Soft skills. Нетрехнические навыки</li>
                <li>Кроссплатформенность и кроссбраузерность</li>
                <li>Управление версиями</li>
                <li>Тестирование и отладка</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={scss.results}>
          <h3>К каким результатам вас может привести этот курс?</h3>
          <p>
            С каждым днём, с каждым месяцем, с каждым годом вы будете физически
            ощущать, как ваши мечты и цели воплощаются в реальность. И каждый
            день, каждый год вы будете видеть, что вы умеете той жизнью, которую
            сами для себя выбрали, и именно по тому сценарию, который вы сами
            для себя создали.
          </p>
          <p>
            Навык планирования изменит вашу жизнь и поможет отмечать умение
            выстраивать планы для личной и профессиональной деятельности.
            Сначала вы будете видеть на неделю вперёд, потом — на месяц, потом —
            на год, а потом вы будете видеть весь свой путь. Система
            планирования Кадзен поможет вам правильно планировать правильные
            вещи и увеличить степень контроля над своей жизнью, чтобы сделать её
            счастливой и успешной.
          </p>
        </div>

        <div className={scss.actions}>
          <button className={scss.buyButton}>Купить курс</button>
          <button className={scss.programButton}>Смотреть программу</button>
        </div>
      </div>
    </section>
  );
};

export default AboutCourses;
