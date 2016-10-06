import axios from 'axios'
import * as searchActions from 'actions/search/searchActions'

export function fetchSearchItems() {
    return function(dispatch){
        axios.get("http://jsonp.afeld.me/?url=https://api.myjson.com/bins/19ynm")
        .then((response) => {
            dispatch({type: "FETCH_SEARCH_ITEMS_FULFILLED", payload: response.data.productsInCart})
        })
        .catch((err) => {
            dispatch({type: "FETCH_SEARCH_ITEMS_REJECTED", payload: err})
        })
    }
}

export function startFetchingSearchItems() {
    return function(dispatch){
        dispatch({type: "FETCH_SEARCH_ITEMS"})
    }
}
