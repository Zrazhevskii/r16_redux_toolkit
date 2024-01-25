import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import '../style/Header.css';

export const Header = () => {
    return (
        <>
            <div className='header-wrapper'>
                <NavLink className='header-text' to='/'>
                    На главную
                </NavLink>
                <NavLink className='header-text' to='/favorites_movies'>
                    Избранное
                </NavLink>
                <NavLink className='header-text' to='/search_form'>
                    Поиск фильмов
                </NavLink>
            </div>
            {/* <Outlet /> */}
        </>
    );
};
