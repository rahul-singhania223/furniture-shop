
export const initialState = {
    cart: []
}


function reducer(state, action) {
    switch(action.type) {

        case "GOT_PRODUCTS":

            console.log(action.item);

            return {
                ...state,
                cart: action.item
            }

        case "UPDATE_QTY":
            
            const newCart = state.cart;
            
            const index = newCart.findIndex(item => item.id === action.id )

            newCart[index].qty = action.qty;

            return {
                ...state,
                cart: newCart
            }

        case "REMOVE_ITEM_FROM_CART":

            const newCart2 = state.cart;

            const itemPosition = newCart2.findIndex(item => item.id === action.id );

            newCart2.splice(itemPosition, 1);

            return {
                ...state,
                cart: newCart2
            }

        default:
            return state
    }
}


export default reducer;