import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage, RegisterPage } from '../pages';

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path='/login/*' element={<LoginPage />} />
      <Route path='/register/*' element={<RegisterPage />} />
      <Route path='/logout/*' element={<Navigate to='/home' />} />
      <Route path='/*' element={<Navigate to='/home' />} />
    </Routes>
  )
}
