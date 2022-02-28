import React from 'react';
// ? Styles
import './preview-collection.styles.scss'
//  ? Components
import CollectionItem from '../collection-item/collection-item.component.jsx'

/*
  * Is iimportant to remember that when this component gets
  ? Render or Re-render
  * All the anonimous functions indide this componente will run as well
*/

const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        {console.log(title, items)}
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items
                .filter((item, index) => index < 4)
                .map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))}
        </div>
    </div>
);


export default CollectionPreview