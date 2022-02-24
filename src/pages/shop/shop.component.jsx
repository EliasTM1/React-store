import React from 'react';
// * Routing
import { Route } from 'react-router-dom'
// * Components
import CollectionsOverview from '../../components/collection-overview/collection-overview.component';
import CategoryPage from '../category/category.component';


const ShopPage = ({ match }) => (
    <div div className='shop-page' >
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:categoryId`} component={CategoryPage} s />
    </div >
)




export default ShopPage; 