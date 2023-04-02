import React, { FC } from 'react';
import style from './PriceFilter.module.css';
import { useAppDispatch } from '../../../../hooks/redux';
import { addMaxPriceFilter, addMinPriceFilter } from '../../../../store/productSlice';

interface PriceFilterProps {
    minPrice: string;
    setMinPrice: React.Dispatch<React.SetStateAction<string>>;
    maxPrice: string;
    setMaxPrice: React.Dispatch<React.SetStateAction<string>>;
}

const PriceFilter: FC<PriceFilterProps> = ({ minPrice, setMinPrice, maxPrice, setMaxPrice }) => {

    const dispatch = useAppDispatch()

    const handleChangeMax = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMaxPrice(e.target.value)
        dispatch(addMaxPriceFilter(e.target.value))
    }
    const handleChangeMin = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMinPrice(e.target.value)
        dispatch(addMinPriceFilter(e.target.value))
    }
    return (
        <div className={style.container}>
            <h4 className={style.title}><span className={style.title__text}>Цена</span> &#8376;</h4>
            <div className={style.filter}>
                <input type="number" value={minPrice} onChange={handleChangeMin} className={style.input} placeholder='0' />
                <p>-</p>
                <input type="number" value={maxPrice} onChange={handleChangeMax} className={style.input} placeholder='10 000' />
            </div>
        </div>
    );
};

export default PriceFilter;