import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { mainTheme } from './';

// Componente que se ocupará de la gestión de los temas de mi aplicación
export const AppTheme = ({ children }) => {
    return (
        <ThemeProvider theme={mainTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}