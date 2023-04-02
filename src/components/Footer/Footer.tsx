import React from 'react';
import Button from '../common/Button/Button';
import SearchInput, { SvgVariant } from '../common/SearchInput/SearchInput';
import style from './Footer.module.css';
import { ImgVariant } from '../common/Button/Button';
import logo from '../../media/3.1 Лого Султан RGBlogoWhite.svg';
import visa from './../../media/Visavisa.svg';
import mstrcard from './../../media/Visamastercard.svg';
import whatsapp from '../../media/Group 162whatsapp.svg';
import telegram from '../../media/logos_telegramtelegram.svg';

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.footer__container}>
                <div className={style.logo__block}>
                    <img className={style.logo__img} src={logo} alt="logo" />
                    <p className={style.logo__text}>Компания «Султан» — снабжаем розничные магазины товарами
                        "под ключ" в Кокчетаве и Акмолинской области</p>
                    <p className={style.subscription__title}>Подпишись на скидки и акции</p>
                    <SearchInput placeholder='Введите ваш E-mail' img={SvgVariant.arrowNext}/>
                </div>
               <div className={style.categories}>
               <ul>
                    <h3 className={style.title}>Меню сайта:</h3>
                    <li className={style.listItem}><a href="#">О компании</a></li>
                    <li className={style.listItem}><a href="#">Доставка и оплата</a></li>
                    <li className={style.listItem}><a href="#">Возврат</a></li>
                    <li className={style.listItem}><a href="#">Контакты</a></li>
                </ul>
                <ul>
                    <h3 className={style.title}> Категории:</h3>
                    <li className={style.listItem}><a href="#">Бытовая химия</a></li>
                    <li className={style.listItem}><a href="#">Косметика и гигиена</a></li>
                    <li className={style.listItem}><a href="#">Товары для дома</a></li>
                    <li className={style.listItem}><a href="#">Товары для детей и мам</a></li>
                    <li className={style.listItem}><a href="#">Посуда</a></li>
                </ul>
               </div>
                <div>
                    <h3 className={style.title}>Скачать прайс-лист:</h3>
                    <Button text='Прайс-лист' variant={ImgVariant.download} />
                    <p className={style.socials__title}>Связь в мессенджерах:</p>
                    <div className={style.socials__buttons}>
                        <img src={whatsapp} alt="" />
                        <img src={telegram} alt="" />
                    </div>
                </div>
                <ul>
                    <h3 className={style.title}>Контакты:</h3>
                    <div className={style.callcenter__text}>
                        <p className={style.callcenter__phone}>+7 (777) 490-00-91</p>
                        <p className={style.callcenter__worktime}>время работы: 9:00-20:00</p>
                        <p className={style.callcenter__request}>Заказать звонок</p>
                    </div>
                    <p className={style.email}>opt.sultan@mail.ru</p>
                    <p className={style.connection}>На связи в любое время</p>
                    <div className={style.card__block}>
                        <img src={visa} alt="" />
                        <img src={mstrcard} alt="" />
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Footer;