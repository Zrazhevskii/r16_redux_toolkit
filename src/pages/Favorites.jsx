import React from 'react';
import { useSelector } from 'react-redux';
import '../style/Favorites.css';
import { FavoritesItem } from '../components/FavoritesItem';

export const Favorites = () => {
    const favors = useSelector((state) => state.favor);

    if (favors.length === 0) {
        return <h1 className='nofavors'>В избранных пока ничего нет</h1>;
    }

    return (
        <div className='items-box'>
            <h4 className='favors-title'>Избранное:</h4>
            <ul className='items-list'>
                {favors.map((elem) => {
                    return <FavoritesItem data={elem} key={elem['imdbID']}/>;
                })}
            </ul>
        </div>
    );
};
