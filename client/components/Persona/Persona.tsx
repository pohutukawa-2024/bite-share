import { useAuth0 } from '@auth0/auth0-react'
import { LogOut } from 'lucide-react'
import { ReactNode, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const getAvatar = (fullName: string) => {
  if (fullName === '' || fullName === undefined || fullName.length === 0) return
  const value = fullName.substring(0, 1)
  return value
}

interface navigatationItems {
  name: string
  link?: string
  icon?: ReactNode
  onClick?: () => void
}

function Persona() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const navigate = useNavigate()

  const { isAuthenticated, logout, loginWithRedirect } = useAuth0()

  function handleLogin() {
    loginWithRedirect({
      authorizationParams: {
        redirect_uri: `${window.location.origin}/`,
      },
    })
  }

  function handleLogout() {
    console.log('cilcked')
    logout({ logoutParams: { returnTo: window.location.origin } })
  }

  const handlePersonaClick = () => {
    setIsOpen(!isOpen)
  }

  const handleNavigate = (link: string) => {
    if (!link) return
    navigate(link)
    setIsOpen(false)
  }
  const items: navigatationItems[] = [
    {
      name: 'Logout',
      link: '',
      icon: <LogOut size={16} />,
      onClick: handleLogout,
    },
    { name: 'Profile', link: '/' },
    { name: 'Own Basket', link: '/' },
  ]
  return (
    <div className="relative">
      <button
        onClick={handlePersonaClick}
        type="button"
        className="w flex h-8 w-8 items-center justify-center rounded-full bg-gray-300 text-center font-bold text-black"
      >
        {getAvatar('Harpreet')}
      </button>
      {isOpen ? (
        <div className="absolute right-2  top-8 z-10 flex flex-col gap-4 border shadow-lg">
          {items.map((item: navigatationItems, index: number) => {
            return (
              <button
                onClick={() =>
                  item.onClick ? item.onClick() : handleNavigate(item.link!)
                }
                key={index}
                className="w-full whitespace-nowrap px-6 py-2 hover:bg-slate-300"
              >
                <span className="flex items-center">
                  {item.icon} <span className="ml-2">{item.name}</span>
                </span>
              </button>
            )
          })}
        </div>
      ) : null}
    </div>
  )
}

export default Persona
