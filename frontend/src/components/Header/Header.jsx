import React from "react";
import "./Header.css";
import "./HeaderButtons.css";
import {NavLink} from 'react-router-dom';

const Header = () => {
  const logout = () => {

  }
  return (
    <header className="header">
      <div className="header__nav">
        <div className="header__logo">
          <NavLink to="/" className="logo__link"/>
        </div>
        <div className="header__buttons">
            <div className="logout__btn">
                <button>Выйти</button>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
