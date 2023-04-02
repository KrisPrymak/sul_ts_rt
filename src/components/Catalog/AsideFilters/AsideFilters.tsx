import React, { useState } from 'react';
import style from './AsideFilters.module.css';
import PriceFilter from './PriceFilter/PriceFilter';
import ProducerFilter from './ProducerFilter/ProducerFilter';
import { categoryList } from '../../../json';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { addFilter, addMaxPriceFilter, addMinPriceFilter, toCheckedCat} from '../../../store/productSlice';
import { CategoryVariant } from '../../../types/types';
import Button from '../../common/Button/Button';
import ButtonDelete from '../../common/ButtonDelete/ButtonDelete';

const AsideFilters = () => {
    const [minPrice, setMinPrice] = useState('')
    const [maxPrice, setMaxPrice] = useState('')
    const checkedCategory = useAppSelector(state => state.productSlice.checkedCategory)
    const dispatch = useAppDispatch()
    const handleClick = (item: CategoryVariant) => {
        dispatch(toCheckedCat(item))
    }
    const handleDelete = () => {
        setMinPrice('0')
        setMaxPrice('0')
        dispatch(addMaxPriceFilter('0'))
        dispatch(addMinPriceFilter('0'))

    }

    const handleFilter = () => {
        dispatch(addFilter())
    }

    return (
        <div className={style.container}>
            <h3 className={style.filter__title}>Подбор по параметрам</h3>
            <PriceFilter minPrice={minPrice} setMinPrice={setMinPrice} maxPrice={maxPrice} setMaxPrice={setMaxPrice}/>
            <ProducerFilter />
            <div className={style.filterButtons}>
                <Button text='Показать' handleClick={handleFilter} />
                <ButtonDelete handleDelete={handleDelete} />
            </div>
            <div className={style.categories}>
                {categoryList.map((item, index) => {
                    return (
                        <p key={index} onClick={() => handleClick(item)} className={checkedCategory === item ? style.categoryChoosed : style.category}>
                            {item}
                        </p>
                    )
                })}
            </div>
        </div>
    );
};

export default AsideFilters;