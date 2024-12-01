import { useAuth0 } from '@auth0/auth0-react'
import { LogOut, UserRoundPen, ShoppingBasket } from 'lucide-react'
import { ReactNode, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const getAvatar = (fullName: string) => fullName?.charAt(0).toUpperCase() || '?'

interface NavigationItem {
  name: string
  icon: ReactNode
  path: string
  action: () => void
}

function Persona() {
  const [isOpen, setIsOpen] = useState(false)
  const { logout } = useAuth0()
  const navigate = useNavigate()

  const toggleDropdown = () => setIsOpen((prev) => !prev)

  const closeDropdown = () => setIsOpen(false)

  const navigationItems: NavigationItem[] = [
    {
      name: 'Logout',
      icon: <LogOut size={20} />,
      path: '/',
      action: () => {
        console.log('/')
        // closeDropdown()

        logout({ logoutParams: { returnTo: window.location.origin } })
      },
    },
    {
      name: 'Profile',
      icon: <UserRoundPen size={20} />,
      path: '/profile',
      action: () => {
        console.log('/profile')
        // navigate('/profile')
        closeDropdown()
      },
    },
    {
      name: 'Own Basket',
      icon: <ShoppingBasket size={20} />,
      path: '/ownbasket',
      action: () => {
        console.log('/ownbasket')
        // navigate('/ownbasket')
        closeDropdown()
      },
    },
  ]

  return (
    <div className="relative z-50">
      <button
        onClick={toggleDropdown}
        type="button"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-500 font-semibold text-white transition hover:bg-slate-600"
        title="Open Menu"
      >
        {getAvatar('Harpreet')}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-lg border border-gray-200 bg-white shadow-lg">
          {navigationItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              // onClick={item.action}
              className="flex w-full items-center gap-3 px-4 py-2 text-left text-gray-700 transition hover:bg-gray-100 hover:text-gray-900"
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default Persona
