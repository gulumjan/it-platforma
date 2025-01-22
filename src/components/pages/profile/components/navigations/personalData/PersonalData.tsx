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
  const [selectedYear, setSelectedYear] = useState<string>("2025");
  const [selectedMonth, setSelectedMonth] = useState<string>("Январь");
  const [selectedDay, setSelectedDay] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState<string>("Кыргызстан");
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [days, setDays] = useState<string[]>(getDaysInMonth(1, 2025));
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  const { data } = useGetUserQuery();

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
          <InputData title="ФИО" values={"Осмонова Нурай"} />
          <InputData title="Номер телефон" values={"+996 500 99 80 88"} />
          <InputData title="Email" values={"osmonovanurai05@gmail.com"} />
          <label className={s.label}>
            Пол
            <div className={s.input}>
              <div className={s.checkbox}>
                <input type="checkbox" />
                Мужской
              </div>
              <div className={s.checkbox}>
                <input type="checkbox" />
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
          <InputData title="Род деятельности" values="Студент" />
        </div>
      </form>
    </div>
  );
};

export default PersonalData;
