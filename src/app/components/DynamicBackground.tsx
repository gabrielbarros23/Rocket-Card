'use client'
import { useEffect, useRef, useState } from 'react'
import { useColorContext } from '../Hooks/ColorContext'
import { useDownloadImageContext } from '../Hooks/DownloadImageContext'
import html2canvas from 'html2canvas'

export function DynamicBackground({ children }: any) {
  const { colorIndexInPallet } = useColorContext()
  const { downloadTrigger } = useDownloadImageContext()
  const [bgColor, setBgColor] = useState('black')
  const divRef = useRef<HTMLDivElement>(null)

  const handleDownload = async () => {
    if (divRef.current !== null) {
      html2canvas(divRef.current).then((canvas: any) => {
        const imgData = canvas.toDataURL('image/png')

        const downloadLink = document.createElement('a')
        downloadLink.href = imgData
        downloadLink.download = 'Card.png'
        document.body.appendChild(downloadLink)
        downloadLink.click()
        document.body.removeChild(downloadLink)
      })
    }
  }

  useEffect(() => {
    const pallet = [
      'black',
      '#0efe0e',
      '#01d9ff',
      'yellow',
      '#ffa600b3',
      '#6f00ff',
      '#f200a9',
      'red',
      '#382020',
      'White',
    ]

    const color = pallet[colorIndexInPallet]
    setBgColor(color)
  }, [colorIndexInPallet])

  useEffect(() => {
    if (downloadTrigger >= 2) {
      handleDownload()
    }
  }, [downloadTrigger])

  return (
    <div
      style={{ backgroundColor: bgColor }}
      className={`px-4 py-6 rounded-[50px] w-[27rem] overflow-hidden`}
      ref={divRef}
      id="divID"
    >
      {children}
    </div>
  )
}
