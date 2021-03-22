import React from 'react';
import './Login.css';

export const Login = () => {
  return (
    <div className='login'>
      <form className='login__form' onSubmit={(e) => {e.preventDefault(); this.navigateTo('map')}}>
        <h3 className='login__title'>Войти</h3>
        <label htmlFor="email">Email:</label>
        <input id='email' type='email' name='email' size='28'/>
        <label htmlFor="password">Пароль:</label>
        <input id='password' type='password' name='password' size='28'/>
        <a href="./Map.jsx">Забыли пароль?</a>
        <button id='login__submit' type='submit'>Войти</button>
        <div>
          <span>Новый пользователь?</span>
          <button onClick={(e) => {
            e.preventDefault();
            this.navigateTo('registration')}}>Регистрация
            </button>
        </div>
      </form>
    </div>
  );
};