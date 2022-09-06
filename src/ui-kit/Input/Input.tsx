import React, { FC } from "react";
import "./Input.css";
import { InputProps } from "./Input.types";

const Input: FC<InputProps> = ({
   value,
   onChange,
   labels,
   img,
   type,
   onFocus,
   readOnly,
}) => {
   return (
      <section className="InputSection">
         <img src={img} alt="" className="input__img" />
         <div className="InputContainer">
            <label className="Input__label">{labels}</label>
            <input
               value={value}
               type={type}
               onChange={onChange}
               placeholder="введите данные"
               className="input"
               onFocus={onFocus}
               readOnly={readOnly}
            />
         </div>
      </section>
   );
};
export default Input;
