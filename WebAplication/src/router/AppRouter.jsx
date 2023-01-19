import { Navigate, Route, Routes } from 'react-router-dom';
import { AboutRoutes } from '../app/about/routes';
import { AuthRoutes } from '../app/auth/routes';
import { CategoriesRoutes } from '../app/categories/routes';
import { HomeRoutes } from '../app/home/routes';
import { ProfileRoutes } from '../app/profile/routes';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/home/*" element={<HomeRoutes />} />
      <Route path="/profile/*" element={<ProfileRoutes />} />
      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route path="/about/*" element={<AboutRoutes />} />
      <Route path="/categories/*" element={<CategoriesRoutes />} />
      <Route path='/*' element={<Navigate to='/home/*' />} />
    </Routes>
  )
}
