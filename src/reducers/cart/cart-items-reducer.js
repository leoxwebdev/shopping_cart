export default function reducer(state={
    cartItems: [],
    fetching: false,
    fetched: false,
    error: false
}, action) {
    switch (action.type) {
      case "CLEAR_CART_ITEMS": {
          return {
              ...state,
              cartItems: [],
              fetched: false,
              fetching: true
          }
          break;
      }
      case "FETCH_CART_ITEMS_REJECTED": {
          return {
              ...state,
              fetching: false,
              fetched: false,
              cartItems: [],
              error: action.payload
          }
          break;
      }
      case "FETCH_CART_ITEMS_FULFILLED": {
          return {
              ...state,
              fetching: false,
              fetched: true,
              cartItems: action.payload.results
          }
          break;
      }
    }
    return state;
}
