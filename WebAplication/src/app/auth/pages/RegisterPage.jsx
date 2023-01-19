import { NavLink } from 'react-router-dom';

export const RegisterPage = () => {
  return (
    <>
      <h1>RegisterPage</h1>
      <p><NavLink to='/home' >Home</NavLink></p>
      <p><NavLink to='/auth/login' >Login</NavLink></p>
    </>
  )
}
