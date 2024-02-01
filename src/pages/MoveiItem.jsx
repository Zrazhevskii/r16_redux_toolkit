import { useSelector } from 'react-redux';
import '../style/MovieItem.css';

export const MoveiItem = () => {
    const movies = useSelector((state) => state.movie);

    const [movie] = movies;
    if (!movie) return;

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
                    <div className='content-text-box'>
                        <h4 className='content-text'>Режиссер -</h4>
                        <p className='movie-title'>{movie['Director']}</p>
                    </div>
                    <div className='content-text-box'>
                        <h4 className='content-text'>Жанр: </h4>
                        <p className='movie-title'>{movie['Genre']}</p>
                    </div>
                    <div className='content-text-box'>
                        <h4 className='content-text runtime'>
                            Продолжительность -
                        </h4>
                        <p className='movie-title'>{movie['Runtime']}</p>
                    </div>
                    <div className='content-text-box'>
                        <h4 className='content-text'>Рейтинг - </h4>
                        <p className='movie-title'>{movie['imdbRating']}</p>
                    </div>
                </div>
                <img
                    src={movie['Poster']}
                    alt='Постер'
                    className='movie-image'
                />
            </div>
            <div className='content-text-box plot'>
                <h4 className='content-text'>Описание: </h4>
                <p className='movie-title'>{movie['Plot']}</p>
            </div>
        </div>
    );
};
