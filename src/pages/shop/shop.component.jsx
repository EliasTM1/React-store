import React from 'react';
//  * Components
import CollectionPreview from '../../components/preview-collection/preview-collection.component'
//  * Data
import SHOP_DATA from './shop.data.js';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const { collections } = this.state
        return (
            <div div className='shop-page' >
                {
                    collections
                        .map(({ id, ...otherCollectionsProps }) => (
                            <CollectionPreview key={id} {...otherCollectionsProps} />
                        ))
                }
            </div >
        )
    }
}

export default ShopPage;