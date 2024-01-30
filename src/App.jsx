import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { SearchForm } from './pages/SearchForm';
import { Favorites } from './pages/Favorites';
import { Header } from './components/Header';
import { MoveiItem } from './pages/MoveiItem';

function App() {
    return (
        <div className='main-wrapper'>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='movie_item' element={<MoveiItem />} />
                <Route path='favorites_movies' element={<Favorites />} />
                <Route path='search_form' element={<SearchForm />} />
                <Route />
            </Routes>
        </div>
    );
}

export default App;
