import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../app/auth/routes';
import { HomeRoutes } from '../app/home/routes';
import { useCheckAuth } from "../app/auth/hooks";
import { CheckingAuth } from "../app/ui";
import { } from "../app/ui";

export const AppRouter = () => {

  const status = useCheckAuth();

  if (status === "checking") {
    return <CheckingAuth />;
  }

  return (
    <Routes>
      {
        (status.includes('authenticated') || status === 'always')
          ? <Route path="/home/*" element={<HomeRoutes />} />
          : <Route path="/auth/*" element={<AuthRoutes />} />
      }
      <Route path="/home/*" element={<HomeRoutes />} />
      <Route path='/*' element={<Navigate to='/home/*' />} />
    </Routes>
  )
}
