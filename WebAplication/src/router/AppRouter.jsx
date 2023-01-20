import { Navigate, Route, Routes } from 'react-router-dom';
import { AboutRoutes } from '../app/about/routes';
import { AuthRoutes } from '../app/auth/routes';
import { HomeRoutes } from '../app/home/routes';
import { ProfileRoutes } from '../app/profile/routes';
import { ArtAndCultureRoutes } from '../app/artAndCulture/routes';
import { TechnologyRoutes } from '../app/technology/routes';
import { NewsRoutes } from '../app/news/routes';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/home/*" element={<HomeRoutes />} />
      <Route path="/profile/*" element={<ProfileRoutes />} />
      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route path="/about/*" element={<AboutRoutes />} />
      <Route path="/news/*" element={<NewsRoutes />} />
      <Route path="/art_and_culture/*" element={<ArtAndCultureRoutes />} />
      <Route path="/technology/*" element={<TechnologyRoutes />} />
      <Route path='/*' element={<Navigate to='/home/*' />} />
    </Routes>
  )
}
