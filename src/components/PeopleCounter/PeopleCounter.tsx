import React, { useEffect, useState } from "react";
import { styles } from "./PeopleCounter.styles";

export const PeopleCounter = () => {
   const [adults, setAdults] = useState<number>(0);
   const [children, setChildren] = useState<number>(0);
   const [babies, setBabies] = useState<number>(0);
   const [buttonIncreaseChildren, setButtonIncreaseChildren] =
      useState<boolean>(true);
   const [buttonReduceChildren, setButtonReduceChildren] =
      useState<boolean>(true);

   useEffect(() => {
      if (adults > 0 && adults < 3) {
         setButtonIncreaseChildren(false);
      } else {
         setButtonIncreaseChildren(true);
      }

      if (children > 0) {
         setButtonReduceChildren(false);
      } else {
         setButtonReduceChildren(true);
      }
   }, [adults, children]);

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

   return (
      <section>
         <div css={styles.box}>
            <h2>Взрослые</h2>
            <button css={styles.button} onClick={reduceAdults}>
               -
            </button>
            <h3>{adults}</h3>
            <button css={styles.button} onClick={increaseAdults}>
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
            <button css={styles.button} onClick={reduceBabies}>
               -
            </button>
            <h3>{babies}</h3>
            <button css={styles.button} onClick={increaseBabies}>
               +
            </button>
         </div>
      </section>
   );
};
