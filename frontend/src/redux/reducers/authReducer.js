// authReducer.js file

const initialState = {
  token: null,
  userData: null,
  isAuthenticated: false,
  loading: false,
  error: null
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
    case 'LOGIN_REQUEST':
    case 'SIGNUP_REQUEST':
      return { ...state, loading: true, error: null };
    case 'LOGIN_SUCCESS':
    case 'SIGNUP_SUCCESS':
      return { ...state, loading: false, error: null };
    case 'LOGIN_FAILURE':
    case 'SIGNUP_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default authReducer;
