import { FC } from 'react';
import { useAppSelector } from '../../../hooks/redux';
import pointLocation from '../../../media/akar-icons_locationpointLocation.svg';
import mailLetter from '../../../media/fluent_mail-24-regularmailLetter.svg';
import style from './ContactItem.module.css';

export enum ContactVariant {
    address = 'address',
    email = 'email'
}

interface IContactItem {
    variant: ContactVariant;
}

const ContactItem: FC<IContactItem> = (variant) => {
    const mainSlice = useAppSelector(state => state.mainSlice)
    return (
        <div className={style.contacts}>
            <img src={variant.variant === ContactVariant.address ? pointLocation : mailLetter} alt="" />
            <div>
                <p className={style.text}>{variant.variant === ContactVariant.address ? mainSlice.contacts.address : mainSlice.contacts.email}</p>
                <p className={style.subtext}>{variant.variant === ContactVariant.address ? mainSlice.contacts.subaddress : mainSlice.contacts.subemail}</p>
            </div>
        </div>
    );
};

export default ContactItem;