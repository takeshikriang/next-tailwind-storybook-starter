import React from 'react'

export function Button(props: React.ComponentPropsWithoutRef<'button'>) {
  const { ...rest } = props

  return (
    <button
      type="button"
      className="base-transition rounded-md border border-transparent bg-blue-500 py-2 px-6 text-sm font-bold text-white hover:bg-blue-700 focus:outline-none"
      {...rest}
    />
  )
}
