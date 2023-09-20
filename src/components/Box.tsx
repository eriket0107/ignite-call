'use client'
import React, { ComponentProps, ElementType, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface BoxProps {
  as?: ElementType
  children: ReactNode
  className?: string
}

const Container = ({
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

interface BoxFormProps extends ComponentProps<'form'> {
  className?: string
}

const Form = ({ className, ...rest }: BoxFormProps) => {
  return (
    <form
      className={twMerge(
        'rounded-md border border-gray-600 bg-gray-800 p-6',
        className,
      )}
      {...rest}
    />
  )
}

const Box = {
  Container,
  Form,
}

export default Box
