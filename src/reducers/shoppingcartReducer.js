import _ from 'lodash';

const INITIAL_CART = {
  streamlined_earing: {
    id: 'streamlined_earing',
    category: 'earing',
    seller: 'Stephine',
    img: 'earing/streamlined-earing_720x480.jpg',
    title: 'Streamlined earings',
    price: 7200,
    popular: true,
    quantity: 10
  }
};

export const shoppingcart = (state = INITIAL_CART, action) => {
  switch (action.type) {
    case 'ADD_ITEM_TO_CART':
      return {
        ...state,
        [action.payload.id]: {
          ...action.payload.product,
          quantity: action.payload.quantity
        }
      };

    case 'REMOVE_ITEM_FROM_CART':
      return _.omit(state, action.payload);

    case 'ADD_ONE_QUANTITY':
      return {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          quantity: state[action.payload].quantity + 1
        }
      };

    case 'REMOVE_ONE_QUANTITY':
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
