import React from 'react';
import App from './App';
import {render, fireEvent} from '@testing-library/react'

jest.mock('./Login', () => ({Login: () => <div>Вход</div>}))
jest.mock('./Map', () => ({Map: () => <div>Карта</div>}))
jest.mock('./Profile', () => ({Profile: () => <div>Профиль</div>}))


describe("App", () => {
  it("renders correctly", () => {
    const {container} = render(<App/>)
    expect(container.innerHTML).toMatch("Вход")
  })

  describe("when clicked on navigation buttons", () => {
    it("onens the corresponding page", () => {
      const {getByText, container} = render(<App/>);
      fireEvent.click(getByText('Map'));
      expect(container.innerHTML).toMatch("Карта");
      fireEvent.click(getByText('Profile'));
      expect(container.innerHTML).toMatch("Профиль");
    })
  })
})