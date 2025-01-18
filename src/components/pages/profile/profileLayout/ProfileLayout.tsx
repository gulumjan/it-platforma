import Link from "next/link";
import { FC, ReactNode } from "react";
import s from "./ProfileLayout.module.scss";
import ProfileNavBar from "../components/profileNavBar/ProfileNavBar";

interface IProfileLayoutProps {
  children: ReactNode;
}

const ProfileLayout: FC<IProfileLayoutProps> = ({ children }) => {
  return (
    <section id={s.main}>
      <div className="container">
        <div className={s.main}>
          <nav className={s.mainNav}>
            <Link href={"#"}>Главная </Link>
            <Link href={"#"}> / Профиль / Личные данные</Link>
          </nav>
          <div className={s.navigate}>
            <ProfileNavBar />
            <>{children}</>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileLayout;
