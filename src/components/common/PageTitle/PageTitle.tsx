import React, { FC } from 'react';
import style from './PageTitle.module.css';

interface PageTitleProps {
    text: string;
}

const PageTitle: FC<PageTitleProps> = ({text}) => {
    return (
        <h2 className={style.title}>{text}</h2>
    );
};

export default PageTitle;