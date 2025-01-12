import { FC } from "react";
import scss from "./Feedback.module.scss";
import Image from "next/image";

import img1 from "@/assets/Ellipse 40.svg";
import img2 from "@/assets/Ellipse 40 (1).svg";

const Feedback: FC = () => {
  return (
    <section className={scss.Feedback}>
      <div className="container">
        <h2 className={scss.title}>Отзывы наших студентов</h2>
        <div className={scss.cardsContainer}>
          <div className={scss.card}>
            <Image
              src={img1}
              alt="Виктор Александрович"
              className={scss.image}
              width={50}
              height={50}
            />
            <h3 className={scss.name}>Виктор Александрович</h3>
            <p className={scss.text}>
              С радостью оставляю положительный отзыв! Пройдя курс UX/UI
              Designer с нуля я остался полностью доволен, что мой выбор пал
              именно на данную школу. Если вы выберете данную школу - вам
              обеспечена прокачка в выбранной вами области. Всячески рекомендую
              и благодарю!
            </p>
            <span className={scss.date}>23.02.2022 г</span>
          </div>
          <div className={scss.card}>
            <Image
              width={50}
              height={50}
              src={img2}
              alt="Алина Татьяновна"
              className={scss.image}
            />
            <h3 className={scss.name}>Алина Татьяновна</h3>
            <p className={scss.text}>
              Лучшая школа в галактике и место, где я полюбил мир IT! За это
              время мне дали фундаментальные знания программирования (C++, C#,
              Python), дискретной математики, криптографии, созданию сайтов со
              сложной серверной архитектурой и многим другим важным навыкам.
            </p>
            <span className={scss.date}>23.02.2022 г</span>
          </div>
          <div className={scss.card}>
            <Image
              width={50}
              height={50}
              src={img2}
              alt="Алина Татьяновна"
              className={scss.image}
            />
            <h3 className={scss.name}>Алина Татьяновна</h3>
            <p className={scss.text}>
              Лучшая школа в галактике и место, где я полюбил мир IT! За это
              время мне дали фундаментальные знания программирования (C++, C#,
              Python), дискретной математики, криптографии, созданию сайтов со
              сложной серверной архитектурой и многим другим важным навыкам.
            </p>
            <span className={scss.date}>23.02.2022 г</span>
          </div>
          <div className={scss.card}>
            <Image
              src={img1}
              alt="Виктор Александрович"
              className={scss.image}
              width={50}
              height={50}
            />
            <h3 className={scss.name}>Виктор Александрович</h3>
            <p className={scss.text}>
              С радостью оставляю положительный отзыв! Пройдя курс UX/UI
              Designer с нуля я остался полностью доволен, что мой выбор пал
              именно на данную школу. Если вы выберете данную школу - вам
              обеспечена прокачка в выбранной вами области. Всячески рекомендую
              и благодарю!
            </p>
            <span className={scss.date}>23.02.2022 г</span>
          </div>
          <div className={scss.card}>
            <Image
              width={50}
              height={50}
              src={img2}
              alt="Алина Татьяновна"
              className={scss.image}
            />
            <h3 className={scss.name}>Алина Татьяновна</h3>
            <p className={scss.text}>
              Лучшая школа в галактике и место, где я полюбил мир IT! За это
              время мне дали фундаментальные знания программирования (C++, C#,
              Python), дискретной математики, криптографии, созданию сайтов со
              сложной серверной архитектурой и многим другим важным навыкам.
            </p>
            <span className={scss.date}>23.02.2022 г</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
