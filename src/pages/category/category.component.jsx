import React from "react";
//  * Components
import { connect } from 'react-redux'
//  * Redux-shop
import { selectCollection } from '../../redux/shop/shop.selector'
//  * Components
import CollectionItem from "../../components/collection-item/collection-item.component";
//  * Styles
import './category.styles.scss'

const CategoryPage = ({ collection }) => {

    const { title, items } = collection
    console.log(items)
    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {items.map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})


export default connect(mapStateToProps)(CategoryPage)
