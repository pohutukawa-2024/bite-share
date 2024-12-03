import { Outlet } from 'react-router-dom'
import Header from '../Pages/Header/Header'
import Footer from '../Pages/Footer/Footer'

export default function Layout() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <header>
        <Header />
      </header>
      <main className="my-8">
        <Outlet />
      </main>
      <footer>{/* <Footer /> */}</footer>
    </div>
  )
}
