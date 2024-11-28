import { Link } from 'react-router-dom'

const headerIterms = [
  { id: 1, name: 'Home', navigateTo: '/' },
  { id: 2, name: 'Matches', navigateTo: '/matches' },
  { id: 3, name: 'About us', navigateTo: '/about' },
  { id: 4, name: 'Contact us', navigateTo: '/contact' },
]

function Header() {
  return (
    <nav>
      <div>
        <div className="mr-5 mt-2 flex flex-row justify-end gap-7 sm:mt-4 lg:mt-6">
          {headerIterms.map((item) => {
            return (
              <Link key={item.id} to={item.navigateTo!}>
                {item.name}
              </Link>
            )
          })}
          <Link
            to="/kohaPage"
            className="rounded bg-green-500 px-3 py-1 font-bold text-white hover:bg-green-600"
          >
            Suport us/ Koha
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Header
