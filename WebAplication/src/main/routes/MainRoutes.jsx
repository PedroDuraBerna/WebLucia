import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AboutPage, MainPage, ProfilePage } from '../pages';



export const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/home' element={<MainPage />} ></Route>
            <Route path='/home/about' element={<AboutPage />} ></Route>
            <Route path='/home/profile' element={<ProfilePage />} ></Route>
            <Route path="/*" element={<Navigate to="/home" />} />
        </Routes>
    )
}
