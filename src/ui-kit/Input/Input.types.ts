export interface InputProps {
   value?: string | number;
   onChange?: (e:React.ChangeEvent<HTMLInputElement>) => void;
   children?: React.ReactNode;
   placeholder?: string;
   label?: string;
   img?: string;
   type?: string;
   isDate: boolean;
}
