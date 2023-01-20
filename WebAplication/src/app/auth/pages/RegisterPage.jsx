import { useForm } from "../../../hooks";
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startCreatingUserWithEmailAndPassword } from "../../../store/auth";
import { Box } from "@mui/system";

const formData = {
  email: '',
  password: '',
  displayName: '',
}

// Objeto con las validaciones del formulario
const formValidations = {
  email: [(value) => value.includes('@'), 'El correo debe contener un @'],
  password: [(value) => value.length >= 6, 'La contraseña debe tener más de 6 letras'],
  displayName: [(value) => value.length >= 1, 'El nombre debe tener almenos 1 carácter'],
};

export const RegisterPage = () => {

  // Despacho de funciones de registro
  const dispatch = useDispatch();

  // Hook para saber si el formulario ha sido enviado almenos 1 vez
  const [formSubmited, setFormSubmited] = useState(false);

  // Obtenemos información del Store
  const { status, errorMessage } = useSelector(state => state.auth);
  // Memorizamos el status
  const isCheckingAuthentication = useMemo(() => {
    status === 'checking'
  }, [status]);

  // Hook para manejar el formulario
  const { displayName, email, password, onInputChange, formState, isFormValid, displayNameValid, emailValid, passwordValid } = useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmited(true);
    if (!isFormValid) return;
    dispatch(startCreatingUserWithEmailAndPassword(formState));
  }

  return (
    // El Grid lo importamos de material. Es como un DIV pero con propiedades interesantes
    <AuthLayout >
      <Typography variant="h4" color='primary' ><b>Crear una cuenta</b></Typography>
      {/* <h1>Formulario: {isFormValid ? 'Válido' : 'Inválido'}</h1> */}
      <form onSubmit={onSubmit} className="animate__animated animate__fadeIn">
        <Grid container>
          {/* xs = 12 significa que de pantallas pequeñas ( mobile first ) en adelante se ocupa todo lo ancho posible ( 6 sería la mitad ).
            Si ponemos md = 6 también, significa que en pantallas medianas un item ocuparía la mitad de su contenedor */}
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre completo"
              type="text"
              placeholder="Nombre completo"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmited}
              helperText={(formSubmited) ? displayNameValid : ''}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="Correo"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmited}
              helperText={(formSubmited) ? emailValid : ''}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmited}
              helperText={(formSubmited) ? passwordValid : ''}
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
            <Grid item xs={12} sx={{ mt: 2 }}>
              <Button
                disabled={isCheckingAuthentication}
                type="submit"
                variant="contained"
                fullWidth
              >
                <Typography>Crear cuenta</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent='space-between' sx={{ mt: 2 }}>
            {/* Estilo del Link ( material UI ). Hay que poner como atributo del estilo el componente e importarlo, 
              al importarlo tenemos que darle un alias para que no haya coincidencias con el otro Linkl */}
            <Link component={RouterLink} color="inherit" to="/home">
              <Typography>Volver a Digital Space</Typography>
            </Link>
            <Box display='flex'>
              <Typography>¿Ya tienes una cuenta?</Typography>
              <Link component={RouterLink} color="inherit" to="/auth/login" sx={{ ml: 1 }}>
                <Typography>Login</Typography>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </form>
    </AuthLayout >

  )
}
