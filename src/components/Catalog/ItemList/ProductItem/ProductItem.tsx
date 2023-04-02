import React, { FC, useState } from 'react';
import { ItemDataType } from '../../../../types/types';
import style from './ProductItem.module.css';
import Button, { ImgVariant } from '../../../common/Button/Button';
import { useNavigate } from 'react-router-dom';
import Size from '../../../common/Size/Size';
import InfoRow from '../../../common/InfoRow/InfoRow';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { addToBasket } from '../../../../store/basketSlice';
import CountChange from '../../../common/CountChange/CountChange';
import ButtonBack from '../../../common/ButtonBack/ButtonBack';

interface ProductItemProps {
    item: ItemDataType;
}

const ProductItem: FC<ProductItemProps> = ({item}) => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const basketItems = useAppSelector(state => state.basketSlice.items)
    const itemBasket = (basketItems.filter(a => a.item.id === item.id))[0]
    const [count, setCount] = useState(itemBasket ? itemBasket.count : 1)

    const rowsData = [
        {title: 'Штрихкод:', content: item.barcode},
        {title: 'Производитель:', content: item.producer},
        {title: 'Бренд:', content: item.brand},
      ]

      const handleAddToBasket = () => {
        dispatch(addToBasket({item, count: 1}))
      }
    return (
        <div className={style.container}>
            <img src={item.src} alt="product" />
            <Size item={item}/>
           <div className={style.text}>
           <h4 className={style.title} onClick={() => navigate(`/item/${item.barcode}`)}><span className={style.brand}>{item.brand}</span> {item.title}</h4>
            <div className={style.info}>
            {rowsData.map((item, index) => <InfoRow key={index} title={item.title} content={item.content}/>)}
            </div>
           </div>
            <div className={style.item__bottom}>
                <span className={style.bottom__price}>{item.price} &#x20b8;</span>
                <Button handleClick={handleAddToBasket} width='153px' variant={ImgVariant.shopBasket} text='В КОРЗИНУ'/>
            </div>
            {itemBasket && <CountChange item={item} count={count} setCount={setCount}/>}
        </div>
    );
};

export default ProductItem;