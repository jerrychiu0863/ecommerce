import { SIGN_IN, SIGN_OUT } from './types';

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

/*Select option*/
export const onSelectChange = selectValue => {
  return {
    type: 'ON_SELECT_CHANGE',
    payload: selectValue
  };
};
/*The end of Select option*/

/*Shopping cart*/
export const addItemToCart = (id, product, quantity) => {
  return {
    type: 'ADD_ITEM_TO_CART',
    payload: { id, product, quantity }
  };
};

export const removeItemFromCart = (id) => {
  return {
    type: 'REMOVE_ITEM_FROM_CART',
    payload: id
  };
};

export const addOneQuantity = id => {
  return {
    type: 'ADD_ONE_QUANTITY',
    payload: id
  };
};

export const removeOneQuantity = id => {
  return {
    type: 'REMOVE_ONE_QUANTITY',
    payload: id
  };
};
/*The end of Shopping cart*/
