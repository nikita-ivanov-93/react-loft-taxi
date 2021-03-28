import React, {Component} from 'react';
import './App.css';
import {LoginWithAuth} from './Login.jsx';
import {RegistrationWithAuth} from './Registration.jsx';
import {Map} from './Map';
import {ProfileWithAuth} from './Profile';
import {HeaderWithAuth} from './Header';
import {withAuth} from './Auth';
import PropTypes from 'prop-types';


const Pages = {
  login: (props) => <LoginWithAuth {...props}/>,
  registration: (props) => <RegistrationWithAuth {...props}/>,
  map: (props) => <Map {...props}/>,
  profile: (props) => <ProfileWithAuth {...props}/>,
  header: (props) => <HeaderWithAuth {...props}/>
}


class App extends Component {

  state = {
    currentPage: 'login'
  };

  navigateTo = (page) => {
    if (this.props.isLoggedIn ) {
      this.setState({currentPage: page})
    } else {
      this.setState({currentPage: "login"})
    }
  }

  logout = (e) => {
    e.preventDefault();
    this.props.logOut();
    this.navigateTo("login");
  }

  render() {
    return (
      <main>
        <section>
          {Pages['header']({ navigate: this.navigateTo, logout: this.logout})}
        </section>
        <section>
          {Pages[this.state.currentPage]({ navigate: this.navigateTo })}
        </section>
      </main>
    )
  }
}

App.propTypes = {
  logOut: PropTypes.func,
  isLoggedIn : PropTypes.bool
};


export default withAuth(App);
