import { Navigate, Route, Routes } from 'react-router-dom';
import { AboutRoutes } from '../about/routes/AboutRoutes';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { HomeRoutes } from '../home/routes/HomeRoutes';
import { ProfileRoutes } from '../profile/routes/ProfileRoutes';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/home/*" element={<HomeRoutes />} />
      <Route path="/profile/*" element={<ProfileRoutes />} />
      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route path="/about/*" element={<AboutRoutes />} />
      <Route path='/*' element={<Navigate to='/home/*' />} />
    </Routes>
  )
}
