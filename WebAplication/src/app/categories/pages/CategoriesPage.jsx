import { NavLink } from "react-router-dom";
import { MainLayout } from "../../layout";

export const CategoriesPage = () => {
    return (
        <MainLayout>
            <h1>CategoriesPage</h1>
            <p><NavLink to='/categories/news' >Noticias</NavLink></p>
            <p><NavLink to='/categories/books' >Libros</NavLink></p>
            <p><NavLink to='/categories/films' >Películas</NavLink></p>
            <br />
            <p>El objetivo</p>
        </MainLayout>
    )
}
