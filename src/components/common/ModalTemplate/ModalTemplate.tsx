import React, { FC } from 'react';
import style from './ModalTemplate.module.css';
import cross from '../../../media/fi-rr-crosscross.svg';

interface ModalTemplateProps {
    setIsActiveModal: React.Dispatch<React.SetStateAction<boolean>>;
    title: string;
    handelClickTrue?: () => void
}

const ModalTemplate: FC<ModalTemplateProps> = ({ setIsActiveModal, title, handelClickTrue }) => {
    const closeModal = () => setIsActiveModal(false)
    return (
        <div className={style.popupBg}>
            <div className={style.popup}>
                <div className={style.popup__content}>
                    <img className={style.popup__cross} src={cross} alt='cross' onClick={closeModal} />
                    <div>
                        <h1 className={style.title}>{title}</h1>

                        {handelClickTrue && <div className={style.popup__buttons}>
                            <button className={style.button} onClick={handelClickTrue}>Да</button>
                            <button className={style.button} onClick={closeModal}>Нет</button>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalTemplate;