import React, { FC, useEffect, useState } from "react";
import calendarImg from "../../images/calendar.svg";
import Input from "../../ui-kit/Input/Input";
import { DatePickerProps } from "./DatePicker.types";
import Calendar from "react-calendar";

const DatePicker: FC<DatePickerProps> = ({
   onChange,
   setNumberOfDays,
   value,

   handleChangeNumberOfDays,
}) => {
   const [visible, setVisible] = useState<boolean>(false);
   const [date, setDate] = useState<Date | Date[]>(new Date());

   const Change = (value: Date[]) => {
      handleChangeNumberOfDays(value);

      setDate(value);

      const dateInputsValues = value.map((d: Date) => {
         return Intl.DateTimeFormat().format(d).toString();
      });
      onChange?.(dateInputsValues);
   };

   useEffect(() => {
      setVisible(false);
   }, [date]);

   const x = () => {
      if (value === undefined) {
         return "";
      } else {
         return `${value[0]} - ${value[1]}`;
      }
   };

   const focusHandler = (e: React.FocusEvent<HTMLInputElement>) => {
      setVisible(true);
   };

   return (
      <div className="a">
         <Input
            readOnly={true}
            img={calendarImg}
            labels="Departure period"
            value={x()}
            isDate={true}
            setNumberOfDays={setNumberOfDays}
            onFocus={focusHandler}
         />
         <div className="zz">
            {visible && (
               <Calendar onChange={Change} selectRange={true} value={date} />
            )}
         </div>
      </div>
   );
};

export default DatePicker;
