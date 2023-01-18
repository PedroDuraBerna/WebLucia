import { Grid } from '@mui/material';
import { LeftSideBar, NavBar, RightSideBar } from '../components';
import { Footer } from '../views';

export const MainLayout = ({ children }) => {
  return (
    <>
      <NavBar></NavBar>
      <Grid container spacing={1} >
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
