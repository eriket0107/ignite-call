/* eslint-disable react/display-name */
import { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export interface ContainerProps {
  children: ReactNode
  classname?: string
}

const Container = ({ children, classname }: ContainerProps) => (
  <div
    className={twMerge(
      'flex items-center rounded-sm border-4 border-gray-900 bg-gray900',
      classname,
    )}
  >
    {children}
  </div>
)

interface InputProps extends ComponentProps<'input'> {
  classname?: string
}

const Input = ({ classname, ...props }: InputProps) => {
  return (
    <input
      className={twMerge(
        'font-default font-regular w-full border-0 bg-transparent text-sm text-white focus:outline-none',
        classname,
      )}
      {...props}
    />
  )
}

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
