import React, { FC } from "react";
import "./Button.css";
import { ButtonProps } from "./Button.types";

const Button: FC<ButtonProps> = ({
   name,
   type = "submit",
   onClick,
   loading = "false",
   children,
   design,
}) => {
   return (
      <button className={design} type={type} onClick={onClick} name={name}>
         {children}
      </button>
   );
};

Button.defaultProps = { type: "button", loading: false, name: "Кнопка22" };

export default Button;
