import { render, screen } from '@testing-library/react'
import { Input } from 'components/ui'

test('renders correct default state and attibutes', () => {
  render(<Input name="email" id="email" type="email" />)
  const input = screen.queryByRole('textbox')

  expect(input).toHaveAttribute('name', 'email')
  expect(input).toHaveAttribute('id', 'email')
  expect(input).toHaveAttribute('type', 'email')
  expect(input).toHaveClass('border-gray-300')
})

test('renders correct error state', () => {
  render(<Input errors={{ foo: 'bar' }} name="email" id="email" type="email" />)
  const input = screen.queryByRole('textbox')

  expect(input).toHaveClass('border-red-500')
})
