import React from 'react';
import style from './CatalogNavbar.module.css';
import { categoryList } from '../../../json';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { toCheckedCat } from '../../../store/productSlice';
import { CategoryVariant } from '../../../types/types';

const CatalogNavbar = () => {
    const dispatch = useAppDispatch()
    const checkedCategory = useAppSelector(state => state.productSlice.checkedCategory)

    const handleClick = (item: CategoryVariant) => {
        dispatch(toCheckedCat(item))
    }

    return (
        <ul className={style.container}>
            {categoryList.map((item, index) => {
                return (
                    <button onClick={() => handleClick(item)} className={checkedCategory === item ? style.navLinkChoosed : style.navlink} key={index}>{item}</button>
                )
            })}
            </ul>
    );
};

export default CatalogNavbar;