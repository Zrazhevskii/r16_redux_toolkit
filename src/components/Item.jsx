import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/Items.css';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorMovie } from '../store/FavoritesSlice';
import { addMovie, clearMovie } from '../store/MovieSlice';

export const Item = ({ data }) => {
    const dispatch = useDispatch();
    const favor = useSelector((state) => state.favor);

    const handleClick = () => {
        if (!favor.find((elem) => elem['imdbID'] === data['imdbID'])) {
            dispatch(addFavorMovie(data));
        }
    };

    const handleGetMovie = () => {
        dispatch(clearMovie());

        fetch(`http://www.omdbapi.com/?i=${data['imdbID']}&apikey=64405bd2`)
            .then((response) => response.json())
            .then((item) => dispatch(addMovie(item)))
            .catch((error) => console.error(error));
    };

    return (
        <li className='item'>
            <NavLink
                className='item-link'
                to='/movie_item'
                onClick={handleGetMovie}
            >
                {data['Title']} - {data['Year']}
            </NavLink>
            <button className='btn-item' onClick={handleClick}>
                В избранное
            </button>
        </li>
    );
};
