'use client'
import { twJoin } from 'tailwind-merge'
interface MultiStepProps {
  size: number
  currentStep: number
  className?: string
}

export function MultiStep({ size, currentStep }: MultiStepProps) {
  return (
    <div className="bg-gray00">
      <p className="text-xs text-gray200">
        Passo {currentStep} de {size}
      </p>

      <div
        className="grid-cols-repeat mt-1 grid gap-2 "
        style={{ gridTemplateColumns: `repeat(${size}, 1fr)` }}
      >
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => (
          <div
            key={step}
            className={twJoin(
              'h-1 rounded-sm  transition-all duration-200',
              currentStep >= step ? 'bg-gray100' : 'bg-gray600',
            )}
          />
        ))}
      </div>
    </div>
  )
}
