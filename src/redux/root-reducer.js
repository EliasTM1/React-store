//  * Redux library
import { combineReducers } from 'redux'
//  * My reducers
import userReducer from './users/users.reducer'

// * Exports
export default combineReducers({
    user: userReducer
})