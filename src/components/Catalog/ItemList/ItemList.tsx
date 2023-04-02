import React from 'react';
import { useAppSelector } from '../../../hooks/redux';
import ProductItem from './ProductItem/ProductItem';
import style from './ItemList.module.css';
import Pagination from '../Pagination/Pagination';

const ItemList = () => {
    let list = useAppSelector(state => state.productSlice.list)

    return (
        <div className={style.container}>
            {list.map(item => {
                return (
                    <ProductItem key={item.id} item={item}/>
                )
            })}
        </div>
    );
};

export default ItemList;