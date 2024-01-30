import React from 'react';
import { useSelector } from 'react-redux';
import '../style/MovieItem.css';

export const MoveiItem = () => {
    const movies = useSelector((state) => state.movie);

    const [movie] = movies;
    // console.log(movie)
    // console.log(title)
    if (!movie) return;

    // console.log(movie['Poster'])

    return (
        <div className='movie-wrapper'>
            <div className='movie-content'>
                <div className='text-box'>
                    <div className='content-text-box'>
                        <h4 className='content-text'>Название: </h4>
                        <p className='movie-title'>{movie['Title']}</p>
                    </div>
                    <div className='content-text-box'>
                        <h4 className='content-text'>Год -</h4>
                        <p className='movie-title'>{movie['Year']}</p>
                    </div>
                    <div className='content-text-box'>
                        <h4 className='content-text'>Сценаристы -</h4>
                        <p className='movie-title'>{movie['Writer']}</p>
                    </div>
                    <div className='content-text-box'>
                        <h4 className='content-text'>Актеры - </h4>
                        <p className='movie-title'>{movie['Actors']}</p>
                    </div>
                </div>
                <img
                    src={movie['Poster']}
                    alt='Постер'
                    className='movie-image'
                />
            </div>
            <div className='content-text-box'>
                <h4 className='content-text'>Описание: </h4>
                <p className='movie-title'>{movie['Plot']}</p>
            </div>
        </div>
    );
};
