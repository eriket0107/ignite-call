'use client'
import { ElementType, ButtonHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  as?: ElementType
  variant?: 'primary' | 'secondary' | 'tertiary'
  size?: 'sm' | 'md'
  className: string
}

const Button = ({ children, className, ...rest }: ButtonProps) => {
  return (
    <button
      className={twMerge(`all:unset rounded-sm px-4 font-medium`, className)}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
