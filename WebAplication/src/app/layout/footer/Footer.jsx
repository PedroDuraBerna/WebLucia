import { AppBar, Grid, Typography } from '@mui/material';
import { AppBreadcrumbs } from '../components';

export const Footer = () => {
  return (
    <Grid container >
      <Grid item width='100%' >
        <AppBreadcrumbs></AppBreadcrumbs>
        <AppBar position='static' sx={{ padding: '20px' }} >
          <Typography textAlign='center' variant='caption' >Web creada por Pedro Durá Berná. Todos los derechos reservados. 2023.</Typography>
        </AppBar>
      </Grid>
    </Grid>
  )
}
