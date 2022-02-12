import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { Form } from 'components'

const alertMock = jest.spyOn(window, 'alert').mockImplementation()

afterEach(() => {
  jest.resetAllMocks()
})

test('renders component', () => {
  render(<Form />)
  expect(screen.queryByRole('form')).toBeInTheDocument()
})

test('handles submit', async () => {
  render(<Form />)

  // Failure
  fireEvent.click(screen.getByRole('button'))

  await waitFor(() => {
    expect(screen.queryAllByRole('alert')).toHaveLength(1)
    expect(alertMock).not.toHaveBeenCalled()
  })

  // Success
  fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'John Doe' } })
  fireEvent.change(screen.getByLabelText('Position'), { target: { value: 'Dreamer' } })

  await waitFor(() => {
    expect(screen.getByLabelText('Name', { selector: 'input' })).toHaveValue('John Doe')
    expect(screen.getByLabelText('Position', { selector: 'input' })).toHaveValue('Dreamer')
  })

  fireEvent.click(screen.getByRole('button'))

  await waitFor(() => {
    expect(screen.queryAllByRole('alert')).toHaveLength(0)
    expect(alertMock).toHaveBeenCalledTimes(1)
    expect(alertMock).toHaveBeenCalledWith('Form submitted!')
  })
})
