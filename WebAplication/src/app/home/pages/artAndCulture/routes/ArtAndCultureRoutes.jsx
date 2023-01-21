import { Navigate, Route, Routes } from "react-router-dom";
import { ArtAndCulturePage } from "../pages";

export const ArtAndCultureRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<ArtAndCulturePage />} />
            <Route path='/*' element={<Navigate to='/home' />} />
        </Routes>
    )
}
