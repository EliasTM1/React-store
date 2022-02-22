import React from 'react';
// * React Router DOM 
import { withRouter } from 'react-router-dom'
//  * Components
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
// * Styles
import './cart-dropdown.styles.scss'
//  * Redux
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
//  * Reselect 
import { createStructuredSelector } from 'reselect'
import { selectCartItem } from '../../redux/cart/cart.selectors'


const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
        <div className='cart-items' />
        {cartItems.length ? (
            cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />))) :
            (<span className='empty-message'>Your Cart is Empty</span>)

        }
        <CustomButton onClick={() => {
            history.push('/checkout')
            dispatch(toggleCartHidden())
        }}  >Go to checkout</CustomButton>
    </div>
)

// ? This function allow us to receive 
// ? redux store as a parameter and, then use it as props.
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItem
})

export default withRouter(connect(mapStateToProps)(CartDropdown))  