// contexts/AuthContext.jsx

import { createContext, useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthData, clearAuthData } from '../redux/actions/authActions.js';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const dispatch = useDispatch();
    const { token, userData } = useSelector(state => state.auth);
    const isAuthenticated = !!token;

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('user_data'));
        if (storedData) {
            const { userToken, user } = storedData;
            dispatch(setAuthData(userToken, user));
        }
    }, [dispatch]);

    const login = (newToken, newData) => {
        localStorage.setItem('user_data', JSON.stringify({ userToken: newToken, user: newData }));
        dispatch(setAuthData(newToken, newData));
    };

    const logout = () => {
        localStorage.removeItem('user_data');
        dispatch(clearAuthData());
    };

    return (
        <AuthContext.Provider value={{ token, isAuthenticated, login, logout, userData }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
