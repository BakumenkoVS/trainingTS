import React, { FC } from "react";
import './Input.css'
interface InputProps {
   value: string;
   onChange: () => void;
   children?: React.ReactChild | React.ReactNode;
   placeholder: string;
}

const Input: FC<InputProps> = ({ value, onChange, children, placeholder }) => {
   return (
      <>
         <input value={value} onChange={onChange} placeholder={placeholder} className='input' />
         {children}
      </>
   );
};
export default Input;
