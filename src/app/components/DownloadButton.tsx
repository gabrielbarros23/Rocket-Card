'use client'

import { useDownloadImageContext } from '../Hooks/DownloadImageContext'

export function DownloadButton() {
  const { handleDownloadTrigger } = useDownloadImageContext()
  return (
    <div className="flex justify-center items-center">
      <button
        className="h-16 w-72 bg-black border-2 border-zinc-900 rounded-xl"
        onClick={handleDownloadTrigger}
      >
        Download
      </button>
    </div>
  )
}
