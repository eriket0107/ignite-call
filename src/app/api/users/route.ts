import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { cookies, cookies } from 'next/headers'

export async function POST(req: Request) {
  if (req.method !== 'POST') return NextResponse.json({ status: 405 })
  const body = await req.json()

  const { name, username } = body

  const { set: setCookie } = cookies()

  const usernameExists = await prisma.user.findUnique({ where: { username } })

  if (usernameExists)
    return NextResponse.json(
      { message: 'Username already exists.' },
      { status: 400 },
    )

  const user = await prisma.user.create({
    data: {
      name,
      username,
    },
  })

  setCookie({
    name: 'igniteCall:UserId',
    value: user.id,
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 7 days
  })

  return NextResponse.json({ user }, { status: 201 })
}
