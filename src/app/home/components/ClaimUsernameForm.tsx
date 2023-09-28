'use client'
import { useRouter } from 'next/navigation'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { twJoin } from 'tailwind-merge'

import Box from '@/components/Box'
import TextInput from '@/components/TextInput'
import Button from '@/components/Button'
import Text from '@/components/Text'
import { ArrowRight } from 'phosphor-react'

const claimUsernameSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'Digite um nome válido.' })
    .regex(/^([a-z\\-]+)$/i, { message: 'Apenas letras e hifens' })
    .transform((username) => username.toLowerCase()),
})

type ClaimUsernameFormData = z.infer<typeof claimUsernameSchema>

export const ClaimUsernameForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ClaimUsernameFormData>({
    resolver: zodResolver(claimUsernameSchema),
  })

  const router = useRouter()

  const handleClaimUsername = async (data: ClaimUsernameFormData) => {
    const { username } = data
    await router.push(`/register?username=${username}`)
  }

  return (
    <>
      <Box.Form
        onSubmit={handleSubmit(handleClaimUsername)}
        className={
          'mt-4 flex items-center justify-center gap-2 rounded-md border border-none border-gray-600 bg-gray800 p-6 sm:flex-col'
        }
      >
        <TextInput.Container classname="rounded-md">
          <TextInput.Prefix>ignite.com/</TextInput.Prefix>
          <TextInput.Input
            placeholder="seu-usuário"
            {...register('username')}
            classname="rounded-md"
          />
        </TextInput.Container>
        <Button
          disabled={isSubmitting}
          type="submit"
          className={
            'flex items-center gap-2 rounded-md bg-ignite600 py-3 text-sm outline-none  sm:w-full sm:justify-center '
          }
        >
          Reservar
          <ArrowRight />
        </Button>
      </Box.Form>
      <div>
        <Text
          className={twJoin('mt-2 text-gray400', !errors.username && 'pb-6')}
        >
          {errors.username && errors.username.message}
        </Text>
      </div>
    </>
  )
}
