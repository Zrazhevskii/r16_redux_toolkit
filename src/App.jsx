import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { SearchForm } from './pages/SearchForm';
import { Favorites } from './pages/Favorites';
import { MainPages } from './pages/MainPages';

function App() {
    return (
        <div className='main-wrapper'>
            <Routes>
                <Route path='/' element={<Home />} />
                  <Route index element={<MainPages />} />
                  <Route path='favorites_movies' element={<Favorites />} />
                  <Route path='search_form' element={<SearchForm />} />
                <Route />
            </Routes>
        </div>
    );
}

export default App;
