import React, { FC } from "react";
import "./Header.css";
import menu__logo from "../../images/header_menu_logo.svg";
import menu from "../../images/MENU.svg";
import main_logo from "../../images/main_logo.svg";
import account_logo from "../../images/account_logo.svg";
const Header: FC = () => {
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
         <div className="header__account_ifo">
            <p className="header__account_number">+7 800 855 85 85</p>
            <img src={account_logo} alt="Логотип аккаунта" />
         </div>
      </header>
   );
};

export default Header;
