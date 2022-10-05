import React, { useEffect, useState } from "react";
import Counter from "../Counter/Counter";
import { styles } from "./PeopleCounter.styles";

export const PeopleCounter = () => {
   const [adults, setAdults] = useState<number>(0);
   const [children, setChildren] = useState<number>(0);
   const [babies, setBabies] = useState<number>(0);

   const [minAdults, setMinAdults] = useState<number>(0);
   const [maxAdults, setMaxAdults] = useState<number>(15);

   const [minChildren, setMinChildren] = useState<number>(0);
   const [maxChildren, setMaxChildren] = useState<number>(11);

   const [minBabies, setMinBabies] = useState<number>(0);
   const [maxBabies, setMaxBabies] = useState<number>(7);

   const [people, setPeople] = useState<number>();

   useEffect(() => {
      setPeople(adults + children + babies);
      if (adults + children + babies >= 15) {
         setMaxAdults(adults);
         setMaxChildren(children);
         setMaxBabies(babies);
      } else {
         setMaxAdults(15);
         setMaxChildren(11);
         setMaxBabies(7);

         if (adults > 0 && children < 3) {
            setMaxChildren(3);
         } else {
            setMaxChildren(0);
         }

         if (adults > 0 && adults === babies) {
            setMinAdults(babies);
         }

         if (adults > 1 && children >= 3 && children < 6) {
            setMinAdults(2);
            setMaxChildren(6);
         }
         if (adults > 2 && children >= 6 && children < 9) {
            setMinAdults(3);
            setMaxChildren(9);
         }
         if (adults > 3 && children >= 9 && children < 12) {
            setMinAdults(4);
            setMaxChildren(11);
         }

         if (
            adults === 1 &&
            children > 0 &&
            children <= 3 &&
            adults !== babies
         ) {
            setMinAdults(1);
         }

         if (
            adults === 2 &&
            children > 3 &&
            children <= 6 &&
            adults !== babies
         ) {
            setMinAdults(2);
         }
         if (
            adults === 3 &&
            children > 6 &&
            children <= 9 &&
            adults !== babies
         ) {
            setMinAdults(3);
         }

         if (
            adults === 4 &&
            children > 9 &&
            children <= 12 &&
            adults !== babies
         ) {
            setMinAdults(4);
         }

         if (babies + 1 <= adults) {
            setMaxBabies(adults);
         } else {
            setMaxBabies(0);
         }
      }
   }, [adults, children, babies]);

   return (
      <section>
         <h1>{people}</h1>

         <Counter
            title="Взрослые"
            subTitle="Старше 12 лет"
            value={adults}
            min={minAdults}
            max={maxAdults}
            onChange={(number) => {
               setAdults(number);
            }}
         />
         <Counter
            title="Дети"
            subTitle="От 2 до 12"
            value={children}
            min={minChildren}
            max={maxChildren}
            onChange={(number) => {
               setChildren(number);
            }}
         />
         <Counter
            title="Младенцы"
            subTitle="Младше 2 лет"
            value={babies}
            min={minBabies}
            max={maxBabies}
            onChange={(number) => {
               setBabies(number);
            }}
         />
      </section>
   );
};
