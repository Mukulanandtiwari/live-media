// reducers/authReducer.js

const initialState = {
    loading: false,
    error: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
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
