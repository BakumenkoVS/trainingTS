import React, { FC } from "react";
import Preloader from "../Preloader/Preloader";
import "./Button.css";

export enum ButtonVariant {
   outlined = "outlined",
   primary = "primary",
}

interface ButtonProps {
   width?: string;
   height?: string;
   name: string;
   type: "submit" | "button";
   variant: ButtonVariant;
   onClick: () => void;
   loading: boolean;
}

const Button: FC<ButtonProps> = ({
   name,
   type,
   variant,
   width,
   height,
   onClick,
   loading,
}) => {
   return (
      <button
         style={{ width, height }}
         className={variant}
         type={type}
         onClick={onClick}
      >
         {loading ? <Preloader /> :  name }
      </button>
   );
};

export default Button;
