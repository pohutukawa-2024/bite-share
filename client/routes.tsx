import { createRoutesFromElements, Route } from 'react-router-dom'

import Layout from './components/Layout.tsx'
import HomePage from './Pages/MainPage/HomePage.tsx'
import AboutUs from './Pages/MainPage/AboutUs.tsx'
import ContactUs from './Pages/MainPage/ContactUs.tsx'
import GiverPage from './Pages/MainPage/GiverPage.tsx'
import RequestPage from './Pages/MainPage/RequestPage.tsx'
import MatchesPage from './Pages/MainPage/MatchesPage.tsx'
import ProfilePage from './Pages/User/ProfilePage.tsx'
import OwnBasket from './Pages/User/OwnBasket.tsx'
import KohaPage from './Pages/MainPage/KohaPage.tsx'
import AddProfile from './Pages/Account/AddProfile.tsx'

export default createRoutesFromElements(
  <Route>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="addProfile" element={<AddProfile />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="contact" element={<ContactUs />} />
      <Route path="give" element={<GiverPage />} />
      <Route path="request" element={<RequestPage />} />
      <Route path="matches" element={<MatchesPage />} />
      <Route path="kohaPage" element={<KohaPage />} />
      <Route path="profile/:userid" element={<ProfilePage />} />
      <Route path="profile" element={<ProfilePage />} />
      <Route path="ownbasket/:userid" element={<OwnBasket />} />
    </Route>
  </Route>,
)
