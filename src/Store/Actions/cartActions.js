import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../Constants/cartConstants";


export const addToCart = (prd)=>{
    return{
        type:CART_ADD_ITEM,
        payload:prd
    }
}


export const rmvToCart = (prdId)=>{
    return{
        type:CART_REMOVE_ITEM,
        payload:prdId
    }
}