
import React from "react";
// * Redux
import { connect } from "react-redux";
import { clearItemFromCart, addItem, removeItems } from "../../redux/cart/cart.actions";
//  * Styles 
import './checkout-item.styles.scss'


const CheckoutItem = ({ cartItem, clearItem, removeItems, addItem }) => {
    const { name, imageUrl, price, quantity } = cartItem
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img alt='item' src={imageUrl} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => removeItems(cartItem)}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => clearItem(cartItem)}>
                <p>
                    &#10005;
                </p>
            </div>
        </div>
    )

}

const mapStateToProps = (dispatch) => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItems: item => dispatch(removeItems(item))
})

export default connect(null, mapStateToProps)(CheckoutItem)