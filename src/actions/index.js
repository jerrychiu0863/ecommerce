import { SIGN_IN, SIGN_OUT } from './types';

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

export const onSelectChange = selectValue => {
  return {
    type: 'ON_SELECT_CHANGE',
    payload: selectValue
  };
};

export const addToCart = (id, product) => {
  return {
    type: 'ADD_TO_CART',
    payload: { id, product }
  };
};

export const onNavClick = nav => {
  return {
    type: 'ON_NAV_CLICK',
    payload: nav
  };
};
