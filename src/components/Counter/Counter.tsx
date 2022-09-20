import React, { FC, useEffect } from "react";
import { CounterProps } from "./types";
import { styles } from "./Counter.styles";

const Counter: FC<CounterProps> = ({
   title,
   subTitle,
   value,
   onChange,
   min = 0,
   setButtonIncrease,
   setButtonReduce,
   buttonIncrease,
   buttonReduce,
}) => {
   useEffect(() => {
      if (min >= value) {
         setButtonReduce?.(true);
      } else {
         setButtonReduce?.(false);
      }
   }, [][value]);

   const increase = () => {
      onChange(value + 1);
   };

   const reduce = () => {
      onChange(value - 1);
   };
   return (
      <section>
         <div css={styles.box}>
            <h2>{title}</h2>
            <h2>{subTitle}</h2>
            <button
               css={styles.button}
               onClick={reduce}
               disabled={buttonReduce}
            >
               -
            </button>
            <h3>{value}</h3>
            <button
               css={styles.button}
               onClick={increase}
               disabled={buttonIncrease}
            >
               +
            </button>
         </div>
      </section>
   );
};

export default Counter;
