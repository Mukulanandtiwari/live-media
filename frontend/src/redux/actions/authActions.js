// actions/authActions.js

export const setAuthData = (token, userData) => ({
    type: 'SET_AUTH_DATA',
    payload: { token, userData }
  });
  
  export const clearAuthData = () => ({
    type: 'CLEAR_AUTH_DATA'
  });
  