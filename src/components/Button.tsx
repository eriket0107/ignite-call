import React, { ElementType } from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: ElementType
  variant?: 'primary' | 'secondary' | 'tertiary'
  size?: 'sm' | 'md'
  className: string
}

const Button = ({
  children,
  as: Component = 'button',
  variant = 'primary',
  size = 'md',
  className,
  ...rest
}: ButtonProps) => {
  const variants = {
    primary: 'bg-ignite500 hover:bg-ignite300 text-white',
    secondary:
      'border-2 border-ignite500 bg-white text-ignite300 hover:bg-ignite500 hover:text-white',
    tertiary: 'text-gray100 hover:text-white',
  }

  const sizes = {
    sm: 'h-8',
    md: 'h-10',
  }

  return (
    <Component
      className={twMerge(
        `all:unset rounded-sm px-4 font-medium ${variants[variant]} ${sizes[size]}`,
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  )
}

export default Button
