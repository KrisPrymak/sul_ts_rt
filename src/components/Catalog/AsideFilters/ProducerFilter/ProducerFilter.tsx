import React from 'react';
import style from './ProducerFilter.module.css';
import SearchInput from '../../../common/SearchInput/SearchInput';
import { SvgVariant } from '../../../common/SearchInput/SearchInput';
import ProducerCheckbox from '../../../common/ProducerCheckbox/ProducerCheckbox';

const ProducerFilter = () => {

    return (
        <div>
            <h4 className={style.title}>Производитель</h4>
            <SearchInput placeholder='Поиск... ' img={SvgVariant.search} />
           <ProducerCheckbox />
        </div>
    );
};

export default ProducerFilter;