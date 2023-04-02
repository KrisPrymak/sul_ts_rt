import React from 'react';
import style from './CallCenter.module.css';
import callWomen from '../../../media/Group 100callWomen.png';

const CallCenter = () => {
    return (
        <div className={style.callcenter}>
                    <div className={style.callcenter__text}>
                        <p className={style.callcenter__phone}>+7 (777) 490-00-91</p>
                        <p className={style.callcenter__worktime}>время работы: 9:00-20:00</p>
                        <p className={style.callcenter__request}>Заказать звонок</p>
                    </div>
                    <img src={callWomen} alt="call center" />
                </div>
    );
};

export default CallCenter;