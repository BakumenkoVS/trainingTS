import React, { FC, SetStateAction, useEffect, useState } from "react";
import "./Input.css";
import { InputProps } from "./Input.types";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Input: FC<InputProps> = ({
   value,
   onChange,
   placeholder,
   label,
   img,
   type,
   isDate,
   setInputValue,
   setNumberOfDays,
}) => {
   const [visible, setVisible] = useState(false);
   const [date, setDate] = useState<Date | Date[]>(new Date());

   const Change = (value: Date[]) => {
      function getNumberOfDays(value: Date[]) {
         // One day in milliseconds
         const oneDay = 1000 * 60 * 60 * 24;

         // Calculating the time difference between two dates
         const diffInTime = value[1].getTime() - value[0].getTime();

         // Calculating the no. of days between two dates
         const diffInDays = Math.round(diffInTime / oneDay);

         return diffInDays;
      }

      setNumberOfDays?.(getNumberOfDays(value));

      setDate(value);
      console.log(value);
      const dateInputsValues = value.map((d: Date) => {
         return Intl.DateTimeFormat().format(d).toString();
      });
      setInputValue?.(dateInputsValues);
   
   };

   //const y = x();

   const calendar = visible ? (
      <div className="zz">
         <Calendar onChange={Change} selectRange={true} value={date} />
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
               value={value}
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
