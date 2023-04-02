import React, { useState } from 'react';
import { useAppSelector } from '../../hooks/redux';
import Breadcrumbs from '../Catalog/Breadcrumbs/Breadcrumbs';
import ModalTemplate from '../common/ModalTemplate/ModalTemplate';
import PageTitle from '../common/PageTitle/PageTitle';
import BasketItem from './BasketItem/BasketItem';
import { useDispatch } from 'react-redux';
import { clearBasket, deleteFromBasket } from '../../store/basketSlice';
import Button from '../common/Button/Button';
import style from './BasketPage.module.css';
import ButtonBack from '../common/ButtonBack/ButtonBack';

const BasketPage = () => {
    const items = useAppSelector(state => state.basketSlice.items)
    const dispatch = useDispatch()
    const [isActiveModal, setIsActiveModal] = useState(false)
    const [isActiveModalOrder, setIsActiveModalOrder] = useState(false)
    const [itemIdDelete, setItemIdDelete] = useState(-1)

    const handleDelete = () => {
        dispatch(deleteFromBasket(itemIdDelete))
        setIsActiveModal(false)
    }

    const checkoutOrder = () => {
        setIsActiveModalOrder(true)
        dispatch(clearBasket())
    }

    return (
        <div>
            {isActiveModal && <ModalTemplate setIsActiveModal={setIsActiveModal} title='Уверены, что хотите удалить?' handelClickTrue={handleDelete}/>}
            {isActiveModalOrder && <ModalTemplate title='Спасибо за заказ' setIsActiveModal={setIsActiveModalOrder}/>}
            <ButtonBack />
            <Breadcrumbs second='Корзина'/>
            <PageTitle text='Корзина'/>
            <div className={style.list}>
            {items.map(item => {
                return (
                    <BasketItem key={item.item.id} item={item} setIsActiveModal={setIsActiveModal} setItemIdDelete={setItemIdDelete}/>
                )
            })}
            </div>
            <div className={style.button}>
            <Button disabled={items.length === 0} handleClick={checkoutOrder} text='Оформить заказ'/>
            </div>
        </div>
    );
};

export default BasketPage;