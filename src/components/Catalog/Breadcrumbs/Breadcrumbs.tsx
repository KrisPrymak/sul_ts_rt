import React, { FC } from 'react';
import style from './Breadcrumbs.module.css';
import { useNavigate } from 'react-router-dom';

interface BreadCrumbsProps {
    second?: string;
    third?: string;
}

const Breadcrumbs: FC<BreadCrumbsProps> = ({second, third}) => {
    const navigate = useNavigate()
    const handleClick = () => {
        if (third) {
            navigate('/catalog')
        }
    }

    const handleClickFirst = () => {
        if (second === 'Корзина') {
            navigate('/catalog')
        }
    }
    return (
        <div className={style.breadcrumbs}>
            <span onClick={handleClickFirst} className={second === 'Корзина' ? style.blackClick : style.black}>Главная</span>
            <span onClick={handleClick} className={third ? style.secondBlack : style.secondGrey}>{second}</span>
            <span className={third ? style.third : ''}>{third}</span>
        </div>
    );
};

export default Breadcrumbs;