'use client'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import Box from '@/components/Box'
import Text from '@/components/Text'
import Button from '@/components/Button'
import Heading from '@/components/Heading'
import TextInput from '@/components/TextInput'
import { MultiStep } from '@/components/Multistep'

import { ArrowRight } from 'phosphor-react'

const registerFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'Digite um nome válido.' })
    .regex(/^([a-z\\-]+)$/i, { message: 'Apenas letras e hifens' })
    .transform((username) => username.toLowerCase()),
  name: z.string().min(3, { message: 'Nome precisa ter pelo menos 3 letras.' }),
})

type RegisterFormData = z.infer<typeof registerFormSchema>

const Register = () => {
  const { register, handleSubmit, formState } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
  })
  const { isSubmitting, errors } = formState

  const handleRegister = async (data: RegisterFormData) => {
    console.log(data)
  }

  return (
    <main className="h-screen bg-gray900 px-4">
      <div className="mx-auto mb-4 max-w-xl pt-20">
        <header className="px-6">
          <Heading className="leading-relaxed" as={'strong'}>
            Bem-vindo ao Ignite Call!
          </Heading>
          <Text as={'p'} className="mb-6 text-gray200">
            Precisamos de algumas informações para criar seu perfil! Ah, você
            pode editar essas informações depois.
          </Text>

          <MultiStep size={4} currentStep={1} />
        </header>
        <Box.Form
          onSubmit={handleSubmit(handleRegister)}
          className="mt-6 flex flex-col gap-4 border-none border-t-gray-600"
        >
          <label className={'flex flex-col gap-2'}>
            <Text size="sm">Nome de usuário</Text>
            <TextInput.Container classname={'rounded-md px-4 py-3 '}>
              <TextInput.Prefix classname="text-sm p-0">
                ignite.com/
              </TextInput.Prefix>
              <TextInput.Input
                placeholder="seu-usuário"
                {...register('username')}
              />
            </TextInput.Container>

            {errors.username && (
              <Text size="sm" className="text-error">
                <>{errors.username.message}</>
              </Text>
            )}
          </label>

          <label className={'flex flex-col gap-2'}>
            <Text size="sm">Nome completo</Text>
            <TextInput.Container classname="rounded-md px-4 py-3">
              <TextInput.Input placeholder="Seu nome" {...register('name')} />
            </TextInput.Container>

            {errors.name && (
              <Text size="sm" className="text-error">
                <>{errors.name.message}</>
              </Text>
            )}
          </label>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="flex items-center justify-center gap-2 rounded-md bg-ignite600 py-3 transition-all hover:opacity-80 disabled:cursor-not-allowed disabled:bg-ignite600/60"
          >
            Próximo Passo
            <ArrowRight />
          </Button>
        </Box.Form>
      </div>
    </main>
  )
}

export default Register
