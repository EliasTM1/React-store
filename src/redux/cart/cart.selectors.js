import { createSelector } from 'reselect'

//  * Input selectors are in charge to get a slice of the REDUX state
//  * Inout selectos
//  * Output selectos

const selectCart = state => state.cart


export const selectCartItem = createSelector([selectCart], cart => cart.cartItems);

export const selectCrtItemsCount = createSelector(
    [selectCartItem],
    cartItems => cartItems.reduce((acom, currentItem) => acom + currentItem.quantity, 0)
)