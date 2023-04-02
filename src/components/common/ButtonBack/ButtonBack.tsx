import React from 'react';
import style from './ButtonBack.module.css';
import arrow from '../../../media/VectorprevArrow.png'
import { useNavigate } from 'react-router-dom';

const ButtonBack = () => {
    const navigate = useNavigate()
    return (
        <div className={style.container}>
            <button onClick={() => navigate(-1)} className={style.button}> <img src={arrow} alt="arrow" /></button>
            <span className={style.text}>Назад</span>
        </div>
    );
};

export default ButtonBack;