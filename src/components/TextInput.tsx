import React, { ComponentProps, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

export interface TextInputProps extends ComponentProps<'input'> {
  prefix?: string
  prefixStyle?: string
  boxStyle?: string
  inputStyle?: string
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    { prefix, boxStyle, prefixStyle, inputStyle, ...props }: TextInputProps,
    ref,
  ) => {
    return (
      <div
        className={twMerge(
          'flex items-center rounded-sm border-2 border-gray-900 bg-gray900',
          boxStyle,
        )}
      >
        {!!prefix && (
          <span
            className={twMerge(
              'font-default font-regular py-2 pl-2 text-sm text-gray400',
              prefixStyle,
            )}
          >
            {prefix}
          </span>
        )}
        <input
          ref={ref}
          className={twMerge(
            'font-default font-regular w-full border-0 bg-transparent text-sm text-white focus:outline-none',
            inputStyle,
          )}
          {...props}
        />
      </div>
    )
  },
)

TextInput.displayName = 'TextInput'

export default TextInput
