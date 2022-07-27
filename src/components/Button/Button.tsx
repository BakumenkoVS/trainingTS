import React, { FC } from "react";
import Preloader from "../Preloader/Preloader";
import "./Button.css";
import { ButtonProps } from "./Button.types";




const Button: FC<ButtonProps> = ({
   name,
   type,
   width,
   height,
   onClick,
   loading,
   children,
   design,
}) => {
   return (
      <button
         style={{ width, height }}
         className={design}
         type={type}
         onClick={onClick}
      >
         {children}
         {loading ? <Preloader /> : name}
      </button>
   );
};

Button.defaultProps = { type: "button", loading: false, name: "Кнопка22" };

export default Button;
