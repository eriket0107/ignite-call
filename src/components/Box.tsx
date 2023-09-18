import React, { ElementType, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface BoxProps {
  as?: ElementType
  children: ReactNode
  className?: string
}

const Box = ({
  as: Component = 'div',
  children,
  className,
  ...rest
}: BoxProps) => {
  return (
    <Component
      className={twMerge(
        'rounded-md border border-gray-600 bg-gray-800 p-6',
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  )
}

export default Box
