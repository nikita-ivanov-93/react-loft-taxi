import React, { Component } from 'react';
import './Registration.css';
import {withAuth} from './Auth';
import {PropTypes} from 'prop-types'

export class Registration extends Component {
  goToLogin = (e) => {
    e.preventDefault();
    this.props.navigate("login");
  }
  render() {
    return (
      <div className='registration'>
        <form className='registration__form'>
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
            <button onClick={this.goToLogin}>Войти</button>
          </div>
        </form>
      </div>
    );
  }
};

Registration.propTypes = {
  navigate: PropTypes.func,
};

export const RegistrationWithAuth = withAuth(Registration);