import React, { FC, useState } from "react";
import "./InputList.css";
import Input from "../../ui-kit/Input/Input";
import mapPin from "../../images/map-pin.svg";
import calendar from "../../images/calendar.svg";
import moon from "../../images/moon.svg";
import user from "../../images/user.svg";
import Button from "../../ui-kit/Button/Button";

const InputList: FC = () => {


   // function handleSubmit(e) {
   //    e.preventDefault();

   // }

   return (
      <form className="InputList">
         <Input img={mapPin} label="Departure city" value="Nizhny Novgorod" isDate={false}/>
         <Input
            img={calendar}
            label="Departure period"
            value="17 apr — 17 apr"
            isDate={true}

         />
         <Input img={moon} label="Number of nights" value="6 — 8" isDate={true}/>
         <Input img={user} label="Number of guests" value="2" isDate={false}/>
         <div className="button__container">
            <Button design="primary" name="form">
               Search
            </Button>
         </div>
      </form>
   );
};

export default InputList;
