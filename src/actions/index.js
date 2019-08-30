export const signIn = (userId) => {
  return {
    type: 'SIGN_IN',
    payload: userId
  }
}

export const signOut = () => {
  return {
    type: 'SIGN_OUT'
  }
}

export const onNavClick = (nav) => {
  return {
    type: 'ON_NAV_CLICK',
    payload: nav
  }
}