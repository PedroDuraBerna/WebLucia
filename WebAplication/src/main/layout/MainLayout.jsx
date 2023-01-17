import { Box } from '@mui/system'
import React from 'react'
import { NavBar, SideBar } from '../components'

export const MainLayout = ({ children }) => {
  return (
    <Box>
      <NavBar></NavBar>
      <SideBar></SideBar>
      {children}
    </Box>
  )
}
