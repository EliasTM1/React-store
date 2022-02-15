import React from 'react';
// * Router
import { Link } from 'react-router-dom';
// * Logo
import { ReactComponent as Logo } from '../../assets/crown.svg'
// * Firebase
import { auth } from '../../firebase/firebase.utils'
// * Redux
import { connect } from 'react-redux'

import './header.styles.scss'

// const Header = ({ currentUser }) => (
//     <div className='header'>
//         <Link to="/">
//             <Logo className='logo' />
//         </Link>
//         <div className='options'>
//             <Link className='option' to='/shop'>
//                 SHOP
//             </Link>
//             <Link className='option' to='/shop'>
//                 CONTACT
//             </Link>
//             {currentUser ? (
//                 <button className='option' onClick={() => auth.signOut()}>
//                     SIGN OUT
//                 </button>
//             ) : (
//                 <Link className='option' to='/signin'>
//                     SIGN IN
//                 </Link>
//             )}
//         </div>
//     </div>

// )



const Header = ({ currentUser }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {currentUser ? (
                <div className='option' onClick={() => auth.signOut()}>
                    SIGN OUT
                </div>
            ) : (
                <Link className='option' to='/signin'>
                    SIGN IN
                </Link>
            )}
        </div>
    </div>
);


const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header) 