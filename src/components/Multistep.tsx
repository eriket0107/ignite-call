interface MultiStepProps {
  size: number
  currentStep?: number
}

export function MultiStep({ size, currentStep = 1 }: MultiStepProps) {
  return (
    <div className="bg-gray900">
      <p className="text-xs text-gray200">
        Passo {currentStep} de {size}
      </p>

      <div
        className="grid-cols-repeat mt-1 grid gap-2"
        style={{ gridTemplateColumns: `repeat(${size}, 1fr)` }}
      >
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => (
          <div
            key={step}
            className={`h-1 rounded-sm ${
              currentStep >= step ? 'bg-gray100' : 'bg-gray600'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
