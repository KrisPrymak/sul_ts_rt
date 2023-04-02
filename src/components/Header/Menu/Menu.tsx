import React from 'react';
import style from './Menu.module.css';

const Menu = () => {
    return (
        <ul className={style.menu}>
                    <li>
                        <a className={style.menu__link} href="#">О компании</a>
                    </li>
                    <li>
                        <a className={style.menu__link} href="#">Доставка и оплата</a>
                    </li>
                    <li>
                        <a className={style.menu__link} href="#">Возврат</a></li>
                    <li>
                        <a className={style.menu__link} href="#">Контакты</a></li>
                </ul>
    );
};

export default Menu;