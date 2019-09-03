export const shoppingcart = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, [action.payload.id]: { ...action.payload.product } };

    default:
      return state;
  }
};
