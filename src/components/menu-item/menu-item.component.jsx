import React from 'react';

import './menu-item.styles.scss'

//  * Instead of passing only pros to the component
//  * When we get the parameters we destructure them
//  * Avoiding using props.title or props.subMenu
const MenuItem = ({ title, imageUrl, size }) => (
    //  * To add dynamic styles in componentes,
    //  * We can do that by passing an object inside
    //  * style and interpolate the dynamic value
    <div className={`${size} menu-item`}>

        <div className='background-image'
            style={{
                backgroundImage: `url(${imageUrl})`,
            }}>
        </div>
        <div className='content'>
            <h1 className='menu-item'>{title.toUpperCase()}</h1>
            <span className='menu-item'>Hats</span>
        </div>

    </div>
)

export default MenuItem



