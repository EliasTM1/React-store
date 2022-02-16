//  * Redux library
import { combineReducers } from 'redux'
//  * My reducers
import userReducer from './users/users.reducer'
import cartReducer from './cart/cart.reducer'

// * Exports
export default combineReducers({
    user: userReducer,
    cart: cartReducer
})