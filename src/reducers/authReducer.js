const INITIAL_AUTH = {
  isSignedIn: null,
  currentUserId: null
};

export const auth = (state = INITIAL_AUTH, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return { ...state, isSignedIn: true, currentUserId: action.payload };

    case 'SIGN_OUT':
      return { ...state, isSignedIn: false, currentUserId: null };

    default:
      return state;
  }
};
