import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface BoxProps {
  children: ReactNode
  className?: string
}

const Box = ({ children, className, ...rest }: BoxProps) => {
  return (
    <div
      className={twMerge(
        'rounded-md border border-gray-600 bg-gray-800 p-6',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  )
}

export default Box
