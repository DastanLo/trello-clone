import React, { useState } from "react";
import "./Header.css";
import "./HeaderButtons.css";

const Header = () => {
  const [login, setLogin] = useState(false);
  return (
    <header>
      <div className="header__nav">
        <div className="header__logo">
          <a href="#" className="logo__link"></a>
        </div>
        <div className="header__buttons">
          {login ? (
            <div className="logout__btn">
              <a href="#" onClick={() => setLogin(!login)}>
                <button>Выйти</button>
              </a>
            </div>
          ) : (
            <>
              <div className="signUp__btn">
                <a href="#">
                  <button>Зарегистрироваться</button>
                </a>
              </div>
              <div className="login__btn">
                <a href="#" onClick={() => setLogin(!login)}>
                  <button>Войти</button>
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
