import React, { FC } from "react";
import "./Input.css";
import { InputProps } from "./Input.types";

const Input: FC<InputProps> = ({ value, onChange, placeholder, label }) => {
   return (
      <>
         <input
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="input"
         />
         <label>{label}</label>
      </>
   );
};
export default Input;
