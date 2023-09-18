import { ElementType, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface HeadingProps {
  children: ReactNode
  as?: ElementType
  size?: 'sm' | 'md' | 'lg' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl'
  className?: string
}

const Heading = ({
  children,
  as: Component = 'h2',
  size = 'md',
  className,
}: HeadingProps) => {
  const sizes = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-4xl',
    '2xl': 'text-5xl',
    '3xl': 'text-6xl',
    '4xl': 'text-7xl',
    '5xl': 'text-8xl',
    '6xl': 'text-9xl',
  }

  return (
    <Component
      className={twMerge(
        `font-$default leading-$shorter m-0 text-gray100 ${sizes[size]}`,
        className,
      )}
    >
      {children}
    </Component>
  )
}

export default Heading
