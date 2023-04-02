import React from 'react';
import PageTitle from '../common/PageTitle/PageTitle';
import Sort from '../common/Sort/Sort';
import Breadcrumbs from './Breadcrumbs/Breadcrumbs';
import style from './Catalog.module.css';
import CatalogNavbar from './CatalogNavbar/CatalogNavbar';
import MainPartPage from './MainPartPage/MainPartPage';
import ButtonBack from '../common/ButtonBack/ButtonBack';

const Catalog = () => {
    return (
        <div className={style.catalog}>
            <Breadcrumbs second='Красота и здоровье'/>
            <ButtonBack />
            <div className={style.prenav}>
            <PageTitle text='Красота и здоровье'/>
            <Sort /> 
            </div>
            <CatalogNavbar />
            <MainPartPage />
        </div>
    );
};

export default Catalog;