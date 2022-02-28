import React from 'react';
//  * Styles
import './directory.styles.scss'
//  * Redux
import { connect } from 'react-redux';
//  * Reselect 
import { createStructuredSelector } from 'reselect';
//  * Reducers
import { selectDirectorySections } from '../../redux/directory/directory.selector'
//  * Components 
import MenuItem from '../menu-item/menu-item.component'



// ? Component Starts

const Directory = ({ sections }) => (

    <div className='directory-menu'>
        {sections.map(({ id, ...everythingElse }) => (
            <MenuItem key={id} {...everythingElse} />
        ))}
    </div>

)
// ? Finish Starts

// ! Insead fo destructuring each property, we can spread the vallues with the operator inside and object 
const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})
export default connect(mapStateToProps)(Directory) 