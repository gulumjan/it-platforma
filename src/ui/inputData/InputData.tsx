"use client";
import React, { FC, useState } from "react";
import s from "./InputData.module.scss";

interface IInputData {
  title?: string;
  values?: string;
  type?: string;
}

const InputData: FC<IInputData> = ({ title, values, type="text" }) => {
  const [value, setValue] = useState(values);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <label className={s.label}>
      {title}
      <input
        type={type}
        value={values || ""}
        readOnly
        onChange={handleChange}
        className={s.input}
      />
    </label>
  );
};

export default InputData;
