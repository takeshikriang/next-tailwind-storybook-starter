import React from 'react'

interface InputTextProps extends React.ComponentPropsWithoutRef<'input'> {
  register?: unknown
  errors?: unknown
}

export function Input(props: InputTextProps) {
  const { register, errors, ...rest } = props

  return (
    <input
      type="text"
      className={[
        errors ? 'border-red-500' : 'border-gray-300',
        'base-transition w-full rounded border focus:border-blue-500 focus:outline-none'
      ].join(' ')}
      {...register}
      {...rest}
    />
  )
}
