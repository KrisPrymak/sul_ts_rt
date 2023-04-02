import React, { FC } from 'react';
import { useAppDispatch } from '../../../hooks/redux';
import { addToBasket, deleteFromBasket } from '../../../store/basketSlice';
import { ItemDataType } from '../../../types/types';
import style from './CountChange.module.css';

interface CountChangeProps {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
    item: ItemDataType;
}

const CountChange: FC<CountChangeProps> = ({count, setCount, item}) => {
  const dispatch = useAppDispatch()
     const handleMinus = () => {
        if (count > 0) {
          setCount(--count)
        }
        dispatch(addToBasket({item, count}))
      }
    
      const handlePlus = () => {
        setCount(++count)
        dispatch(addToBasket({item, count}))
      }

      if (count === 0) {
        dispatch(deleteFromBasket(item.id))
      }
    return (
        <div className={style.count__container}>
              <button onClick={handleMinus} className={style.count__button}>-</button>
              <p>{count}</p>
              <button onClick={handlePlus} className={style.count__button}>+</button>
            </div>
    );
};

export default CountChange;