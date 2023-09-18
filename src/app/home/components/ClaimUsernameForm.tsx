'use client'
import Box from '@/components/Box'
import Button from '@/components/Button'
import TextInput from '@/components/TextInput'

import { ArrowRight } from 'phosphor-react'

export const ClaimUsernameForm = () => {
  return (
    <form>
      <Box>
        <TextInput prefix="ignite.com/" placeholder="seu-usuario" />
        <Button
          size="sm"
          type="submit"
          className="flex items-center gap-2 rounded-md"
        >
          Reservar usuário
          <ArrowRight />
        </Button>
      </Box>
    </form>
  )
}
