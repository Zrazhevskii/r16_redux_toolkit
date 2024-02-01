import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deletMovie } from '../store/FavoritesSlice';
import { addMovie, clearMovie } from '../store/MovieSlice';
import PropTypes from 'prop-types';

export const FavoritesItem = ({ data }) => {
    const dispatch = useDispatch();

    const handleClickDelet = (id) => {
        dispatch(deletMovie(id));
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
                {data['Title']} {data['Year']}
            </NavLink>
            <button
                className='btn-item'
                onClick={() => handleClickDelet(data['imdbID'])}
            >
                удалить
            </button>
        </li>
    );
};

FavoritesItem.propTypes = {
    data: PropTypes.shape({
        imdbID: PropTypes.string.isRequired,
        Title: PropTypes.string.isRequired,
        Year: PropTypes.string.isRequired,
    }),
};
