import { Check } from 'phosphor-react'
import { ComponentProps } from 'react'

export type CheckboxProps = ComponentProps<'div'>

export function Checkbox({ ...props }: CheckboxProps) {
  return (
    <div
      {...props}
      className="flex items-center rounded-sm border-2 border-gray-900 bg-gray-900"
    >
      <div className="font-default font-regular p-2 text-sm text-gray-400">
        <Check weight="bold" />
      </div>
    </div>
  )
}

Checkbox.displayName = 'Checkbox'

export interface MultiStepProps {
  size: number
  currentStep?: number
}

export function MultiStep({ size, currentStep = 1 }: MultiStepProps) {
  return (
    <div className="grid gap-2">
      <label className="text-xs text-gray-200">
        Passo {currentStep} de {size}
      </label>

      <div className="grid-cols-repeat-auto mt-1 grid gap-2">
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => (
          <div
            key={step}
            className={`h-4 rounded bg-gray600 ${
              currentStep >= step ? 'bg-gray100' : ''
            }`}
          ></div>
        ))}
      </div>
    </div>
  )
}
