import React from 'react';
import style from './HeaderPart.module.css';
import catalog from '../../../media/Frame 125catalogmobile.svg';
import search from '../../../media/akar-icons_searchsearchmobile.svg';
import { useNavigate } from 'react-router-dom';

const HeaderPart = () => {
    const navigate = useNavigate()
    return (
        <div className={style.headerPart}>
            <div onClick={() => navigate('/catalog')} className={style.part}> <img src={catalog} alt="catalog" /> Каталог</div>
            <div className={style.part}> <img src={search} alt="search" />  Поиск</div>
        </div>
    );
};

export default HeaderPart;