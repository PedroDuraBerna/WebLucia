import { Navigate, Route, Routes } from 'react-router-dom';
import { AboutRoutes } from '../pages/about/routes';
import { ArtAndCultureRoutes } from '../pages/artAndCulture/routes';
import { NewsRoutes } from '../pages/news/routes';
import { ProfileRoutes } from '../pages/profile/routes';
import { TechnologyRoutes } from '../pages/technology/routes';
import { HomePage } from '../pages/HomePage';
import { useCheckAuth } from '../../auth/hooks';
import { CheckingAuth } from '../../ui';

export const HomeRoutes = () => {
    const status = useCheckAuth();
    if (status === 'checking') {
        <CheckingAuth />
    }
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            {
                (status === 'authenticated')
                    ? <Route path="/profile/*" element={<ProfileRoutes />} />
                    : ''
            }
            <Route path="/about/*" element={<AboutRoutes />} />
            <Route path="/news/*" element={<NewsRoutes />} />
            <Route path="/art_and_culture/*" element={<ArtAndCultureRoutes />} />
            <Route path="/technology/*" element={<TechnologyRoutes />} />
            <Route path="/*" element={<Navigate to="/home" />} />
        </Routes>
    )
}
