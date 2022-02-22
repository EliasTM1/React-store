import { createSelector } from "reselect"

const selectUser = state => state.user
// const selectCart = state => state.cart

export const selectCurrentUser = createSelector(
    // * En caso de querer agregar mas al array 
    // * siempre tienen que ser pasado en el ordern en
    // * el que fueron creados. 
    // ? Se puede o no usar el array 
    [selectUser],
    // ! Aqui se recibe como argumento el producto de
    // ! que tiene el valor en el array
    // ! los argumentos se pasan en el mismo orden en el que 
    // ! se ecuentran en el array 
    (user) => user.currentUser
)