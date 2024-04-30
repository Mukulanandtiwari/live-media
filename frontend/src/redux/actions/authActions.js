// authActions.js file

export const setAuthData = (token, userData) => ({
  type: 'SET_AUTH_DATA',
  payload: { token, userData }
});

export const clearAuthData = () => ({
  type: 'CLEAR_AUTH_DATA'
});

export const loginRequest = () => ({
  type: 'LOGIN_REQUEST'
});

export const loginSuccess = (token, user) => ({
  type: 'LOGIN_SUCCESS',
  payload: { token, user }
});

export const loginFailure = (error) => ({
  type: 'LOGIN_FAILURE',
  payload: error
});

export const signupRequest = () => ({
  type: 'SIGNUP_REQUEST'
});

export const signupSuccess = (token, user) => ({
  type: 'SIGNUP_SUCCESS',
  payload: { token, user }
});

export const signupFailure = (error) => ({
  type: 'SIGNUP_FAILURE',
  payload: error
});