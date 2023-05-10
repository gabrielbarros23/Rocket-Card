import Image from 'next/image'
import logo from '../../../public/logo.svg'
import followers from '../../../public/followers.svg'
import following from '../../../public/following.svg'
import location from '../../../public/location.svg'
import repository from '../../../public/repository.svg'
import company from '../../../public/company.svg'
import { DynamicBackground } from './DynamicBackground'
import { GitHubUserData } from './GitHubUserData'

export function Card() {
  return (
    <DynamicBackground>
      <div className="bg-backgroundColor h-[40rem] rounded-[50px] pt-9 pb-11 px-8 flex flex-col justify-between overflow-hidden">
        <div className="flex items-center gap-5">
          <div className="border rounded-full w-14 h-14 flex items-center justify-center">
            <Image src={logo} alt="logo da RocketSeat" width={30} height={30} />
          </div>

          <GitHubUserData name />
        </div>

        <div className="flex flex-1 relative ">
          <div className="absolute border-[12px] border-purple-800 h-96 w-96 rounded-full top-9 -right-24 flex justify-center">
            <GitHubUserData avatar_url />
          </div>

          <div
            className={`
              w-48 min-h-[9rem] absolute opacity-80 bottom-3 rounded-[3.125rem] flex flex-col pt-6 pr-[5px] pb-6 pl-3
              from-black via-[#464545] to-[#2f2c2c] bg-gradient-to-b text-opacity-100 text-[#FFFFFF]
            `}
          >
            <div className=" w-full h-full flex flex-col gap-[2px] items-start justify-center overflow-hidden">
              <span className="flex gap-2 text-white opacity-100 h-auto items-center ">
                <Image src={followers} alt="Ícone Seguidores" width={20} />
                <GitHubUserData followers />
              </span>

              <span className="flex gap-2 text-white opacity-100 items-center">
                <Image src={following} alt="Ícone Seguindo" width={20} />
                <GitHubUserData following />
              </span>

              <span className="flex gap-2 text-white opacity-100 items-center">
                <Image src={repository} alt="Ícone Repositório" width={20} />
                <GitHubUserData public_repos />
              </span>

              <span className="flex gap-2 text-white opacity-100 items-center">
                <Image src={company} alt="Ícone Empresa" width={20} />
                <GitHubUserData company />
              </span>

              <span className="flex gap-2 text-white opacity-100 items-center">
                <Image src={location} alt="Ícone Localização" width={20} />
                <GitHubUserData location />
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-end items-center gap-2 w-full text-xl">
          <Image src={logo} alt="logo da RocketSeat" width={30} height={30} />

          <h1>ROCKETCARD</h1>
        </div>
      </div>
    </DynamicBackground>
  )
}
