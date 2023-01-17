import React from 'react'
import { NavLink } from 'react-router-dom'

export const LoginPage = () => {
  return (
    <>
      <h1>LoginPage</h1>
      <p><NavLink to='/home' >Home</NavLink></p>
      <p><NavLink to='/auth/register' >Register</NavLink></p>
    </>
  )
}
