import { LeftSideBar, NavBar, RightSideBar, Footer } from './';
import { Grid } from '@mui/material';

export const MainLayout = ({ children }) => {

  return (
    <>
      <NavBar></NavBar>
      <Grid container spacing={1} minHeight='70vh'>
        <Grid item xs={1} sm={2} md={3}>
          <LeftSideBar></LeftSideBar>
        </Grid>
        <Grid item xs={10} sm={8} md={6}>
          {children}
        </Grid>
        <Grid item xs={1} sm={2} md={3}>
          <RightSideBar></RightSideBar>
        </Grid>
      </Grid>
      <Footer />
    </>
  )
}
