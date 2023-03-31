import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../Constants/cartConstants";

export const cartReducer = (state = {cartItems:[]},action)=>{
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload;
            const existItem = state.cartItems.find(i=>i.product===item.product);
            let cartItems;

            if (existItem) {
                cartItems = state.cartItems.map(i=>{
                    if (i.product === existItem.product) {
                        return item
                    }
                    return i;
                })
            } else {
                cartItems = [...state.cartItems, item];
            }

            localStorage.setItem('cartItems',JSON.stringify(cartItems))
            return{
                ...state,
                cartItems
            }

            case CART_REMOVE_ITEM:
                let cartItemsRmv = state.cartItems.filter(i=>i.product !== action.payload);
                localStorage.setItem('cartItems',JSON.stringify(cartItemsRmv))
                return{
                    ...state,
                    cartItems:cartItemsRmv
                }

        default:
            return state;
    }
}