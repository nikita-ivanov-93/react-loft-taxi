import React from 'react';

export const Auth = React.createContext();

export const AuthProvider = ({children}) => {
  const [isLogIn, setIsLogIn] = React.useState(false);

  const logIn = (email, password) => {
    if (email !== "valid@email.com" || password !== "correctpassword") {
      return
    };
    setIsLogIn(true);
  }

  const logOut = () => {
    setIsLogIn(false);
  }

  return (
    <Auth.Provider value={{logIn, logOut, isLogIn}}>
      {children}
    </Auth.Provider>
  )
}

export const withAuth = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return (
        <Auth.Consumer>
          {
            (value) => <WrappedComponent {...value} {...this.props} />
          }
        </Auth.Consumer> 
      )
    }
  }
}