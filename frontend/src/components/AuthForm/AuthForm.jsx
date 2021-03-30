import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './AuthForm.css';
import {loginUser, registerUser} from '../../store/asyncActions/userActions';
import Alert from '../AlertWarning/Alert';
import {useHistory} from 'react-router';
import {resetError} from '../../store/actions';

const AuthForm = () => {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });
  const dispatch = useDispatch();
  const error = useSelector(state => state.user.error);
  const history = useHistory();
  const inputChangeHandler = (e) => {
    if (error) {
      dispatch(resetError());
    }
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  };
  const register = () => {
    if (!form.password.trim() || !form.username.trim()) {
      return;
    }
    dispatch(registerUser(form, history));
  };
  const login = () => {
    if (!form.password.trim() || !form.username.trim()) {
      return;
    }
    dispatch(loginUser(form, history));
  };
  return (
    <div className="form">
      <div className="form__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Trello-logo-blue.svg/885px-Trello-logo-blue.svg.png"
          alt=""/>
      </div>
      <div className="form__box">
        <h1 className="form__title">Вход в Trello</h1>
        {error ? <Alert text={error}/> : null}
        <input className="email__field"
               name="username"
               onChange={inputChangeHandler}
               placeholder="enter username"/>
        <input className="password__field"
               name="password"
               onChange={inputChangeHandler}
               placeholder="enter password"/>
        <div className="form__btns">
          <button onClick={login} className="button__log-in">
            Войти
          </button>
          <button onClick={register} className="button__register">
            Зарегистрироваться
          </button>
        </div>
      </div>
    </div>
  )
}
export default AuthForm;
