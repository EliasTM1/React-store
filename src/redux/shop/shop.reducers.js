import SHHOP_DATA from '../../pages/shop/shop.data'

const INITIAL_STATE = {
    collections: SHHOP_DATA,
}

const shopReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        default:
            return state
    }
}

export default shopReducer;