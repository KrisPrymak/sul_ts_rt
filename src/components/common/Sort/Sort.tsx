import React, { useState } from "react";
import style from "./Sort.module.css";
import arrowDown from "../../../media/VectorarrowDown.svg";
import arrowUp from "../../../media/Vectorarrowup.svg";
import { useAppDispatch } from "../../../hooks/redux";
import { changeSort } from "../../../store/productSlice";
import { SortTypeVariant } from "../../../types/types";

const Sort = () => {

  const selectData = [
    { id: SortTypeVariant.nameA, src: arrowDown, title: 'Название' },
    { id: SortTypeVariant.nameZ, src: arrowUp, title: 'Название' },
    { id: SortTypeVariant.price0, src: arrowDown, title: 'Цена' },
    { id: SortTypeVariant.price1, src: arrowUp, title: 'Цена' },
  ]

  const [selectItem, setSelectItem] = useState({ id: SortTypeVariant.nameA, src: arrowDown, title: 'Название' })

  const [isOpenSelect, setIsOpenSelect] = useState(false)
  const dispatch = useAppDispatch()

  const handleSelectClick = (e: any) => {
    if (e.target.id) {
      let curSel = (selectData.filter(select => select.id === e.target.id))[0]
      setSelectItem(curSel)
      dispatch(changeSort(curSel.id))
      setIsOpenSelect(false)
    }
  }

  return (
    <div className={style.container}>
      <p className={style.title}>Сортировка: </p>
      {!isOpenSelect && <div className={style.choosed} onClick={() => setIsOpenSelect(true)}>
        <p>
          {selectItem.title} <img id={selectItem.id} src={selectItem.src} alt="arrow" />
        </p>
      </div>}
      {isOpenSelect && <div className={style.select} onClick={(e) => handleSelectClick(e)}>
        {selectData.map((select, index) => {
          return (
            <p key={index} >
              {select.title} <img id={select.id} src={select.src} alt="arrow" />
            </p>
          )
        })}
      </div>}
    </div>
  );
};

export default Sort;
