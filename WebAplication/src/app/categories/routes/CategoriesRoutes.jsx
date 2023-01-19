import { Navigate, Route, Routes } from "react-router-dom";
import { CategoriesPage } from "../pages/CategoriesPage";
import { NewsView, BooksView, FilmsView } from "../views";

export const CategoriesRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<CategoriesPage />} />
            <Route path='/news/*' element={<NewsView />} />
            <Route path='/books/*' element={<BooksView />} />
            <Route path='/films/*' element={<FilmsView />} />
            <Route path="/*" element={<Navigate to="/home" />} />
        </Routes>
    )
}
