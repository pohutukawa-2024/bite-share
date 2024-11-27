import { createRoutesFromElements, Route } from 'react-router-dom'

import Layout from './components/Layout.tsx'
import HomePage from './components/Pages/MainPage/HomePage.tsx'
import AboutUs from './components/Pages/MainPage/AboutUs.tsx'
import ContactUs from './components/Pages/MainPage/ContactUs.tsx'
import GiverPage from './components/Pages/MainPage/GiverPage.tsx'
import RequestPage from './components/Pages/MainPage/RequestPage.tsx'
import MatchesPage from './components/Pages/MainPage/MatchesPage.tsx'
import ProfilePage from './components/Pages/User/ProfilePage.tsx'
import OwnBasket from './components/Pages/User/OwnBasket.tsx'

export default createRoutesFromElements(
  <Route>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="contact" element={<ContactUs />} />
      <Route path="give" element={<GiverPage />} />
      <Route path="request" element={<RequestPage />} />
      <Route path="matches" element={<MatchesPage />} />
      <Route path="profile/:userid" element={<ProfilePage />} />
      <Route path="ownbasket/:userid" element={<OwnBasket />} />
    </Route>
  </Route>,
)
