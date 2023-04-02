import React from 'react';
import AsideFilters from '../AsideFilters/AsideFilters';
import ItemList from '../ItemList/ItemList';
import style from './MainPartPage.module.css';
import Pagination from '../Pagination/Pagination';

const MainPartPage = () => {
    return (
        <div className={style.mainPartPage}>
            <AsideFilters />
            <div className={style.content}>
            <ItemList />
            <Pagination />
            </div>
        </div>
    );
};

export default MainPartPage;