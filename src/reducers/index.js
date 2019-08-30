import { combineReducers } from 'redux';
import { auth } from './authReducer';
import { products } from './productReducer';
import { nav } from './navReducer';

export const reducers = combineReducers({
  auth,
  products,
  nav
});
