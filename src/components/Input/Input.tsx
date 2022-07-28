import React, { FC } from "react";
import "./Input.css";
import { InputProps } from "./Input.types";

const Input: FC<InputProps> = ({
   value,
   onChange,
   placeholder,
   label,
   img,
}) => {
   return (
      <section className="InputSection">
         <img src={img} alt="" className="input__img" />
         <div className="InputContainer">
            <label className="Input__label">{label}</label>
            <input
               value={value}
               onChange={onChange}
               placeholder={placeholder}
               className="input"
            />
         </div>
      </section>
   );
};
export default Input;
