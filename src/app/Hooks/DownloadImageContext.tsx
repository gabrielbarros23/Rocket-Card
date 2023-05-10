'use client'

import { createContext, useContext, useState } from 'react'

interface DownloadContextType {
  handleDownloadTrigger: () => void
  downloadTrigger: number
}

const DownloadImageContextProvider = createContext<DownloadContextType>({
  handleDownloadTrigger: () => {},
  downloadTrigger: 0,
})

export function CreateDownloadImageContext({ children }: any) {
  const [downloadTrigger, setDownloadTrigger] = useState(1)

  function handleDownloadTrigger() {
    setDownloadTrigger((prevState) => prevState + 1)
  }

  return (
    <DownloadImageContextProvider.Provider
      value={{ handleDownloadTrigger, downloadTrigger }}
    >
      {children}
    </DownloadImageContextProvider.Provider>
  )
}

export function useDownloadImageContext() {
  const context = useContext(DownloadImageContextProvider)

  return context
}
