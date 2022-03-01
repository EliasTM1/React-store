import React from 'react';
// * Logo
import { ReactComponent as Logo } from '../../assets/crown.svg'
// * Firebase
import { auth } from '../../firebase/firebase.utils'
// * Redux
import { connect } from 'react-redux'
// * Reselect
import { createStructuredSelector } from 'reselect'
// * Selectors
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/users/user.selector'
//  * Syles and Icons
import { HeaderContainer, LogoContainer, OptionLink, OptionsContainer } from './header.styles'
import './header.styles.scss'
// * Components
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/shop'>
                CONTACT
            </OptionLink>
            {currentUser ? (
                <OptionLink as='div' onClick={() => auth.signOut()}>
                    SIGN OUT
                </OptionLink>
            ) : (
                <OptionLink to='/signin'>
                    SIGN IN
                </OptionLink>
            )}

            <CartIcon />
        </OptionsContainer>
        {
            hidden ? null : <CartDropdown />
        }

    </HeaderContainer>

)

// import { selectCartHidden } from '../../redux/cart/cart.selectors'
// import { selectCurrentUser } from '../../redux/users/user.selector'

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)


