import React, { FC, useEffect, useState } from "react";
import calendarImg from "../../images/calendar.svg";
import Input from "../../ui-kit/Input/Input";
import { DatePickerProps } from "./DatePicker.types";
import Calendar from "react-calendar";

const DatePicker: FC<DatePickerProps> = ({
   setInputValue,
   setNumberOfDays,
   inputValue,
}) => {
   const [visible, setVisible] = useState<boolean>(false);
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

   useEffect(() => {
      setVisible(false);
   }, [date]);

   const calendar = visible ? (
      <div className="zz">
         <Calendar onChange={Change} selectRange={true} value={date} />
      </div>
   ) : (
      ""
   );

   const x = () => {
      if (inputValue === undefined) {
         return "";
      } else {
         return `${inputValue[0]} - ${inputValue[1]}`;
      }
   };

const focusHandler = (e : React.FocusEvent<HTMLInputElement>) => {
   setVisible(true)
}

   return (
      <div className="a">
         <Input
            readonly="readonly"
            img={calendarImg}
            label="Departure period"
            value={x()}
            isDate={true}
            setInputValue={setInputValue}
            setNumberOfDays={setNumberOfDays}
            setVisible={focusHandler}
         />
         {calendar}
      </div>
   );
};

export default DatePicker;
