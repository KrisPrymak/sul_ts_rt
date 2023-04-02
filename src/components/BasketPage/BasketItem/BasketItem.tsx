import React, { FC, useState } from 'react';
import { basketItem } from '../../../types/types';
import CountChange from '../../common/CountChange/CountChange';
import Size from '../../common/Size/Size';
import style from './BasketItem.module.css';
import ButtonDelete from '../../common/ButtonDelete/ButtonDelete';

interface BasketItemProps {
    item: basketItem;
    setIsActiveModal: React.Dispatch<React.SetStateAction<boolean>>;
    setItemIdDelete: React.Dispatch<React.SetStateAction<number>>
}

const BasketItem: FC<BasketItemProps> = ({ item, setIsActiveModal, setItemIdDelete }) => {
    let [count, setCount] = useState(item.count)

    const handleDelete = () => {
        setItemIdDelete(item.item.id)
        setIsActiveModal(true)
    }

    return (
        <div className={style.container}>
            <img className={style.img} src={item.item.src} alt="product" />
            <div className={style.info}>
                <Size item={item.item} />
                <h2 className={style.title}>{item.item.title}</h2>
                <p className={style.description}>{item.item.description}</p>
            </div>
            <div className={style.bottom}>
            <CountChange count={count} setCount={setCount} item={item.item}/>
            <p className={style.price}>{item.item.price * item.count} &#8376;</p>
            <ButtonDelete handleDelete={handleDelete}/>
            </div>
        </div>
    );
};

export default BasketItem;
