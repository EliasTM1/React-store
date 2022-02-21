import React from 'react'
// * Icon & styles
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'
//  * Redux
import { connect } from 'react-redux'
// * Actions
import { toggleCartHidden } from '../../redux/cart/cart.actions'
// * Selectors
import { selectCrtItemsCount } from '../../redux/cart/cart.selectors'

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon'>
        <ShoppingIcon className='shopping-icon' onClick={toggleCartHidden} />
        <span className='item-count'>{itemCount}</span>
    </div>
)
// * Dispatch what we need our reducer to process
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

// * Dispatch what we need our reducer to process
const mapStateToProps = (state) => ({
    itemCount: selectCrtItemsCount(state)
})



// * Connect our component witht the STORE
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon) 