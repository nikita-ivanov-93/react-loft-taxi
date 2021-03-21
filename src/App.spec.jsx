import React from 'react';
import App from './App';
import {render, fireEvent} from '@testing-library/react'

jest.mock('./Home', () => ({Home: () => <div>Home component</div>}))
jest.mock('./About', () => ({About: () => <div>About component</div>}))
jest.mock('./Profile', () => ({Profile: () => <div>Profile component</div>}))


describe("App", () => {
  it("renders correctly", () => {
    const {container} = render(<App/>)
    expect(container.innerHTML).toMatch("Home component")
  })

  describe("when clicked on navigation buttons", () => {
    it("onens the corresponding page", () => {
      const {getByText, container} = render(<App/>);
      fireEvent.click(getByText('About'));
      expect(container.innerHTML).toMatch("About component");
      fireEvent.click(getByText('Profile'));
      expect(container.innerHTML).toMatch("Profile component");
    })
  })
})