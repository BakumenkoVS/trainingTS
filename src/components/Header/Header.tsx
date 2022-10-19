import React, { FC } from "react";
import "./Header.css";
import menu__logo from "../../images/header_menu_logo.svg";
import menu from "../../images/MENU.svg";
import main_logo from "../../images/main_logo.svg";
import account_logo from "../../images/account_logo.svg";
import Phone from "../../models/phone";
const Header: FC = () => {
   const formattingNumber = ({ countryCode, number }: Phone) => {
      if (countryCode === "+7") {
         return (
            countryCode +
            "(" +
            number.slice(0, 3) +
            ")" +
            "-" +
            number.slice(3, 6) +
            "-" +
            number.slice(6, 8) +
            "-" +
            number.slice(8)
         );
      } else if (countryCode === "+1") {
         return (
            countryCode +
            "(" +
            number.slice(0, 3) +
            ")" +
            "-" +
            number.slice(3, 6) +
            "-" +
            number.slice(6)
         );
      }
      return "Введен некорректный номер телефона";
   };

   const numberPhone: string = formattingNumber({
      countryCode: "+1",
      number: "8005553535",
   });

   return (
      <header className="header">
         <button className="header__menu">
            <img src={menu__logo} alt="Логотип меню" className="menu__logo" />
            <img src={menu} alt="Надпись меню" className="menu" />
         </button>
         <img
            src={main_logo}
            alt="Главный логотип"
            className="header__main_logo"
         />
         <div className="header__account_info">
            <p className="header__account_number">{numberPhone}</p>
            <img src={account_logo} alt="Логотип аккаунта" />
         </div>
      </header>
   );
};

export default Header;
