import { Navigate, Route, Routes } from "react-router-dom";
import { CategoriesPage } from "../pages/CategoriesPage";
import { NewsView, BooksView, FilmsView } from "../views";

export const CategoriesRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<CategoriesPage />} />
            <Route path='/noticias/*' element={<NewsView />} />
            <Route path='/arte_y_cultura/*' element={<BooksView />} />
            <Route path='/tecnologia/*' element={<FilmsView />} />
            <Route path='/films/*' element={<FilmsView />} />
            <Route path="/*" element={<Navigate to="/home" />} />
        </Routes>
    )
}
