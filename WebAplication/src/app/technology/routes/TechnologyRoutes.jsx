import { Route, Routes } from "react-router-dom";
import { TechnologyPage } from "../pages/TechnologyPage";

export const TechnologyRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<TechnologyPage />} />
        </Routes>
    )
}
