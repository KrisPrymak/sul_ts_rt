import React from 'react';
import { useAppDispatch } from '../../../hooks/redux';
import style from './ProducerCheckbox.module.css';
import { producersData } from '../../../json';
import { addProducers, removeProducers } from '../../../store/productSlice';

const ProducerCheckbox = () => {

    const dispatch = useAppDispatch()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            dispatch(addProducers(e.target.value))
        } else {
            dispatch(removeProducers(e.target.value))
        }
    }
    
    return (
        <div className={style.container}>
            {producersData.map((item, index) => {
                return (
                    <div>
                        <input key={index} value={item} type="checkbox" onChange={handleChange}/>
                        <span className={style.producerName}>{item}</span>
                    </div>
                    
                )
            })}
        </div>
    );
};

export default ProducerCheckbox;