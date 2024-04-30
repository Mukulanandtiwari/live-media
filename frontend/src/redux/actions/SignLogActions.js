// actions/authActions.js

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
  