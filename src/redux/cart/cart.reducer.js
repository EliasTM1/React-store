//  * Actions 
import CartActionTypes from './cart.types'
//  * Utilities
import { addItemToCart, removeItemFromCart } from './cart.utils'

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case CartActionTypes.REMOVE_ITEMS:
            return {
                ...state,
                // * Nesesitamos una nueva utility function que nos regrese un array
                // * con todos los elmentos que tenemos pero que remueva uno 
                // * y removerlo por completo en caso de que sea el ultimo.
                // * 
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        case CartActionTypes.CLEAR_ITEM_FOR_CART:
            return {
                ...state,
                // ! Filtramos para eliminar el item que viene del action. 
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }
        default:
            return state
    }
}

export default cartReducer
