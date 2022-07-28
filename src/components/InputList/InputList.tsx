import React, { FC } from "react";
import "./InputList.css";
import Input from "../Input/Input";
import mapPin from "../../images/map-pin.svg";
import calendar from "../../images/calendar.svg";
import moon from "../../images/moon.svg";
import user from "../../images/user.svg";
import Button from "../Button/Button";

const InputList: FC = () => {
   return (
      <form className="InputList">
         <Input img={mapPin} label="Departure city" value="Nizhny Novgorod" />
         <Input
            img={calendar}
            label="Departure period"
            value="17 apr — 17 apr"
         />
         <Input img={moon} label="Number of nights" value="6 — 8" />
         <Input img={user} label="Number of guests" value="2" />
         <div className="button__container">
            <Button design="primary" name="form">
               Search
            </Button>
         </div>
      </form>
   );
};

export default InputList;
