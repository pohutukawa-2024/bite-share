import { Outlet } from 'react-router-dom'
import Header from '../Pages/Header/Header'

export default function Layout() {
  return (
    <>
      <header className="mx-auto max-w-7xl">
        <Header />
      </header>
      <main className="mx-auto max-w-3xl">
        <Outlet />
      </main>
      <footer></footer>
    </>
  )
}
