//  * This is a functions that checks if the item exists or if its a new one
export const addItemToCart = (cartItems, itemToAdd) => {
    // * If the items is found on the former Array
    // * existinf gets a true value
    const existing = cartItems.find(
        cartItem => cartItem.id === itemToAdd.id
    );
    // * In case thar exists, we update the quantity of that item
    if (existing) {
        return cartItems.map(cartItem => cartItem.id === itemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
    }
    // ! Si se trata de un objeto nuevo, se regresa la array antigua, con el item seleccionado, con la cantidad en 1
    return [...cartItems, { ...itemToAdd, quantity: 1 }]
}


