
import React from 'react';
import { NavLink } from 'react-router-dom';
import { MainLayout } from '../layout/MainLayout';

export const MainPage = () => {
  return (
    <MainLayout>
      <h1>Home</h1>
      <p><NavLink to="/auth/login" >Login</NavLink></p>
      <p><NavLink to="/auth/Register" >Register</NavLink></p>
    </MainLayout>
  )
}
