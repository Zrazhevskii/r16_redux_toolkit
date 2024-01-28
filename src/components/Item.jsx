import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/Items.css';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorMovie } from '../store/FavoritesSlice';

export const Item = (data) => {
    const favors = useSelector((state) => state.favor)
    const dispatch = useDispatch()

    // console.log(favors)
    const item = data.data;

    const handleClick = () => {
        dispatch(addFavorMovie(item))
    }

    return (
        <li className='item'>
            <NavLink className='item-link' to={'/'}>
                {item['Title']} - {item['Year']}
            </NavLink>
            <button className='btn-item' onClick={handleClick}>В избранное</button>
        </li>
    );
};
