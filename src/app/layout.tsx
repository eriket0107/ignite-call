import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Ignite Call',
  description: 'Schedule your tasks and compromises',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main
          id="main-app"
          className={'min-h-screen bg-gray900 text-gray100 antialiased'}
        >
          {children}
        </main>
      </body>
    </html>
  )
}
