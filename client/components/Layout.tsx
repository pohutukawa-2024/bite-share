import { Outlet } from 'react-router-dom'
import Header from '../Pages/Header/Header'

export default function Layout() {
  return (
    <>
      <body className="mx-auto max-w-7xl">
        <header>
          <Header />
        </header>
        <main>
          <Outlet />
        </main>
        <footer></footer>
      </body>
    </>
  )
}
