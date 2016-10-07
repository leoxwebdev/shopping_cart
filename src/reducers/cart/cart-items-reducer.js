export default function reducer(state={
    cartItemsCount: 0,
    total: 0,
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
              cartItemsCount: action.payload.results.length,
              cartItems: action.payload.results
          }
          break;
      }

      case "ADD_CART_ITEM_TOTAL": {
          return {
              ...state,
              fetching: false,
              fetched: true,
              total: state.total + action.payload
          }
          break;
      }

      case "DEDUCT_CART_ITEM_TOTAL": {
          return {
              ...state,
              fetching: false,
              fetched: true,
              total: state.total - action.payload
          }
          break;
      }


      case "TOTAL_NO_OF_CART_ITEM_TOTAL": {
          return {
              ...state,
              fetching: false,
              fetched: true,
              cartItemsCount: action.payload
          }
          break;
      }

      case "UPDATE_CART_ITEMS": {
          return {
              ...state,
              fetching: false,
              fetched: true,
              cartItemsCount: action.payload.length,
              cartItems: action.payload
          }
          break;
      }

    }
    return state;
}
