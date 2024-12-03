import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { LogIn } from 'lucide-react'
import Persona from '../../components/Persona/Persona'
import useGetNotifications from '../../hooks/useGetNotifications'
import { useEffect, useState } from 'react'

const headerIterms = [
  { id: 1, name: 'Home', navigateTo: '/' },
  { id: 2, name: 'Matches', navigateTo: '/matches' },
  { id: 3, name: 'About us', navigateTo: '/about' },
  { id: 4, name: 'Contact us', navigateTo: '/contact' },
]

function Header() {
  const { data } = useGetNotifications()
  const { user, isAuthenticated, loginWithRedirect } = useAuth0()
  const [notice, setNotice] = useState({ bool: false, num: 0 })

  function handleLogin() {
    loginWithRedirect({
      authorizationParams: {
        redirect_uri: `${window.location.origin}/`,
      },
    })
  }

  useEffect(() => {
    if (data) {
      const newMessages = data.reduce((acc, cv) => {
        if (cv.isRead == false && cv.senderId != user?.sub) {
          return acc + 1
        } else return acc
      }, 0)
      if (newMessages > 0) {
        setNotice(() => {
          return { bool: true, num: newMessages }
        })
      } else {
        setNotice(() => {
          return { bool: false, num: 0 }
        })
      }
    }
  }, [data, user])

  return (
    <nav className="z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500">
            <span className="text-2xl font-bold text-white">B</span>
          </div>
          <h1 className="text-3xl font-extrabold text-gray-800">Bite-Share</h1>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-8 font-semibold text-gray-800">
          {headerIterms.map((item) => (
            <Link
              key={item.id}
              to={item.navigateTo}
              className={`relative transition-colors hover:text-slate-600 `}
            >
              {item.name}
              {/* Notification Dot */}
              {item.name === 'Matches' && notice.bool && (
                <span className="absolute bottom-4 left-16 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                  {notice.num}
                </span>
              )}
            </Link>
          ))}
          {/* <Link
            to="/kohaPage"
            className="px-3 py-2 text-white transition-colors bg-yellow-500 rounded-2xl hover:bg-yellow-500 hover:text-black"
          >
            Support us/ Koha
          </Link> */}

          <Link to="/kohaPage" className="koha-link">
            <span className="koha-text">Koha</span>
            <span className="support-us-text">Support us</span>
          </Link>

          {/* Authentication */}
          <section>
            {!isAuthenticated ? (
              <button
                onClick={handleLogin}
                className="flex items-center gap-1 rounded-lg bg-slate-600 px-4 py-2 text-white transition-colors hover:bg-[#1f2937]"
              >
                <LogIn size={20} />
                Login
              </button>
            ) : (
              <Persona />
            )}
          </section>
        </div>
      </div>
    </nav>
  )
}

export default Header
