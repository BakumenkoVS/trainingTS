import React, { FC } from "react";
import { CounterProps } from "./types";
import { styles } from "./Counter.styles";

const Counter: FC<CounterProps> = ({title, subTitle, value}) => (
   <section>
      <div css={styles.box}>
         <h2>{title}</h2>
         <button css={styles.button}>-</button>
         <h3>{value}</h3>
         <button css={styles.button}>+</button>
      </div>
   </section>
);

export default Counter;
