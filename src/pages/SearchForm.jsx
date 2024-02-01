import React, { useState } from 'react';
import '../style/SearchForm.css';
import { useSelector, useDispatch } from 'react-redux';
import { addValue, clearForm } from '../store/FormSlice';
import { addItem, clearItems } from '../store/ItemsSlice';
import { Items } from './Items';
import { LoaderItem } from '../components/LoaderItem';
import { changeLoadBool } from '../store/LoadNullSlice';

export const SearchForm = () => {
    const formValue = useSelector((state) => state.form);
    const items = useSelector((state) => state.items);
    const load = useSelector((state) => state.load);
    const dispatch = useDispatch();
    const [loadBool, setLoadBool] = useState(false);

    const handleChangeValue = ({ value }) => {
        dispatch(addValue(value));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    console.log(load);

    const handleFetch = () => {
        if (formValue.formValue.length === 0) {
            alert('Заполните поле!');
            return;
        }
        setLoadBool(true);
        dispatch(changeLoadBool(false));

        if (items.length !== 0) {
            dispatch(clearItems(items.length));
        }

        fetch(
            `http://www.omdbapi.com/?s=${formValue.formValue}&apikey=64405bd2`
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data['Response']);
                if (!data || data['Response'] === 'False') {
                    setLoadBool(false);
                    dispatch(changeLoadBool(true));
                } else {
                    data['Search'].map((elem) => {
                        dispatch(addItem(elem));
                        setLoadBool(false);
                    });
                }
            })
            .catch((error) => console.error(error));
        dispatch(clearForm());
    };

    return (
        <div className='box-form'>
            <form className='form' onSubmit={handleSubmit}>
                <input
                    type='text'
                    className='input'
                    name='formValue'
                    placeholder='Поиск по названию (английское название)'
                    value={formValue.formValue}
                    onChange={(e) => handleChangeValue(e.target)}
                />
                <button className='btn-form' onClick={handleFetch}>
                    Поиск
                </button>
            </form>
            {loadBool ? <LoaderItem /> : <Items />}
        </div>
    );
};
