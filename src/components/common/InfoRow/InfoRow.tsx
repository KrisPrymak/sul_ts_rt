import React, { FC } from 'react';
import style from './InfoRow.module.css';

interface InfoRowProps {
    title: string;
    content: string | number;
}

const InfoRow: FC<InfoRowProps> = ({title, content}) => {
    return (
        <div className={style.main__row}>
                  <p className={style.row__title}>{title}</p>
                  <p className={style.row__text}>{content}</p>
                </div>
    );
};

export default InfoRow;