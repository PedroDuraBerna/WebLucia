import { Google } from "@mui/icons-material";
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { useMemo } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "../../../hooks";
import { startGoogleSignIn, startLoginWithEmailAndPassword } from "../../../store/auth/thunks";
import { AuthLayout } from "../layout/AuthLayout";
import { NavLink } from 'react-router-dom';

// Inicializamos las variables del formulario aquí afuera ya que dentro puede dar errores de re-renderización
const formData = {
  email: '',
  password: '',
}

export const LoginPage = () => {

  const { status, errorMessage } = useSelector(state => state.auth);

  // Dispatch es el organizador de reducers (funciones que cambian el estado de la información) de REDUX
  const dispatch = useDispatch();

  // Inicializamos las variables del formulario
  const { email, password, onInputChange, formState } = useForm(formData);

  // Con esto memorizamos el estado para dishabilitar los botones de Login
  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  // Tarea asíncrona, ya que necesitamos respuesta de  BBDD. Creamos thunks
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(startLoginWithEmailAndPassword({ email, password }));
  }

  // Tarea asíncrona, ya que necesitamos respuesta de  BBDD. Creamos thunks
  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  }

  return (
    <>
      <h1>LoginPage</h1>
      <p><NavLink to='/home' >Home</NavLink></p>
      <p><NavLink to='/auth/register' >Register</NavLink></p>
      <AuthLayout title="Login">
        <form onSubmit={onSubmit} className="animate__animated animate__fadeIn">
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Correo"
                type="email"
                placeholder="correo"
                fullWidth
                name='email'
                value={email}
                onChange={onInputChange}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Contraseña"
                type="password"
                placeholder="Contraseña"
                fullWidth
                name='password'
                value={password}
                onChange={onInputChange}
              />
            </Grid>
            <Grid container>
              <Grid
                item xs={12}
                sx={{ mt: 2 }}
                display={!!errorMessage ? '' : 'none'}
              >
                <Alert severity="error">
                  {errorMessage}
                </Alert>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} sx={{ mt: 2 }}>
                <Button
                  disabled={isAuthenticating}
                  variant="contained"
                  fullWidth
                  type="submnit"
                >
                  <Typography>Login</Typography>
                </Button>
              </Grid>
              <Grid item xs={12} sm={6} sx={{ mt: 2 }}>
                <Button
                  disabled={isAuthenticating}
                  variant="contained"
                  fullWidth
                  onClick={onGoogleSignIn}
                >
                  <Google />
                  <Typography>oogle</Typography>
                </Button>
              </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="end" sx={{ mt: 2 }}>
              <Link component={RouterLink} color="inherit" to="/auth/register">
                <Typography>Crear una cuenta</Typography>
              </Link>
            </Grid>
          </Grid>
        </form>
      </AuthLayout>
    </>
  )
}
