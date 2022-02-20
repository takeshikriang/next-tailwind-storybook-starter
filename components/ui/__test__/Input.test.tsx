import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import { Input } from 'components/ui'

import * as stories from 'components/ui/__stories__/Input.stories'

const { Component } = composeStories(stories)

describe('Input as imported directly', () => {
  it('renders correct default state and attibutes', () => {
    render(<Input name="email" id="email" type="email" />)
    const input = screen.queryByRole('textbox')

    expect(input).toHaveAttribute('name', 'email')
    expect(input).toHaveAttribute('id', 'email')
    expect(input).toHaveAttribute('type', 'email')
    expect(input).toHaveClass('border-gray-300')
  })

  it('renders correct error state', () => {
    render(<Input errors={{ foo: 'bar' }} name="email" id="email" type="email" />)
    const input = screen.queryByRole('textbox')

    expect(input).toHaveClass('border-red-500')
  })
})

describe('Input when imported as Story', () => {
  it('renders correct default state and attibutes', () => {
    render(<Component name="email" id="email" type="email" />)
    const input = screen.queryByRole('textbox')

    expect(input).toHaveAttribute('name', 'email')
    expect(input).toHaveAttribute('id', 'email')
    expect(input).toHaveAttribute('type', 'email')
    expect(input).toHaveClass('border-gray-300')
  })

  it('renders correct error state', () => {
    render(<Component errors={{ foo: 'bar' }} name="email" id="email" type="email" />)
    const input = screen.queryByRole('textbox')

    expect(input).toHaveClass('border-red-500')
  })
})
