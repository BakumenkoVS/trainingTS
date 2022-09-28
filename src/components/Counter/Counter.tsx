import React, { FC,  } from "react";
import { CounterProps } from "./types";
import { styles } from "./Counter.styles";

const Counter: FC<CounterProps> = ({
   title,
   subTitle,
   value,
   onChange,
   min = 0,
   max = 15,
}) => {
   // useEffect(() => {
   //    if (min >= value) {
   //       setButtonReduce?.(true);
   //    } else {
   //       setButtonReduce?.(false);
   //    }
   // }, [][value]);

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
               disabled={min >= value}
            >
               -
            </button>
            <h3>{value}</h3>
            <button
               css={styles.button}
               onClick={increase}
               disabled={value >= max}
            >
               +
            </button>
         </div>
      </section>
   );
};

export default Counter;
