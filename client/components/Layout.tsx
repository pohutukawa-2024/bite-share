import { Outlet } from 'react-router-dom'
import Header from '../Pages/Header/Header'

export default function Layout() {
  return (
    <>
      <header className="yellow text-3xl font-bold ">
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  )
}
