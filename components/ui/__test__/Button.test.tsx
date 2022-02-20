import { composeStories } from '@storybook/testing-react'
import { render, screen } from '@testing-library/react'
import { Button } from 'components/ui'
import * as stories from 'components/ui/__stories__/Button.stories'

const { Component } = composeStories(stories)

// Import Button directly
test('Button renders correctly', () => {
  render(<Button type="submit">Click me</Button>)
  const button = screen.queryByRole('button')

  expect(button).toHaveTextContent('Click me')
  expect(button).toHaveAttribute('type', 'submit')
})

// Import Button as Story
test('Button Story renders correctly', () => {
  render(<Component type="submit" />)
  const button = screen.queryByRole('button')

  expect(button).toHaveTextContent('My Button')
  expect(button).toHaveAttribute('type', 'submit')
})
