'use client'

import Image from 'next/image'
import logo from '../../../public/logo.svg'
import { useState } from 'react'
import { useColorContext } from '../Hooks/ColorContext'
import { useUserContext } from '../Hooks/UserContext'

export function ButtonComponent() {
  const [inputUserValue, setInputUserValue] = useState('')
  const { handleColor } = useColorContext()
  const { handleGitHubData } = useUserContext()

  return (
    <div className="space-y-5">
      <div className="flex flex-col  h-auto  w-64 gap-3">
        <p className="flex justify-center text-xl items-center w-full text-center">
          Insira o seu user do github
        </p>
        <div className="flex">
          <input
            className="h-16 bg-black border-y-2 border-l-2 border-zinc-900 rounded-l-xl px-3 w-full  outline-none"
            placeholder="Ex: gabrielbarros23"
            value={inputUserValue}
            onChange={(e) => setInputUserValue(e.target.value)}
          />
          <button
            onClick={() => {
              handleGitHubData(inputUserValue)
              setInputUserValue('')
            }}
            className={`h-16 w-16 flex items-center
              justify-center border-2 border-zinc-900 rounded-r-xl 
              bg-gradient-to-r from-[#680979] to-[#3f0c65]
            `}
          >
            <Image src={logo} alt="Foguete" width={30} />
          </button>
        </div>
      </div>

      <div className="flex flex-col  h-auto  w-64 gap-3">
        <p className="flex justify-center text-xl items-start">
          Customizar RocketCard
        </p>
        <button
          className="h-16 bg-black border-2 border-zinc-900 rounded-xl "
          onClick={handleColor}
        >
          Gerar background
        </button>
      </div>
    </div>
  )
}
