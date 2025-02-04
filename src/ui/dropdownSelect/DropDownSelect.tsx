import React, { FC } from "react";
import s from "./DropDownSelect.module.scss";

interface IDropDown {
  title?: string;
  data: string[];
  className?: number;
  value?: string;
  onChange?: (value: string) => void;
}

const DropDownSelect: FC<IDropDown> = ({
  title,
  data,
  className,
  value,
  onChange,
}) => {
  return (
    <div className={`${s.dropdown}`} style={{ width: `${className}%` }}>
      {title && <label>{title}</label>}
      <select value={value} onChange={(e) => onChange?.(e.target.value)}>
        {data.map((el, idx) => (
          <option key={idx} value={el}>
            {el}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDownSelect;
