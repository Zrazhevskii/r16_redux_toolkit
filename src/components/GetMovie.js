import React from 'react';
import { addMovie, clearMovie } from '../store/MovieSlice';
import { useDispatch } from 'react-redux';

export const GetMovie = (id) => {
    const dispatch = useDispatch();
    dispatch(clearMovie())

    fetch(`http://www.omdbapi.com/?i=${id}&apikey=64405bd2`)
    .then((response) => response.json())
    .then((item) => dispatch(addMovie(item)))
    .catch((error) => console.error(error));
    console.log(id)

    // return;
};
