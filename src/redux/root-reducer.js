//  * Redux library
import { combineReducers } from 'redux'
//  * My reducers
import userReducer from './users/users.reducer'
import cartReducer from './cart/cart.reducer'
import directoryReducer from './directory/directory.reducer'
import shopReducer from './shop/shop.reducers'
// * Redux Persists
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


// * Persist config 
const persistConfig = {
    key: 'root',
    storage,
    // * The list of reducers we wish to persist
    whitelist: ['cart']
};

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
})



// * Exports
export default persistReducer(persistConfig, rootReducer)


