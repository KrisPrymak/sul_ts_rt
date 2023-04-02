import { createSlice } from '@reduxjs/toolkit';

interface Contacts {
    address: string;
    subaddress: string;
    email: string;
    subemail: string;
}

interface MainState {
    contacts: Contacts;
}

const initialState: MainState = {
    contacts: {
        address: 'г. Кокчетав, ул. Ж. Ташенова 129Б',
        subaddress: '(Рынок Восточный)',
        email: 'opt.sultan@mail.ru',
        subemail: 'На связи в любое время'
    }
}

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {}
})

export default mainSlice.reducer;
