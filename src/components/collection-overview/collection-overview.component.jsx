import React from 'react'
// *Redux
import { connect } from 'react-redux'
// * Reselect
import { createStructuredSelector } from 'reselect'
//  * Selectors
import { selectCollections } from '../../redux/shop/shop.selector'
// *Components
import CollectionPreview from '../../components/preview-collection/preview-collection.component'
// *Styles
import './collection-overview.component.scss'

const CollectionsOverview = ({ collections }) => (
    <div className='collections-overview'>
        {
            collections.map(({ id, ...otherCollectionsProps }) => (
                <CollectionPreview key={id} {...otherCollectionsProps} />
            ))
        }
    </div>
)


const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})
export default connect(mapStateToProps)(CollectionsOverview) 