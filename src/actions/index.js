import {
  SIGN_IN,
  SIGN_OUT,
  ON_SORTING_CHANGE,
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  ADD_ONE_QUANTITY,
  REMOVE_ONE_QUANTITY
} from './types';

/*Google Auth*/
export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};
/*The end of Google Auth*/

/*Sorting option*/
export const onSortingChange = sortingValue => {
  return {
    type: ON_SORTING_CHANGE,
    payload: sortingValue
  };
};
/*The end of Sorting option*/

/*Shopping cart*/
export const addItemToCart = (id, product, quantity) => {
  return {
    type: ADD_ITEM_TO_CART,
    payload: { id, product, quantity }
  };
};

export const removeItemFromCart = id => {
  return {
    type: REMOVE_ITEM_FROM_CART,
    payload: id
  };
};

export const addOneQuantity = id => {
  return {
    type: ADD_ONE_QUANTITY,
    payload: id
  };
};

export const removeOneQuantity = id => {
  return {
    type: REMOVE_ONE_QUANTITY,
    payload: id
  };
};
/*The end of Shopping cart*/
