import { ReactNode } from 'react'
import { Prompt } from 'next/font/google'
import './globals.css'
import { CreateUserContext } from './Hooks/UserContext'
import { CreateColorContext } from './Hooks/ColorContext'
import { CreateDownloadImageContext } from './Hooks/DownloadImageContext'

const prompt = Prompt({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'RocketCard',
  description: 'Um card do github com o seu perfil!',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${prompt.className} bg-backgroundColor flex justify-center items-center text-slate-50 h-screen `}
      >
        <CreateColorContext>
          <CreateDownloadImageContext>
            <CreateUserContext>{children}</CreateUserContext>
          </CreateDownloadImageContext>
        </CreateColorContext>
      </body>
    </html>
  )
}
