import React, { ComponentProps, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

export interface TextInputProps extends ComponentProps<'input'> {
  prefix?: string
  boxStyle?: string
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ prefix, boxStyle, ...props }: TextInputProps, ref) => {
    return (
      <div
        className={twMerge(
          'flex items-center rounded-sm border-2 border-gray-900 bg-gray900',
          boxStyle,
        )}
      >
        {!!prefix && (
          <span className="font-default font-regular p-2 text-sm text-gray400">
            {prefix}
          </span>
        )}
        <input
          ref={ref}
          className="font-default font-regular w-full border-0 bg-transparent text-sm text-white focus:outline-none"
          {...props}
        />
      </div>
    )
  },
)

TextInput.displayName = 'TextInput'

export default TextInput
