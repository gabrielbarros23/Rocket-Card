'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { api } from '../Axios/api'

interface UserContextType {
  handleGitHubData: (user: string) => void
  userData: {
    avatarUrl: string
    name: string
    followers: number
    following: number
    publicRepos: number
    company: string
    location: string
  }
}

const UserContextProvider = createContext<UserContextType>({
  handleGitHubData: () => {},
  userData: {
    avatarUrl: '',
    name: '',
    followers: 0,
    following: 0,
    publicRepos: 0,
    company: '',
    location: '',
  },
})

function CreateUserContext({ children }: any) {
  const [userData, setUserData] = useState({
    avatarUrl: '',
    name: '',
    followers: 0,
    following: 0,
    publicRepos: 0,
    company: '',
    location: '',
  })

  async function handleGitHubData(user: string) {
    try {
      const responseData = await api
        .get(`/${user.toLowerCase()}`)
        .then((response) => response.data)

      const unstructuredData = destructuringData(responseData)

      localStorage.setItem('user', JSON.stringify(unstructuredData))

      setUserData(unstructuredData)
    } catch (error: any) {
      if (error.response) {
        if (error.response.data.message === 'Not Found') {
          alert('usuário não existe')
        }
      } else {
        alert('não foi possível buscar usuário')
      }
    }
  }

  function destructuringData(data: {
    avatar_url: string
    name: string
    followers: number
    following: number
    public_repos: number
    company: string
    location: string
  }) {
    const {
      avatar_url: avatarUrl,
      name,
      followers,
      following,
      public_repos: publicRepos,
      company,
      location,
    } = data
    return {
      avatarUrl,
      name,
      followers,
      following,
      publicRepos,
      company,
      location,
    }
  }

  useEffect(() => {
    const userLocalStorage = localStorage.getItem('user')

    if (userLocalStorage) {
      setUserData(JSON.parse(userLocalStorage))
    } else {
      handleGitHubData('gabrielbarros23')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <UserContextProvider.Provider
      value={{
        handleGitHubData,
        userData,
      }}
    >
      {children}
    </UserContextProvider.Provider>
  )
}

function useUserContext() {
  const context = useContext(UserContextProvider)

  return context
}

export { useUserContext, CreateUserContext }
