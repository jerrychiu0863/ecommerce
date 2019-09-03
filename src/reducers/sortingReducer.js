export const sortBy = (state = '', action) => {
  switch (action.type) {
    case 'ON_SELECT_CHANGE':
      return action.payload;

    default:
      return state;
  }
};
