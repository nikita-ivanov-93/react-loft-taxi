import React from 'react';
// import './App.css';
import {Home} from './Home.jsx';
import {About} from './About';
import {Profile} from './Profile';


const Pages = {
  home: <Home/>,
  about: <About/>,
  profile: <Profile/>
}

class App extends React.Component {

  state = {
    currentPage: 'home'
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
            <button onClick={() => {this.navigateTo('home')}}>
              Home
            </button>
          </li>
          <li>
            <button onClick={() => {this.navigateTo('about')}}>
              About
            </button>
          </li>
          <li>
            <button onClick={() => {this.navigateTo('profile')}}>
              Profile
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
