import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { MainPage } from '../pages/MainPage';

export const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/home' element={<MainPage />} ></Route>
            <Route path="/*" element={<Navigate to="/home" />} />
        </Routes>
    )
}
