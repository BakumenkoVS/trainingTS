import React, { useEffect, useState } from "react";
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
      //Условие при котором если больше 15 все кнопки + диз
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

         if (children > 0) {
            setButtonReduceChildren(false);
         } else {
            setButtonReduceChildren(true);
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

         if (babies === 0) {
            setButtonReduceBabies(true);
         } else {
            setButtonReduceBabies(false);
         }
         if (adults > 0 && babies === 0 && children === 0) {
            debugger;
            setButtonReduceAdults(false);
         }

         //Если все счетчики 0 то все кнопки - диз
         if (adults === 0 && children === 0 && babies === 0) {
            setButtonReduceChildren(true);
            setButtonReduceAdults(true);
            setButtonReduceBabies(true);
         }
      }
   }, [adults, children, babies]);

   const increaseAdults = () => {
      setAdults(adults + 1);
   };

   const reduceAdults = () => {
      setAdults(adults - 1);
   };

   const increaseChildren = () => {
      setChildren(children + 1);
   };

   const reduceChildren = () => {
      setChildren(children - 1);
   };

   const increaseBabies = () => {
      setBabies(babies + 1);
   };

   const reduceBabies = () => {
      setBabies(babies - 1);
   };

   // useEffect(() => {
   //    if (adults + children + babies <= 15) {
   //       debugger;
   //       setButtonIncreaseChildren(false);
   //       setButtonIncreaseAdults(false);
   //    }
   // }, [adults, children, babies]);

   return (
      <section>
         <h1>{people}</h1>
         <div css={styles.box}>
            <h2>Взрослые</h2>
            <button
               css={styles.button}
               onClick={reduceAdults}
               disabled={buttonReduceAdults}
            >
               -
            </button>
            <h3>{adults}</h3>
            <button
               css={styles.button}
               onClick={increaseAdults}
               disabled={buttonIncreaseAdults}
            >
               +
            </button>
         </div>
         <div css={styles.box}>
            <h2>Дети</h2>
            <button
               css={styles.button}
               disabled={buttonReduceChildren}
               onClick={reduceChildren}
            >
               -
            </button>
            <h3>{children}</h3>
            <button
               css={styles.button}
               disabled={buttonIncreaseChildren}
               onClick={increaseChildren}
            >
               +
            </button>
         </div>
         <div css={styles.box}>
            <h2>Младенцы</h2>
            <button
               css={styles.button}
               onClick={reduceBabies}
               disabled={buttonReduceBabies}
            >
               -
            </button>
            <h3>{babies}</h3>
            <button
               css={styles.button}
               onClick={increaseBabies}
               disabled={buttonIncreaseBabies}
            >
               +
            </button>
         </div>
      </section>
   );
};
