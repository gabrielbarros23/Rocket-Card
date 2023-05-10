'use client'

import { useEffect, useState } from 'react'
import { useUserContext } from '../Hooks/UserContext'
import Image from 'next/image'

interface ComponentProps {
  avatar_url?: boolean
  name?: boolean
  followers?: boolean
  following?: boolean
  public_repos?: boolean
  company?: boolean
  location?: boolean
}

interface UserPops {
  avatarUrl: string
  name: string
  followers: number
  following: number
  publicRepos: number
  company: string
  location: string
}

export function GitHubUserData({
  avatar_url: avatarUrl,
  company,
  followers,
  following,
  location,
  name,
  public_repos: publicRepos,
}: ComponentProps) {
  const { userData } = useUserContext()
  const [avatarUrlImage, setAvatarUrlImage] = useState('')
  const [user, setUser] = useState<UserPops>({
    avatarUrl: '',
    name: '',
    followers: 0,
    following: 0,
    publicRepos: 0,
    company: '',
    location: '',
  })

  useEffect(() => {
    if (userData) {
      const userDataProcessed = userData
      if (userData.location === null) {
        userDataProcessed.location = 'Não Definido'
      }
      if (userData.company === null) {
        userDataProcessed.company = 'Nenhum'
      }
      if (userData.name === null) {
        userDataProcessed.name = 'Não Definido'
      }
      setUser(userDataProcessed)
      setAvatarUrlImage(userData.avatarUrl)
    }
  }, [userData])
  return (
    <div>
      {name && <p className="text-2xl ">{user.name}</p>}
      {followers && <p>{user.followers} Seguidores</p>}
      {following && <p>{user.following} Seguindo</p>}
      {location && <p>{user.location}</p>}
      {publicRepos && <p>{user.publicRepos} Repositórios</p>}
      {company && <p> {user.company}</p>}
      {avatarUrl && (
        <Image
          src={`${avatarUrlImage.split('?')[0]}`}
          alt="foto do usuário"
          className=" w-full rounded-full"
          width={500}
          height={500}
        />
      )}
    </div>
  )
}
