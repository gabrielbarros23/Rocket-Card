'use client'

import { createContext, useContext, useEffect, useState } from 'react'

interface ColorContextType {
  colorIndexInPallet: number
  handleColor: () => void
}

const ColorContextProvider = createContext<ColorContextType>({
  colorIndexInPallet: 0,
  handleColor: () => {},
})

export function CreateColorContext({ children }: any) {
  const [colorIndexInPallet, setColorIndexInPallet] = useState(0)

  function handleColor() {
    if (colorIndexInPallet === 9) {
      setColorIndexInPallet(0)
      localStorage.setItem('color', '0')
    } else {
      localStorage.setItem('color', (colorIndexInPallet + 1).toString())
      setColorIndexInPallet((prevState) => prevState + 1)
    }
  }

  useEffect(() => {
    const colorLocalStorage = localStorage.getItem('color')

    if (colorLocalStorage) {
      setColorIndexInPallet(parseInt(colorLocalStorage))
    }
  }, [])

  return (
    <ColorContextProvider.Provider value={{ handleColor, colorIndexInPallet }}>
      {children}
    </ColorContextProvider.Provider>
  )
}

export function useColorContext() {
  const context = useContext(ColorContextProvider)

  return context
}
