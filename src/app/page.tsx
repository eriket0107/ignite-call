import Image from 'next/image'

import Text from '@/components/Text'
import Heading from '@/components/Heading'

import previewImage from '../assets/app-preview.png'
import { ClaimUsernameForm } from './home/components/ClaimUsernameForm'

export function Home() {
  console.log('teste')

  return (
    <div className="ml-auto flex h-screen max-w-container flex-row items-center gap-24 ">
      <div className="max-w-hero px-6 py-0">
        <Heading className="text-6.5xl leading-6.5xl sm:text-5xl">
          Agendamento descomplicado
        </Heading>
        <Text size="xl" className={'mt-2 text-xl text-gray200 sm:text-base'}>
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </Text>
        <ClaimUsernameForm />
      </div>
      <div className="overflow-hidden pr-8 sm:hidden">
        <Image
          src={previewImage}
          height={400}
          alt="Calendário simbolizando aplicação"
          quality={100}
          priority
          className="max-w-none"
        />
      </div>
    </div>
  )
}

export default Home
