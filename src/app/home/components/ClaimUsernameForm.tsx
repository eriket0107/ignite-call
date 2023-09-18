'use client'
import Box from '@/components/Box'
import Button from '@/components/Button'
import TextInput from '@/components/TextInput'

import { ArrowRight } from 'phosphor-react'

export const ClaimUsernameForm = () => {
  return (
    <Box
      as="form"
      className="mt-4 flex items-center justify-center gap-2 border-none bg-gray800 sm:flex-col"
    >
      <TextInput
        prefix="ignite.com/"
        placeholder="seu-usuario"
        boxStyle="sm:w-full "
      />
      <Button
        type="submit"
        className="flex items-center gap-2 rounded-md text-sm sm:w-full sm:justify-center"
      >
        Reservar
        <ArrowRight />
      </Button>
    </Box>
  )
}
