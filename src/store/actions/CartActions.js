export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"
export function addToCart(book){
    return{
        type : ADD_TO_CART,
        payload : book
    }

}

export function removeFromCart(book){
    return{
        type : REMOVE_FROM_CART,
        payload : book
    }
}


//1:19