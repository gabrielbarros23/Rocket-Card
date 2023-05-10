import { Card } from './components/Card'
import { ButtonComponent } from './components/ButtonComponent'
import { DownloadButton } from './components/DownloadButton'

export default function Home() {
  return (
    <main className="flex items-center gap-40">
      <div className="flex flex-col gap-5 ">
        <h1 className="flex justify-center text-xl">
          Compartilhe seu #rocketcard
        </h1>
        <Card />

        <DownloadButton />
      </div>

      <ButtonComponent />
    </main>
  )
}
