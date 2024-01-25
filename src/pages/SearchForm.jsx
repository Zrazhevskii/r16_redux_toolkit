import React from 'react';
import '../style/SearchForm.css'

export const SearchForm = () => {
    return (
        <div className='box-form'>
            <form className='form'>
                <input type='text' className='input' name='value' placeholder='Поиск по названию'/>
                <button className='btn-form'>Поиск</button>
            </form>
        </div>
    );
};
