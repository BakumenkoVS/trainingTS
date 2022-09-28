export interface CounterProps {
   title: string;
   subTitle: string;
   value: number;
   onChange: (value: number) => void;
   min?: number;
   max?: number;
}
