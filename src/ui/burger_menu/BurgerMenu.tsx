"use client";
import React, { useState } from "react";
import "./BurgerMenu.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const BurgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        className={`burger-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <nav className={`nav-menu ${isOpen ? "active" : ""}`}>
        <ul>
          <li>
            <Link href="/school">
              <p onClick={scrollToTop}>О школе</p>
            </Link>
          </li>
          <li>
            <Link href="/courses">
              <p onClick={scrollToTop}>Наши курсы</p>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <p onClick={scrollToTop}>О нас</p>
            </Link>
          </li>

          <div className="under_switch">
            <button onClick={() => router.push(`/sign-in`)}>Войти</button>
            <button>Подписаться</button>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default BurgerMenu;
