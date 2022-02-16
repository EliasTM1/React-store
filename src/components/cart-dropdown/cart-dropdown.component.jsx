import React from 'react';
//  * Components
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
// * Styles
import './cart-dropdown.styles.scss'
//  * Redux
import { connect } from 'react-redux'

const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items' />
        {
            cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />))
        }
        <CustomButton>Go to checkout</CustomButton>
    </div>
)

// ? This function allow us to receive 
// ? redux store as a parameter and, then use it as props.
const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
})

export default connect(mapStateToProps)(CartDropdown)  