//  * REACT
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
//  * Styles
import './index.css';
//  * Components
import App from './App';
//  * REDUX & Store
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
// * Redux persist
import { PersistGate } from 'redux-persist/integration/react'



ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


