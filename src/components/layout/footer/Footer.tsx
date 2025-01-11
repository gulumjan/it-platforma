import { FC } from "react";
import scss from "./Footer.module.scss";
import footer_img from "@/assets/footer_logo.png";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
import { PiTwitterLogo } from "react-icons/pi";
import { PiTiktokLogoThin } from "react-icons/pi";
import { PiTelegramLogoLight } from "react-icons/pi";
import { GoMail } from "react-icons/go";
import { IoCallOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
const Footer: FC = () => {
  return (
    <section id={scss.footer}>
      <div className="container">
        <div className={scss.footer}>
          <div className={scss.footer1}>
            <Image src={footer_img} alt="img" />
            <div className={scss.btn}>
              <button>KG</button>
              <button>RU</button>
            </div>
          </div>

          <div className={scss.footer2}>
            <h3>Быстрые ссылки</h3>
            <p>О школе</p>
            <p>Наши курсы</p>
            <p>О нас</p>
          </div>

          <div className={scss.footer3}>
            <h3>Социальные сети</h3>
            <div className={scss.footer_icon}>
              <span>
                <FaInstagram />
              </span>
              <span>
                <AiOutlineYoutube />
              </span>
              <span>
                <CiFacebook />
              </span>
            </div>
            <div className={scss.footer_icon}>
              <span>
                <PiTwitterLogo />
              </span>
              <span>
                <PiTiktokLogoThin />
              </span>
              <span>
                <PiTelegramLogoLight />
              </span>
            </div>
          </div>

          <div className={scss.footer4}>
            <h3>Контакты</h3>
            <p>
              <span>
                <GoMail />
              </span>
              @motionwebteam@gmail.com
            </p>
            <p>
              <span>
                <IoCallOutline />
              </span>
              +996 559 - 69 - 26 - 26
            </p>
          </div>

          <div className={scss.footer5}>
            <h3>Адреса</h3>
            <p>
              <span>
                <IoLocationOutline />
              </span>
              Турусбекова 109 / 3
            </p>
            <p>Идентификационный код: 1234567890</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
