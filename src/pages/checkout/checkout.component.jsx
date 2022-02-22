import React from 'react'
// * Redux
import { connect } from 'react-redux'
// * Component
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
// * Reselect
import { createStructuredSelector } from 'reselect'
import { selectCartItem, selectCartTotal } from '../../redux/cart/cart.selectors'
// * Styles 
import './checkout.styles.scss'








const CheckOutPage = ({ cartItems, total }) => (

    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Qty.</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))
        }
        <div className='total'>
            Your toal is: ${total}
        </div>
    </div>



)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItem,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckOutPage)