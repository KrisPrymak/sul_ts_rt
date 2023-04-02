import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/redux';
import trolley from '../../../media/VectorshopTrolley.svg';
import { basketItem } from '../../../types/types';
import style from './Basket.module.css';

const Basket = () => {
    const navigate = useNavigate()
    const items = useAppSelector(state => state.basketSlice.items)
    const calcCount = (items: basketItem[]) => {
        let count = 0;
        if (items.length > 0) {
            items.map(a => count += a.count)
        }
        return count;
    }

    const calcPrice = (items: basketItem[]) => {
        let price = 0;
        if (items.length > 0) {
            items.map(a => price += a.item.price * a.count)
        }
        return price;
    }
    return (
        <div className={style.container}>
            <div className={style.trolley__container} onClick={() => navigate('/basketPage')}>
            <img className={style.trolley} src={trolley} alt="trolley" />
            <span className={style.count}>{calcCount(items)}</span>
            </div>
            <div className={style.text}>
                <p className={style.title}>Корзина</p>
                <p className={style.price}>{calcPrice(items)} &#8376;</p>
            </div>
        </div>
    );
};

export default Basket;