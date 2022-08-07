import React, { FC, useEffect, useState } from "react";
import "./Input.css";
import { InputProps } from "./Input.types";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { deflate } from "zlib";

const Input: FC<InputProps> = ({
   value,
   onChange,
   placeholder,
   label,
   img,
   type,
   isDate,
}) => {
   const [visible, setVisible] = useState(false);
   const [date, setDate] = useState([new Date()]);

   const x = () => {
      if (date.length > 1) {
         return date.map((i) => {
            return Intl.DateTimeFormat().format(i).toString();
         });
      } else {
         return Intl.DateTimeFormat().format(date[1]).toString();
      }
   };

   const y = x();

   const calendar = visible ? (
      <div className="zz">
         <Calendar onChange={setDate} selectRange={true} returnValue="range" />
      </div>
   ) : (
      ""
   );

   useEffect(() => {
      setVisible(false);
   }, [date]);

   return (
      <section className="InputSection">
         <img src={img} alt="" className="input__img" />
         <div className="InputContainer">
            <label className="Input__label">{label}</label>
            <input
               value={isDate ? y : value}
               type={type}
               onChange={onChange}
               placeholder="введите данные"
               className="input"
               onFocus={() => setVisible(true)}
            />
         </div>
         {isDate ? calendar : null}
      </section>
   );
};
export default Input;
