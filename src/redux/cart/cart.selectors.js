import { createSelector } from 'reselect'

//  * Input selectors are in charge to get a slice of the REDUX state
//  * Inout selectos
//  * Output selectos

// ?Creamos el selector

const selectCart = state => state.cart

// ? Instanciamos createSelector()
/*
* CreateSelector toma dos parametros
* Primero, es un array de inputSelectors
* Segundo, es el valoe que retorna cada selector 
*  
*
*
*/
export const selectCartItem = createSelector([selectCart], cart => cart.cartItems);

export const selectCartHidden = createSelector([selectCart], cart => cart.hidden)


export const selectCrtItemsCount = createSelector(
    [selectCartItem],
    cartItems => cartItems.reduce((acom, currentItem) => acom + currentItem.quantity, 0)
)

export const selectedCartItemsCount = createSelector(
    //  * Create selector toma como primer argumento un array de selectores
    [selectCrtItemsCount],
    // * Como segundo es una funcion que toma como argumento  el productos de cada uno de esos seletoces, para devolver una pieza mas pequena de codigo todavia.
    cartItems =>
        cartItems.reduce((acomulador, cartItem) => acomulador + cartItem.quantity, 0)
)

export const selectCartTotal = createSelector(
    [selectCartItem],
    cartItems =>
        cartItems.reduce((acomulador, cartItem) => acomulador + cartItem.quantity * cartItem.price, 0)
)