import React, { FC, FormEvent, useEffect, useState } from "react";
import "./InputList.css";
import Input from "../../ui-kit/Input/Input";
import mapPin from "../../images/map-pin.svg";
import moon from "../../images/moon.svg";
import user from "../../images/user.svg";
import Button from "../../ui-kit/Button/Button";
import DatePicker from "../DatePicker/DatePicker";

const InputList: FC = () => {
   const [city, setCity] = useState<string>("");
   const [guests, setGuests] = useState<string>("");
   const [inputValue, setInputValue] = useState<string[]>();
   const [numberOfDays, setNumberOfDays] = useState<number>();

   function handleSubmit(e: FormEvent<HTMLFormElement>) {
      e.preventDefault();
      console.log(city);
      console.log(inputValue);
      console.log(numberOfDays);
      console.log(guests);
   }
   const handleChangeNumberOfDays = (value: Date[]) => {
      function getNumberOfDays(value: Date[]) {
         const oneDay = 1000 * 60 * 60 * 24;

         const diffInTime = value[1].getTime() - value[0].getTime();

         const diffInDays = Math.round(diffInTime / oneDay);

         return diffInDays;
      }

      setNumberOfDays(getNumberOfDays(value));
   };

   const handleChangeCity = (e: React.ChangeEvent<HTMLInputElement>) => {
      setCity(e.target.value);
   };

   const handleChangeGuests = (e: React.ChangeEvent<HTMLInputElement>) => {
      setGuests(e.target.value);
   };

   return (
      <form className="InputList" onSubmit={handleSubmit}>
         <Input
            img={mapPin}
            labels="Departure city"
            value={city}
            isDate={false}
            onChange={handleChangeCity}
         />
         <DatePicker
            handleChangeNumberOfDays={handleChangeNumberOfDays}
            onChange={setInputValue}
            setNumberOfDays={setNumberOfDays}
            value={inputValue}
         />
         <Input
            img={moon}
            labels="Number of nights"
            value={numberOfDays}
            isDate={false}
         />
         <Input
            img={user}
            labels="Number of guests"
            value={guests}
            isDate={false}
            onChange={handleChangeGuests}
         />
         <div className="button__container">
            <Button design="primary" name="form" type="submit">
               Search
            </Button>
         </div>
      </form>
   );
};

export default InputList;
