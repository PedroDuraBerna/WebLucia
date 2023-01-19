import { Grid, Typography } from "@mui/material";

// Este componente se ocupa de manejar los estilos a reutilizar en el componente
export const AuthLayout = ({ children, title = '' }) => {
    return (
        <Grid
            container
            spaicing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            // Con el sx tenemos acceso a los temas que hemos creado nosotros
            sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}>

            <Grid item
                className="box-shadow"
                // Esto quiere decir que en pantallas pequeñas va a tener 3 posiciones
                xs={3}
                sx={{
                    width: { md: 450 },
                    backgroundColor: 'white',
                    padding: 3,
                    borderRadius: 2
                }}>

                <Typography variant="h5" >{title}</Typography>

                {children}

            </Grid>
        </Grid>
    )
}
