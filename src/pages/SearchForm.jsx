import React from 'react';
import '../style/SearchForm.css';
import { useSelector, useDispatch } from 'react-redux';
import { addValue, clearForm } from '../store/FormSlice';
import { addItem } from '../store/ItemsSlice';

export const SearchForm = () => {
    const formValue = useSelector((state) => state.form);
    const items = useSelector((state) => state.items)
    const dispatch = useDispatch();

    const handleChangeValue = ({ value }) => {
        dispatch(addValue(value));
    };

    // console.log(formValue.formValue);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleFetch = () => {
        fetch(
            `http://www.omdbapi.com/?s=${formValue.formValue}&apikey=64405bd2`
        )
            .then((response) => response.json())
            .then((data) => {
                if (data) {
                    data['Search'].map((elem) => {
                        dispatch(addItem(elem))
                    });
                }
            })
            .catch((error) => console.error(error));
            dispatch(clearForm())
    };

    // console.log(items)

    return (
        <div className='box-form'>
            <form className='form' onSubmit={handleSubmit}>
                <input
                    type='text'
                    className='input'
                    name='formValue'
                    placeholder='Поиск по названию'
                    value={formValue.formValue}
                    onChange={(e) => handleChangeValue(e.target)}
                    required
                />
                <button className='btn-form' onClick={handleFetch}>
                    Поиск
                </button>
            </form>
        </div>
    );
};
