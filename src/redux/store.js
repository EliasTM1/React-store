// * Redux
import { createStore, applyMiddleware } from 'redux';
// * Persist
// * Persist
import { persistStore } from 'redux-persist';
//  * MiddleWares
import logger from 'redux-logger';

// * Main Reducer
import rootReducer from './root-reducer';
//  ? We define it like this in case 
//  ? we want to pass more than one middleware  
const middlewares = [logger];
// ? Create the redux store
// ? first parameter is our rootReducer
// ? second is how we apply middlewares
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

const exportedObject = { store, persistor };

export default exportedObject
