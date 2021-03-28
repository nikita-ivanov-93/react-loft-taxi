import React from 'react';
import { Component } from 'react';
import {withAuth} from './Auth'

export class Profile extends Component {
  render() {
    return <p>Profile</p>

  }
}



export const ProfileWithAuth = withAuth(Profile);