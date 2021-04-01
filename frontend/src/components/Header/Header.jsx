import React from "react";
import "./Header.css";
import "./HeaderButtons.css";
import {NavLink} from 'react-router-dom';
import {logout} from '../../store/actions';
import {useDispatch} from 'react-redux';

const Header = () => {
  const dispatch = useDispatch();
  const logoutUser = () => {
    dispatch(logout())
  }
  return (
    <header className="header">
      <div className="header__nav">
        <div className="header__logo">
          <NavLink to="/" className="logo__link"/>
        </div>
        <div className="header__buttons">
            <div className="logout__btn">
                <button onClick={logoutUser}>Выйти</button>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
