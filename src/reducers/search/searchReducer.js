export default function reducer(state={
    searchItems: [],
    fetching: false,
    fetched: false,
    error: false
}, action) {
    switch (action.type) {
      case "FETCH_SEARCH_ITEMS": {
          return {
              ...state,
              searchItems: [],
              fetched: false,
              fetching: true
          }
          break;
      }
      case "FETCH_SEARCH_ITEMS_REJECTED": {
          return {
              ...state,
              fetching: false,
              fetched: false,
              searchItems: [],
              error: action.payload
          }
          break;
      }
      case "FETCH_SEARCH_ITEMS_FULFILLED": {
          return {
              ...state,
              fetching: false,
              fetched: true,
              searchItems: action.payload
          }
          break;
      }
    }
    return state;
}
