import React from 'react';
// import './App.css';
import Login from './Login.jsx';
import {Map} from './Map';
import {Profile} from './Profile';


const Pages = {
  login: <Login/>,
  map: <Map/>,
  profile: <Profile/>
}

class App extends React.Component {

  state = {
    currentPage: 'login'
  }
  navigateTo = (page) => {
    this.setState({currentPage: page})
  }

  render() {
    return <>
    <header>
      <nav>
        <ul>
          <li>
            <button onClick={() => {this.navigateTo('map')}}>
              Карта
            </button>
          </li>
          <li>
            <button onClick={() => {this.navigateTo('profile')}}>
              Профиль
            </button>
          </li>
          <li>
            <button onClick={() => {this.navigateTo('login')}}>
              Выйти
            </button>
          </li>
        </ul>
        <main>
          <section>
            {Pages[this.state.currentPage]}
          </section>
        </main>
      </nav>
    </header>
    </>;
  }
}

export default App;
