import React from 'react';
import Registration from './Registration';
import {render} from '@testing-library/react'


describe("Registration", () => {
  it("renders correctly", () => {
    const { getByLabelText } = render(<Registration/>)
    expect(getByLabelText('Email*')).toHaveAttribute('name','email')
    expect(getByLabelText('Придумайте пароль*')).toHaveAttribute('name','password')
    expect(getByLabelText('Как вас зовут?*')).toHaveAttribute('name','name')
  })
})