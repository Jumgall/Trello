import React from 'react';
import MainPage from '../components/MainPage';
import LoginPage from '../components/LoginPage';
import { Route, Routes, Navigate } from 'react-router-dom';
import Trello from '../components/Trello';
const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Navigate to={'/header'} />} />
                <Route path='/header' element={<MainPage />} />
                <Route path='/login' element={<LoginPage  />} />
                <Route path='/trello' element={<Trello/>} />
            </Routes>
        </>

    );
};

export default AppRoutes;