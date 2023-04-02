import React, { FC } from 'react';
import searchImg from '../../../media/Vectorsearch.svg';
import arrowNext from '../../../media/VectornextArrow.svg';
import style from './SearchInput.module.css';

export enum SvgVariant {
    arrowNext='arrowNext',
    search='search'
}

interface ISearchInput {
    placeholder: string;
    onClick?: () => void;
    img: SvgVariant;
}

const SearchInput: FC<ISearchInput> = ({onClick, placeholder, img}) => {
    return (
        <div className={style.container}>
            <input className={style.input} type="text" placeholder={placeholder}/>
            <button className={style.button}  onClick={onClick}><img src={img === SvgVariant.arrowNext ? arrowNext : searchImg} alt="search" /></button>
        </div>
    );
};

export default SearchInput;