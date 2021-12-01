import React from 'react';
import List from '../list';
import Filter from'../filter';

import './Layout.scss';
function index() {
    return (
        <div className='products__content'>
            <div className="products__content__filter">
            <Filter/>
            </div>
            <div className="products__content__list">
            <List/>
            </div>
        </div>
    )
}

export default index
