import React, { FC } from 'react';
import style from './Size.module.css';
import bottle from '../../../media/whh_bottlebottle.svg';
import box from '../../../media/fa-solid_box-openbox.svg';
import { ItemDataType, SizeTypeVariant } from '../../../types/types';

interface SizeProps {
    item: ItemDataType;
}


const Size: FC<SizeProps> = ({item}) => {
    return (
        <div className={style.size}>
                <img src={item.sizeType === SizeTypeVariant.ml ? bottle : box} alt="icon" />
                <p className={style.size__text}>{item.size} {item.sizeType}</p>
            </div>
    );
};

export default Size;