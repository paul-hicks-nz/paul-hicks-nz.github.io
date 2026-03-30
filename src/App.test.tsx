import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders welcome message', () => {
    render(<App />)
    expect(screen.getByText(/Welcome to paul-hicks-nz.github.io/i)).toBeInTheDocument()
  })
})
