import React from 'react';
import {AuthProvider, Auth} from './Auth.jsx';
import {render} from '@testing-library/react';
import {act} from 'react-dom/test-utils';


describe("Auth", () => {
  describe("#logIn", () => {
    it("sets 'isLogIn' to false", () => {
      let isLogIn;
      let logIn;

      render(
        <AuthProvider>
          <Auth.Consumer>
            {(value) => {
              isLogIn = value.isLogIn;
              logIn = value.logIn;
              return null;
            }}
          </Auth.Consumer>
        </AuthProvider>
      );

      expect(isLogIn).toBe(false);
      act(() => {
        logIn("valid@email.com", "correctpassword");
      })
      expect(isLogIn).toBe(true);
    });
  });

  describe("#logOut", () => {
    it("sets 'isLogIn' to false", () => {
      let isLogIn;
      let logOut;
      let logIn;

      render(
        <AuthProvider>
          <Auth.Consumer>
            {(value) => {
              logOut = value.logOut;
              logIn = value.logIn;
              isLogIn = value.isLogIn;
              return null;
            }}
          </Auth.Consumer>
        </AuthProvider>
      );

      act(() => {
        logIn("valid@email.com", "correctpassword");
        logOut();
      });

      expect(isLogIn).toBe(false);
    });
  });
});