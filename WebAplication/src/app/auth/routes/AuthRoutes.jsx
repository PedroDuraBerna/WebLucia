import { Navigate, Route, Routes } from 'react-router-dom';
import { useCheckAuth } from '../hooks';
import { LoginPage, RegisterPage } from '../pages';

export const AuthRoutes = () => {
  const status = useCheckAuth();

  if (status === "checking") {
    return <CheckingAuth />;
  }

  return (
    <Routes>
      <Route path='/*' element={<Navigate to='/home' />} />
      <Route path='/login/*' element={<LoginPage />} />
      <Route path='/register/*' element={<RegisterPage />} />
      <Route path='/*' element={<Navigate to='/home' />} />
    </Routes>
  )
}
