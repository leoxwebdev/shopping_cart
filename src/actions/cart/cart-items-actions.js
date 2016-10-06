import axios from 'axios'
import * as cartItemsActions from 'actions/cart/cart-items-actions'

export function fetchCartItems() {
    return function(dispatch){
        axios.get("http://jsonp.afeld.me/?url=https://api.myjson.com/bins/19ynm")
        .then((response) => {
            dispatch({type: "FETCH_CART_ITEMS_FULFILLED", payload: { results: response.data.productsInCart} })
        })
        .catch((err) => {
            dispatch({type: "FETCH_CART_ITEMS_REJECTED", payload: err})
        })
    }
}

export function clearCartItems() {
    return function(dispatch){
        dispatch({type: "CLEAR_CART_ITEMS"})
    }
}
