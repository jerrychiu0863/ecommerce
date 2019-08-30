const INITIAL_NAV_STATE = [
  { id: 1, title: 'all', isActive: false },
  { id: 2, title: 'ring', isActive: false },
  { id: 3, title: 'necklace', isActive: false },
  { id: 4, title: 'earing', isActive: false },
  { id: 5, title: 'bracelet', isActive: false }
];

export const nav = (state = INITIAL_NAV_STATE, action) => {
  switch (action.type) {
    case 'ON_NAV_CLICK':
      const updatedNav = state.map(nav =>
        nav.title === action.payload
          ? { ...nav, isActive: true }
          : { ...nav, isActive: false }
      );
      return updatedNav;

    default:
      return state;
  }
};
