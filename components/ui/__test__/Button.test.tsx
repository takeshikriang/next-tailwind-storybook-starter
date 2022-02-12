import { render, screen } from '@testing-library/react'
import { Button } from 'components/ui'

test('Button renders correctly', () => {
  render(<Button type="submit">Click me</Button>)
  const button = screen.queryByRole('button')

  expect(button).toHaveTextContent('Click me')
  expect(button).toHaveAttribute('type', 'submit')
})
