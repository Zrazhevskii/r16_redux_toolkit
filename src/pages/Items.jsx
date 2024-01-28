import React from 'react';
import { useSelector } from 'react-redux';
import { Item } from '../components/Item';
import '../style/Items.css'

export const Items = () => {
    const items = useSelector((state) => state.items);

    if (items.length === 0) {
        return (
            <>
                <h3>К сожалению никакого контента нет</h3>
            </>
        );
    } else {
        return (
            <div className='items-box'>
                <ul className='items-list'>
                    {items.map((elem) => {
                        return <Item data={elem} key={elem['imdbID']}/>;
                    })}
                </ul>
            </div>
        );
    }
};
