import React from 'react'
// * Icon & styles
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'
//  * Redux
import { connect } from 'react-redux'
// * Actions
import { toggleCartHidden } from '../../redux/cart/cart.actions'

const CartIcon = ({ toggleCartHidden }) => (
    <div className='cart-icon'>
        <ShoppingIcon className='shopping-icon' onClick={toggleCartHidden} />
        <span className='item-count'>0</span>
    </div>
)
// * Dispatch what we need our reducer to process
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})
// * Connect our component witht the STORE
export default connect(null, mapDispatchToProps)(CartIcon) 