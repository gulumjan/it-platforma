"use client";
import React, { useState, useEffect } from "react";
import s from "./PersonalData.module.scss";
import InputData from "@/ui/inputData/InputData";
import DropDownSelect from "@/ui/dropdownSelect/DropDownSelect";
import {
  countries,
  citiesByCountry,
  months,
  years,
  getDaysInMonth,
} from "@/constants/constants";
import { useGetUserQuery } from "@/redux/api/auth";

const PersonalData = () => {
  const { data } = useGetUserQuery();
  console.log("🚀 ~ PersonalData ~ data:", data)
  const userData = data?.[0];
  const [selectedYear, setSelectedYear] = useState<string>("2025");
  const [selectedMonth, setSelectedMonth] = useState<string>("Январь");
  const [selectedDay, setSelectedDay] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState<string>("Кыргызстан");
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [days, setDays] = useState<string[]>(getDaysInMonth(1, 2025));
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    if (userData) {
      console.log("🚀 ~ useEffect ~ userData:", userData)
      
      if (userData.birthday) {
        const [year, month, day] = userData.birthday.split("-");
        setSelectedYear(year);
        setSelectedMonth(months[parseInt(month, 10) - 1]);
        setSelectedDay(day);
        setDays(getDaysInMonth(parseInt(month, 10), parseInt(year, 10)));
      }
      if (userData.country && countries.includes(userData.country)) {
        setSelectedCountry(userData.country);
      } else {
        setSelectedCountry("Кыргызстан");
      }
  
      if (userData.city) {
        setSelectedCity(userData.city);
      }
      console.log(userData.username);
      
    }
  }, [userData]);
  

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleYearChange = (year: string) => {
    setSelectedYear(year);
    const monthIndex = months.indexOf(selectedMonth) + 1;
    setDays(getDaysInMonth(monthIndex, parseInt(year)));
    setSelectedDay("");
  };

  const handleMonthChange = (month: string) => {
    setSelectedMonth(month);
    const monthIndex = months.indexOf(month) + 1;
    setDays(getDaysInMonth(monthIndex, parseInt(selectedYear)));
    setSelectedDay("");
  };

  const handleCountryChange = (country: string) => {
    setSelectedCountry(country);
    setSelectedCity("");
  };

  const getClassName = (defaultWidth: number) => {
    return screenWidth < 890 ? 32 : defaultWidth;
  };

  return (
    <div className={s.personal}>
      <h1>Личные данные</h1>
      <form>
        <div className={s.left}>
          <InputData title="ФИО" values={userData?.username || "Не указано"} />
          <InputData
            title="Номер телефона"
            values={userData?.phone_number || "Не указан"}
          />
          <InputData
            title="Email"
            values={userData?.username ? `${userData.username}@gmail.com` : "Не указан"}
          />
          <label className={s.label}>
            Пол
            <div className={s.input}>
              <div className={s.checkbox}>
                <input
                  type="checkbox"
                  checked={userData?.gender_status === "Мужской"}
                  readOnly
                />
                Мужской
              </div>
              <div className={s.checkbox}>
                <input
                  type="checkbox"
                  checked={userData?.gender_status === "Женский"}
                  readOnly
                />
                Женский
              </div>
            </div>
          </label>
        </div>
        <div className={s.right}>
          <div className={s.birthDayLabel}>
            <label htmlFor="">Дата рождения</label>
            <div className={s.birthDay}>
              <DropDownSelect
                data={days}
                value={selectedDay}
                onChange={setSelectedDay}
                className={getClassName(25)}
              />
              <DropDownSelect
                data={months}
                value={selectedMonth}
                onChange={handleMonthChange}
                className={getClassName(50)}
              />
              <DropDownSelect
                data={years}
                value={selectedYear}
                onChange={handleYearChange}
                className={getClassName(30)}
              />
            </div>
          </div>
          <DropDownSelect
            title="Страна"
            data={countries}
            value={selectedCountry}
            onChange={handleCountryChange}
          />
          <DropDownSelect
            title="Город"
            data={citiesByCountry[selectedCountry] || []}
            value={selectedCity}
            onChange={setSelectedCity}
          />
          <InputData
            title="Род деятельности"
            values={userData?.position || "Не указан"}
          />
        </div>
      </form>
    </div>
  );
};

export default PersonalData;
