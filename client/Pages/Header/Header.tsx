import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { LogIn, Menu, X } from 'lucide-react'
import Persona from '../../components/Persona/Persona'
import { useState } from 'react'

const headerItems = [
  { id: 1, name: 'Home', navigateTo: '/' },
  { id: 2, name: 'Matches', navigateTo: '/matches' },
  { id: 3, name: 'About us', navigateTo: '/about' },
  { id: 4, name: 'Contact us', navigateTo: '/contact' },
]

function Header() {
  const { isAuthenticated, loginWithRedirect } = useAuth0()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function handleLogin() {
    loginWithRedirect({
      authorizationParams: {
        redirect_uri: `${window.location.origin}/`,
      },
    })
  }

  return (
    <nav className="relative z-50  ">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500">
            <span className="text-2xl font-bold text-white">B</span>
          </div>
          <h1 className="text-3xl font-extrabold text-gray-800">Bite-Share</h1>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-8 font-semibold text-gray-800 lg:flex">
          {headerItems.map((item) => (
            <Link
              key={item.id}
              to={item.navigateTo}
              className="transition-colors hover:text-slate-600"
            >
              {item.name}
            </Link>
          ))}
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

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="block text-gray-800 focus:outline-none lg:hidden"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Links */}
      <div
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } absolute left-0 top-full z-40 w-full flex-col rounded-xl bg-white p-6 shadow-lg lg:static lg:hidden lg:w-auto lg:flex-row lg:items-center lg:gap-8 lg:shadow-none`}
      >
        {headerItems.map((item) => (
          <Link
            key={item.id}
            to={item.navigateTo}
            className="py-2 text-gray-800 hover:text-slate-600"
          >
            {item.name}
          </Link>
        ))}
        <Link
          to="/kohaPage"
          className="py-2 text-gray-800 hover:text-slate-600"
        >
          Koha / Support us
        </Link>

        {/* Authentication */}
        <section className="mt-4">
          {!isAuthenticated ? (
            <button
              onClick={handleLogin}
              className="w-full rounded-lg bg-slate-600 px-4 py-2 text-white transition-colors hover:bg-[#1f2937]"
            >
              Login
            </button>
          ) : (
            <Persona />
          )}
        </section>
      </div>
    </nav>
  )
}

export default Header
