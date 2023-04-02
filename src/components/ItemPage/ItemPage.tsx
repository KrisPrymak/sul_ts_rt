import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import Button, { ImgVariant } from "../common/Button/Button";
import Size from "../common/Size/Size";
import Breadcrumbs from "../Catalog/Breadcrumbs/Breadcrumbs";
import style from "./ItemPage.module.css";
import share from '../../media/Vector.svg';
import download from '../../media/Vectordownload.svg';
import arrowDown from '../../media/VectorarrowDown.svg'
import InfoRow from "../common/InfoRow/InfoRow";
import CountChange from "../common/CountChange/CountChange";
import ButtonBack from "../common/ButtonBack/ButtonBack";

const ItemPage = () => {
  const params = useParams();
  const barcode = params.barcode;
  const list = useAppSelector((state) => state.productSlice.list);
  const item = list.filter((item) => item.barcode.toString() === barcode)[0];

  const mainInfoData = [
    { title: 'Производитель', content: item.producer },
    { title: 'Бренд', content: item.brand },
    { title: 'Артикул', content: item.barcode },
    { title: 'Штрихкод', content: item.barcode },
  ]

  const characterData = [
    { title: 'Назначение:', content: item.category[0] },
    { title: 'Тип:', content: item.brand },
    { title: 'Производитель:', content: item.producer },
    { title: 'Бренд:', content: item.brand },
    { title: 'Артикул:', content: item.barcode },
    { title: 'Штрихкод:', content: item.barcode },
    { title: 'Вес:', content: `${item.size} ${item.sizeType}` },
    { title: 'Объем:', content: `${item.size} ${item.sizeType}` },
    { title: 'Кол-во в коробке:', content: `${item.size} ${item.sizeType}` },
  ]
  let [count, setCount] = useState(1)
  const navigate = useNavigate()

  return (
    <div>
      <Breadcrumbs second="Красота и здоровье" third={item.title}/>
      <ButtonBack />
      <div className={style.item}>
        <img className={style.img} src={item.src} alt="" />
        <div className={style.item__info}>
          <p className={style.item__inStock}>В наличии</p>
          <h4 className={style.title}>
            <span className={style.brand}>{item.brand}</span> {item.title}
          </h4>
          <Size item={item} />
          <div className={style.item__bottom}>
            <span className={style.bottom__price}>{item.price} &#x20b8;</span>
           <CountChange count={count} setCount={setCount} item={item}/>
            <Button
              width="153px"
              variant={ImgVariant.shopBasket}
              text="В корзину"
              handleClick={() => navigate('/basketPage')}
            />
          </div>
          <div className={style.extraInfo}>
            <button className={style.extraInfo__share}><img src={share} alt="share" /></button>
            <p className={style.extraInfo__offer}>При покупке от <span className={style.offer__price}>10 000 ₸</span> бесплатная доставка по Кокчетаву и области</p>
            <button className={style.extraInfo__priceList}>Прайс-лист <img src={download} alt="download" /></button>
          </div>
          <div className={style.info}>
            <div className={style.info__main}>
              {mainInfoData.map((item, index) => <InfoRow key={index} title={item.title} content={item.content} />)}
            </div>
            <div className={style.info__description}>
              <h4 className={style.description__title}>Описание <img src={arrowDown} alt="arrow down" /></h4>
              <p className={style.description__text}>{item.description}</p>
            </div>
            <div className={style.info__character}>
              <h4 className={style.character__title}>Характеристики <img src={arrowDown} alt="arrow down" /></h4>
              <div className={style.character__content}>
                {characterData.map((item, index) => <InfoRow key={index} title={item.title} content={item.content} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
