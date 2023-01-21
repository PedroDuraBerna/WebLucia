import { Navigate, Route, Routes } from "react-router-dom";
import { TechnologyPage } from "../pages/TechnologyPage";

export const TechnologyRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<TechnologyPage />} />
            <Route path='/*' element={<Navigate to='/home' />} />
        </Routes>
    )
}
