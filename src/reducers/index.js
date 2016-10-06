import { combineReducers } from 'redux'
import searchReducer from './search/searchReducer'
import cartItemsReducer from './cart/cart-items-reducer'


export default combineReducers({
  searchReducer,
  cartItemsReducer
})
