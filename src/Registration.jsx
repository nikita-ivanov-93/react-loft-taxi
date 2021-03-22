import React from 'react';
import './Registration.css';

export const Registration = () => {
  return (
    <div className='registration'>
      <form className='registration__form' onSubmit={(e) => {e.preventDefault(); this.navigateTo('map')}}>
        <h3 className='title'>Регистрация</h3>
        <label htmlFor="email">Email*</label>
        <input id='email' type='email' name='email' size='28'/>
        <label htmlFor="name">Как вас зовут?*</label>
        <input id='name' type='text' name='name' size='28'/>
        <label htmlFor="password">Придумайте пароль*</label>
        <input id='password' type='password' name='password' size='28'/>
        <button type='submit'>Зарегистрироваться</button>
        <div>
          <span>Уже зарегестрированны?</span>
          <button onClick={(e) => {e.preventDefault(); this.navigateTo('login')}}>Войти</button>
        </div>
      </form>
    </div>
  );
};