import { CircularProgress } from "@mui/material";
import { Grid } from "@mui/material";

// Este componente será una vista para tener una pantalla de carga
export const CheckingAuth = () => {
    return (
        <Grid
            container
            spaicing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            // Con el sx tenemos acceso a los temas que hemos creado nosotros
            sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}>

            <Grid
                container
                direction='row'
                justifyContent='center'
            >
                <CircularProgress color="warning" />
            </Grid>
        </Grid>
    )
}
