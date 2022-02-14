import React from 'react';
//  * Components
import { withRouter } from 'react-router-dom'
//  * Syles
import './menu-item.styles.scss'

//  * Instead of passing only pros to the component
//  * When we get the parameters we destructure them
//  * Avoiding using props.title or props.subMenu
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    //  * To add dynamic styles in componentes,
    //  * We can do that by passing an object inside
    //  * style and interpolate the dynamic value
    <div
        className={`${size} menu-item`}
        onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className='background-image'
            style={{
                backgroundImage: `url(${imageUrl})`,
            }}>
        </div>
        <div className='content'>
            <h1 className='menu-item'>{title.toUpperCase()}</h1>
            <span className='menu-item'>Hats</span>
        </div>

    </div >
)

export default withRouter(MenuItem)


// ! WithRouters takes a components a s a parameter and return a component
// * After passing our components to withRouter
// * now we can access the props we need instead of DRILLING PROPS
// * LOCATION MATCH AND HISTORY 
