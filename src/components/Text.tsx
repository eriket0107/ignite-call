import { ElementType, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface TextProps {
  children: ReactNode
  as?: ElementType
  size?:
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | '8xl'
    | '9xl'
  className?: string
}

const Text = ({
  as: Component = 'p',
  size = 'md',
  children,
  className,
  ...rest
}: TextProps) => {
  return (
    <Component
      className={twMerge(`font-$default text-gray100 text-${size}`, className)}
      {...rest}
    >
      {children}
    </Component>
  )
}

export default Text
