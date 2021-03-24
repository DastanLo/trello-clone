import React from 'react';
import Alert from '../AlertWarning/Alert';
import './AuthForm.css';
const AuthForm = () => {
    return (
        <div className="form">

            <div className="form__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Trello-logo-blue.svg/885px-Trello-logo-blue.svg.png" alt="" />
            </div>
            <div className="form__box">
            <Alert/>
                <h1 className="form__title">Вход в Trello</h1>
                <input className="email__field" type="email" placeholder="Укажите адрес электронной почты" />
                <input className="password__field" type="email" placeholder="Введите пароль" />
                <div className="form__btns">
                    <button className="button__log-in">
                        Войти
                    </button>
                    <button className="button__register">
                        Зарегистрироватся
                    </button>
                </div>
            </div>
        </div>
    )
}
export default AuthForm;