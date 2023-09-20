'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import Box from '@/components/Box'
import Button from '@/components/Button'
import TextInput from '@/components/TextInput'

import { ArrowRight } from 'phosphor-react'

const claimUsernameSchema = z.object({
  username: z.string().min(3),
})

type ClaimUsernameFormData = z.infer<typeof claimUsernameSchema>

export const ClaimUsernameForm = () => {
  const { register, handleSubmit } = useForm<ClaimUsernameFormData>({
    resolver: zodResolver(claimUsernameSchema),
  })

  const handleClaimUsername = async (data: ClaimUsernameFormData) => {
    console.log(data)
  }

  return (
    <Box.Form
      onSubmit={handleSubmit(handleClaimUsername)}
      className="mt-4 flex items-center justify-center gap-2 rounded-md border border-none border-gray-600 bg-gray800 p-6 sm:flex-col"
    >
      <TextInput.Container classname={'sm:w-full rounded-md'}>
        <TextInput.Prefix>ignite.com/</TextInput.Prefix>
        <TextInput.Input
          placeholder={'seu-usuário'}
          {...register('username')}
        />
      </TextInput.Container>
      <Button
        type="submit"
        className="flex items-center gap-2 rounded-md bg-ignite500 py-3 text-sm sm:w-full sm:justify-center"
      >
        Reservar
        <ArrowRight />
      </Button>
    </Box.Form>
  )
}
