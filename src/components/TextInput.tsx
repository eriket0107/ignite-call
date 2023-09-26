/* eslint-disable react/display-name */
import { ComponentProps, ForwardedRef, ReactNode, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

export interface ContainerProps {
  children: ReactNode
  classname?: string
}

const Container = ({ children, classname }: ContainerProps) => (
  <div
    className={twMerge(
      'focus-within:border-ignite600 group flex items-center rounded-sm border-2 border-gray900 bg-gray900 focus-within:border-2',
      classname,
    )}
  >
    {children}
  </div>
)

interface InputProps extends ComponentProps<'input'> {
  classname?: string
}

const Input = forwardRef(
  (
    { classname, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <input
        ref={ref}
        className={twMerge(
          'font-default font-regular w-full border-0 bg-transparent text-sm text-white focus:outline-none',
          classname,
        )}
        {...props}
      />
    )
  },
)

export interface PrefixProps {
  children: ReactNode
  classname?: string
}

const Prefix = ({ children, classname }: PrefixProps) => {
  return (
    <span
      className={twMerge(
        'font-default font-regular py-2 pl-2 text-sm text-gray400',
        classname,
      )}
    >
      {children}
    </span>
  )
}

const TextInput = {
  Container,
  Input,
  Prefix,
}

export default TextInput
