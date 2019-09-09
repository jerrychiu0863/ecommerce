import { ON_SORTING_CHANGE } from '../actions/types';

export const sortBy = (state = '', action) => {
  switch (action.type) {
    case ON_SORTING_CHANGE:
      return action.payload;

    default:
      return state;
  }
};
