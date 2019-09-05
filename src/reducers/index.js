import { combineReducers } from 'redux';
import { auth } from './authReducer';
import { products } from './productReducer';
import { sortBy } from './sortingReducer';
import { shoppingcart } from './shoppingcartReducer';


export const reducers = combineReducers({
  auth,
  products,
  sortBy,
  shoppingcart
});
