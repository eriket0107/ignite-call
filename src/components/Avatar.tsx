import { User } from 'phosphor-react'
import { ComponentProps } from 'react'

export type AvatarProps = ComponentProps<'div'>

export const Avatar = (props: AvatarProps) => {
  return (
    <div
      {...props}
      className="inline-block h-16 w-16 overflow-hidden rounded-full"
    >
      {props.children}
    </div>
  )
}

export interface UserInfoProps {
  name: string
  email: string
}

export const UserInfo = ({ name, email }: UserInfoProps) => {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-500">{email}</p>
    </div>
  )
}

export interface UserProfileProps {
  user: UserInfoProps
}

export const UserProfile = ({ user }: UserProfileProps) => {
  return (
    <div className="flex items-center">
      <Avatar>
        <div className="flex h-6 w-6 items-center justify-center bg-gray-600 text-gray-800">
          <User />
        </div>
      </Avatar>
      <UserInfo {...user} />
    </div>
  )
}
