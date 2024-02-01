import { useSelector } from 'react-redux';
import { Item } from '../components/Item';
import '../style/Items.css';

export const Items = () => {
    const items = useSelector((state) => state.items);
    const load = useSelector((state) => state.load);

    if (load.active === true) {
        return (
            <>
                <h3>К сожалению, ничего не нашлось</h3>
            </>
        );
    } else {
        return (
            <div className='items-box'>
                <ul className='items-list'>
                    {items.map((elem) => {
                        return <Item data={elem} key={elem['imdbID']} />;
                    })}
                </ul>
            </div>
        );
    }
};
