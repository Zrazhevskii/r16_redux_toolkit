import React from 'react';
import { Outlet } from 'react-router-dom';
import '../style/Home.css';

export const Home = () => {
    return (
        <>
            <div className='main'>
                <h1 className='main-title'>
                    Добро пожаловать в наш кинопоисковик!!!
                </h1>
            </div>
            <Outlet />
        </>
    );
};
