import React, {Component} from 'react';
import './App.css';
import {LoginWithAuth} from './Login.jsx';
import {RegistrationWithAuth} from './Registration.jsx';
import {Map} from './Map';
import {ProfileWithAuth} from './Profile';
import {withAuth} from './Auth';
import PropTypes from 'prop-types';

const Pages = {
  login: (props) => <LoginWithAuth {...props}/>,
  registration: (props) => <RegistrationWithAuth {...props}/>,
  map: (props) => <Map {...props}/>,
  profile: (props) => <ProfileWithAuth {...props}/>
}


class App extends Component {

  state = {
    currentPage: 'login'
  };

  navigateTo = (page) => {
    if (this.props.isLogIn) {
      this.setState({currentPage: page})
    } else {
      this.setState({currentPage: "login"})
    }
  }
  render() {
    return (
      <>
        <header>
          <nav>
            <ul>
              <li>
                <button onClick={() => {
                      this.navigateTo("map");
                    }}>
                  Карта
                </button>
              </li>
              <li>
                <button onClick={() => {
                      this.navigateTo("profile");
                    }}>
                  Профиль
                </button>
              </li>
              <li>
                <button onClick={() => {
                      this.navigateTo("login");
                    }}>
                  Выйти
                </button>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <section>
            {Pages[this.state.currentPage]({ navigate: this.navigateTo })}
          </section>
        </main>
      </>
    )
  }
}

App.propTypes = {
  isLogIn: PropTypes.bool
};


export default withAuth(App);
