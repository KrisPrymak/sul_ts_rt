import React from 'react';
import logo from '../../media/3.1 Лого Султан RGBlogoSultan.svg';
import Button, { ImgVariant } from '../common/Button/Button';
import SearchInput, { SvgVariant } from '../common/SearchInput/SearchInput';
import ContactItem, { ContactVariant } from '../common/ContactItem/ContactItem';
import style from './Header.module.css';
import CallCenter from './CallCenter/CallCenter';
import Menu from './Menu/Menu';
import Basket from './Basket/Basket';
import { useNavigate } from 'react-router-dom';
import BurgerMenu from '../common/BurgerMenu/BurgerMenu';
import HeaderPart from '../common/HeaderPart/HeaderPart';

const Header = () => {
    const navigate = useNavigate()
    return (
        <div className={style.header}>

            <div className={style.navbar}>
                <div className={style.contacts}>
                    <ContactItem variant={ContactVariant.address} />
                    <ContactItem variant={ContactVariant.email} />
                </div>
                <Menu />
            </div>

            <div className={style.headerbar}>
                <div className={style.headerbar__container}>
                    <div className={style.headerbar__content}>
                        <BurgerMenu />
                        <img className={style.svg} src={logo} alt="logo sultan" />
                        <div className={style.search__buttons}>
                            <Button handleClick={() => navigate('/catalog')} text='Каталог' variant={ImgVariant.catalog} />
                            <SearchInput onClick={() => alert('click')} placeholder='Поиск...' img={SvgVariant.search}/>
                        </div>
                        <CallCenter />
                        <div className={style.pricelist}>
                        <Button text='Прайс-лист' variant={ImgVariant.download} />
                        </div>
                        <Basket />
                    </div>
                    <HeaderPart />
                </div>
            </div>
        </div>
    );
};

export default Header;