export interface CounterProps {
   title: string;
   subTitle: string;
   value: number;
   onChange: (value: number) => void;
   min?: number;
   max?: number;
   buttonIncrease?: boolean;
   buttonReduce?: boolean;
   setButtonReduce?: (value: boolean) => void;
   setButtonIncrease?: (value: boolean) => void;
}
