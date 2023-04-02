import React, { FC } from 'react';
import catalog from '../../../media/Frame 125catalog.svg';
import download from '../../../media/bx_bxs-downloaddownload.svg';
import shopBasket from '../../../media/VectortrolleyWhite.svg';
import style from './Button.module.css';

export enum ImgVariant {
    catalog = 'catalog',
    download = 'download',
    shopBasket = 'basket'
}

interface IButtonProps {
    text: string;
    variant?: ImgVariant;
    handleClick?: () => void;
    width?: string;
    disabled?: boolean;
}

const Button: FC<IButtonProps> = ({ text, variant, handleClick, width = '192px', disabled = false }) => {
    return (
        <button disabled={disabled}onClick={handleClick} className={style.button} style={{width: width}}>
            {text} 
            {variant && <img className={style.img} 
                src={variant === ImgVariant.catalog 
                    ? catalog 
                    : variant === ImgVariant.download
                    ? download
                    : shopBasket
                } alt="" />}</button>
    );
};

export default Button;