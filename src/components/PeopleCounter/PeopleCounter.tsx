import React, { useEffect, useState } from "react";
import Counter from "../Counter/Counter";
import { styles } from "./PeopleCounter.styles";

export const PeopleCounter = () => {
   const [adults, setAdults] = useState<number>(0);
   const [children, setChildren] = useState<number>(0);
   const [babies, setBabies] = useState<number>(0);
   const [buttonIncreaseChildren, setButtonIncreaseChildren] =
      useState<boolean>(true);
   const [buttonReduceChildren, setButtonReduceChildren] =
      useState<boolean>(false);
   const [buttonIncreaseAdults, setButtonIncreaseAdults] =
      useState<boolean>(false);
   const [buttonReduceAdults, setButtonReduceAdults] = useState<boolean>(false);

   const [buttonIncreaseBabies, setButtonIncreaseBabies] =
      useState<boolean>(true);
   const [buttonReduceBabies, setButtonReduceBabies] = useState<boolean>(false);

   const [people, setPeople] = useState<number>();

   useEffect(() => {
      setPeople(adults + children + babies);
      if (adults + children + babies >= 15) {
         setButtonIncreaseChildren(true);
         setButtonIncreaseAdults(true);
         setButtonIncreaseBabies(true);
      } else {
         setButtonIncreaseChildren(false);
         setButtonIncreaseAdults(false);
         setButtonIncreaseBabies(false);

         if (adults > 0 && children < 3) {
            setButtonIncreaseChildren(false);
         } else {
            setButtonIncreaseChildren(true);
         }

         if (adults > 0 && adults === babies) {
            setButtonReduceAdults(true);
         }

         if (
            (adults > 1 && children >= 3 && children < 6) ||
            (adults > 2 && children >= 6 && children < 9) ||
            (adults > 3 && children >= 9 && children < 12)
         ) {
            setButtonIncreaseChildren(false);
         }

         if (
            (adults === 1 && children > 0 && children <= 3) ||
            (adults === 2 && children > 3 && children <= 6) ||
            (adults === 3 && children > 6 && children <= 9) ||
            (adults === 4 && children > 9 && children <= 12)
         ) {
            debugger;
            setButtonReduceAdults(true);
         } else {
            setButtonReduceAdults(false);
         }

         if (babies === adults && babies > 0) {
            setButtonReduceAdults(true);
         }

         if (babies + 1 <= adults) {
            setButtonIncreaseBabies(false);
            setButtonReduceBabies(false);
         } else {
            setButtonIncreaseBabies(true);
         }

         if (adults > 0 && babies === 0 && children === 0) {
            setButtonReduceAdults(false);
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
            min={0}
            max={15}
            onChange={(number) => {
               setAdults(number);
            }}
            buttonIncrease={buttonIncreaseAdults}
            buttonReduce={buttonReduceAdults}
            setButtonIncrease={setButtonIncreaseAdults}
            setButtonReduce={setButtonReduceAdults}
         />
         <Counter
            title="Дети"
            subTitle="От 2 до 12"
            value={children}
            min={0}
            max={11}
            onChange={(number) => {
               setChildren(number);
            }}
            buttonIncrease={buttonIncreaseChildren}
            buttonReduce={buttonReduceChildren}
            setButtonIncrease={setButtonIncreaseChildren}
            setButtonReduce={setButtonReduceChildren}
         />
         <Counter
            title="Младенцы"
            subTitle="Младше 2 лет"
            value={babies}
            min={0}
            max={7}
            onChange={(number) => {
               setBabies(number);
            }}
            buttonIncrease={buttonIncreaseBabies}
            buttonReduce={buttonReduceBabies}
            setButtonIncrease={setButtonIncreaseBabies}
            setButtonReduce={setButtonReduceBabies}
         />
      </section>
   );
};
