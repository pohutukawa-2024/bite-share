import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { LogIn } from 'lucide-react'
import Persona from '../../components/Persona/Persona'

const headerIterms = [
  { id: 1, name: 'Home', navigateTo: '/' },
  { id: 2, name: 'Matches', navigateTo: '/matches' },
  { id: 3, name: 'About us', navigateTo: '/about' },
  { id: 4, name: 'Contact us', navigateTo: '/contact' },
]

function Header() {
  const { isAuthenticated, loginWithRedirect } = useAuth0()

  function handleLogin() {
    loginWithRedirect({
      authorizationParams: {
        redirect_uri: `${window.location.origin}/`,
      },
    })
  }

  return (
    <nav>
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
              className="transition-colors hover:text-slate-600"
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/kohaPage"
            className="rounded-lg bg-yellow-500 px-4 py-2 text-white transition-colors hover:bg-yellow-500 hover:text-black"
          >
            Support us/ Koha
          </Link>
          {/* Authentication */}
          <section>
            {!isAuthenticated ? (
              <button
                onClick={handleLogin}
                className="flex items-center gap-1 rounded-lg bg-slate-600 px-4 py-2 text-white transition-colors hover:bg-slate-700"
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
