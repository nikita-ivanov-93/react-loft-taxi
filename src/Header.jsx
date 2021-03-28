import React from 'react';
import { Component } from 'react';
import { withAuth } from './Auth';

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li>
              <button onClick={() => {this.props.navigate("map")}}>
                Карта
              </button>
            </li>
            <li>
              <button onClick={() => {this.props.navigate("profile")}}>
                Профиль
              </button>
            </li>
            <li>
              <button onClick={this.props.logout}>
                Выйти
              </button>
            </li>
          </ul>
        </nav>
      </header>
    )

  }
}

export const HeaderWithAuth = withAuth(Header);