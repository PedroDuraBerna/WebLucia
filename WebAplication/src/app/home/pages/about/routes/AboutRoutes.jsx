import { Navigate, Route, Routes } from 'react-router-dom';
import { AboutPage } from '../pages/AboutPage';

export const AboutRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<AboutPage />} ></Route>
            <Route path="/*" element={<Navigate to="/home" />} />
        </Routes>
    )
}
