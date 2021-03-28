import React from 'react';
import { Component } from 'react';
import {withAuth} from './Auth'
import {PropTypes} from 'prop-types'

export class Profile extends Component {
  logout = (e) => {
    e.preventDefault();
    this.props.logOut();
    this.props.navigate("login");
  }

  render() {
    return <p>Profile <button onClick={this.logout}>Выйти</button></p>

  }
}

Profile.propTypes = {
  logOut: PropTypes.func,
  navigate: PropTypes.func,
};


export const ProfileWithAuth = withAuth(Profile);