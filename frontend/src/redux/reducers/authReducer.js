// reducers/authReducer.js

const initialState = {
    token: null,
    userData: null,
    isAuthenticated: false
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_AUTH_DATA':
        return {
          ...state,
          token: action.payload.token,
          userData: action.payload.userData,
          isAuthenticated: true
        };
      case 'CLEAR_AUTH_DATA':
        return {
          ...state,
          token: null,
          userData: null,
          isAuthenticated: false
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  