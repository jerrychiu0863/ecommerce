import _ from 'lodash';
import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  ADD_ONE_QUANTITY,
  REMOVE_ONE_QUANTITY
} from '../actions/types';

export const shoppingcart = (state = {}, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return {
        ...state,
        [action.payload.id]: {
          ...action.payload.product,
          quantity: action.payload.quantity
        }
      };

    case REMOVE_ITEM_FROM_CART:
      return _.omit(state, action.payload);

    case ADD_ONE_QUANTITY:
      return {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          quantity: state[action.payload].quantity + 1
        }
      };

    case REMOVE_ONE_QUANTITY:
      const { quantity } = state[action.payload];
      return {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          quantity: quantity === 1 ? 1 : quantity - 1
        }
      };

    default:
      return state;
  }
};
