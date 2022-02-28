import React from "react";
//  * Components
import { connect } from 'react-redux'
//  * Redux-selector
import { selectCollection } from '../../redux/shop/shop.selector'
//  * Components
import CollectionItem from "../../components/collection-item/collection-item.component";
//  * Styles
import './collection.styles.scss'

const CollectionPage = ({ collection }) => {
    console.log(collection)
    const { title, items } = collection
    console.log(items)
    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {console.log("Collection Page")}
                {
                    items.map(item => (
                        <CollectionItem key={item.id} item={item} />
                    ))}
            </div>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})


export default connect(mapStateToProps)(CollectionPage)