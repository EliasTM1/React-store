import React from 'react';
//  ? Components
import CollectionItem from '../collection-item/collection-item.component.jsx'
// ? Styles
import './preview-collection.styles.scss'

/*
  * Is iimportant to remember that when this component gets
  ? Render or Re-render
  * All the anonimous functions indide this componente will run as well
*/

const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items
                .filter((item, index) => index < 4)
                .map(({ id, ...otherItemProps }) => (
                    <CollectionItem key={id}{...otherItemProps} />
                ))}
        </div>
    </div>
);


export default CollectionPreview