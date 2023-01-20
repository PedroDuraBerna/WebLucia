import { Route, Routes } from "react-router-dom";
import { NewsPage } from "../pages";

export const NewsRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<NewsPage />} />
        </Routes>
    )
}
