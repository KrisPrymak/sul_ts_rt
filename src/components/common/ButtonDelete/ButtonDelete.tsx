import React, { FC } from 'react';
import style from './ButtonDelete.module.css';
import trush from '../../../media/VectorbasketTrash.svg';

interface ButtonDeleteProps {
    handleDelete: () => void
}

const ButtonDelete: FC<ButtonDeleteProps> = ({ handleDelete }) => {
    return (
        <button onClick={handleDelete} className={style.buttonDelete}><img src={trush} alt="trush" /></button>
    );
};

export default ButtonDelete;