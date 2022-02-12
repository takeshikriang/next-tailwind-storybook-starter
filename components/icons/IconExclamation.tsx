// source: https://heroicons.com/

import React from 'react'

export interface IconProps extends React.ComponentPropsWithoutRef<'svg'> {
  className?: string
  strokeWidth?: '1.5' | '2'
}

export function IconExclamation(props: IconProps) {
  const { className = 'stroke-gray-800', strokeWidth = '1.5', ...rest } = props

  return (
    <svg
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
      />
    </svg>
  )
}
