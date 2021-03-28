import React, { Component } from 'react';
import { withAuth } from './Auth';
import './Login.css';
import {PropTypes} from 'prop-types'

export class Login extends Component {
  goToProfile = (e) => {
    e.preventDefault();
    this.props.navigate("profile");
  };
  goToRegistration = (e) => {
    e.preventDefault();
    this.props.navigate("registration");
  }
  isAuth = (e) => {
    e.preventDefault();
    const {email, password} = e.target;
    this.props.logIn(email.value, password.value);
  }
  render() {
    return (
      <>
        {this.props.isLogIn ? (
          <p>
            You are logged in{" "}
            <button onClick={this.goToProfile}>
              go to profile
            </button>
          </p>
        ) : (
        <div className='login'>
          <form className='login__form' onSubmit={this.isAuth}>
            <h3 className='login__title'>Войти</h3>
            <label htmlFor="email">Email:</label>
            <input id='email' type='email' name='email' size='28'/>
            <label htmlFor="password">Пароль:</label>
            <input id='password' type='password' name='password' size='28'/>
            <a href="./Map.jsx">Забыли пароль?</a>
            <button id='login__submit' type='submit'>Войти</button>
            <div>
              <span>Новый пользователь?</span>
              <button onClick={this.goToRegistration}>Регистрация</button>
            </div>
          </form>
        </div>
        )};
      </>
    );
  }
};

Login.propTypes = {
  isLogIn: PropTypes.bool,
  logIn: PropTypes.func,
  navigate: PropTypes.func,
};

export const LoginWithAuth = withAuth(Login);