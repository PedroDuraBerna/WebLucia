import { Divider, Typography } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import { MainLayout } from '../../layout';

export const HomePage = () => {

  return (
    <MainLayout>
      <Typography
        fontWeight='bold'
        variant='h2'
        color='primary'
      >
        Home
      </Typography>
      <Divider
        sx=
        {{
          marginTop: '20px',
          marginBottom: '20px',
        }}
      >
      </Divider>
      <Typography
        marginBottom='20px'
        textAlign='justify'
        variant='body1'
      >
        Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
        Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,
        cuando un impresor (N. del T. persona que se dedica a la imprenta)
        desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un
        libro de textos especimen. No sólo sobrevivió 500 años,
        sino que tambien ingresó como texto de relleno en documentos electrónicos,
        quedando esencialmente igual al original. Fue popularizado en los 60s con la creación
        de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente
        con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
      </Typography>
      <Typography>
        Enlace para logearse en la aplicación web:
      </Typography>
      <NavLink to='../../auth/login' >Login</NavLink>
      <Typography>
        Enlace para registrarsee en la aplicación web:
      </Typography>
      <Typography>
        <NavLink to='../../auth/register' >Registro</NavLink>
      </Typography>
      <Divider
        sx=
        {{
          marginTop: '20px',
          marginBottom: '20px',
        }}
      >
      </Divider>
      <Typography
        fontWeight='bold'
        variant='h4'
        color='primary'
      >
        ¿Qué es Lorem Ipsum?
      </Typography>
      <Typography
        marginBottom='20px'
        textAlign='justify'
        variant='body1'
      >
        Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
        Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,
        cuando un impresor (N. del T. persona que se dedica a la imprenta)
        desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un
        libro de textos especimen. No sólo sobrevivió 500 años,
        sino que tambien ingresó como texto de relleno en documentos electrónicos,
        quedando esencialmente igual al original. Fue popularizado en los 60s con la creación
        de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente
        con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
      </Typography>
      <Typography
        marginBottom='20px'
        textAlign='justify'
        variant='body1'
      >
        Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
        Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,
        cuando un impresor (N. del T. persona que se dedica a la imprenta)
        desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un
        libro de textos especimen. No sólo sobrevivió 500 años,
        sino que tambien ingresó como texto de relleno en documentos electrónicos,
        quedando esencialmente igual al original. Fue popularizado en los 60s con la creación
        de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente
        con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
      </Typography>

    </MainLayout>
  )
}
