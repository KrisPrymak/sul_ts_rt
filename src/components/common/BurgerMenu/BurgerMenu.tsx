import React from 'react';
import style from './BurgerMenu.module.css';

const BurgerMenu = () => {
    return (
        <div className={style.menu}>
            <div className={style.line}></div>
            <div className={style.line}></div>
            <div className={style.line}></div>
        </div>
    );
};

export default BurgerMenu;