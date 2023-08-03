/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import React from 'react'
import { render, screen } from '@testing-library/react'

import App from './App'

describe('DOM render', () => {
  it('render App', () => {
    render(<App />)
    expect(screen.getByText('SenFinança')).toBeInTheDocument()
  })
})
