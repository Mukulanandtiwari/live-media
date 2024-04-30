// hooks/useLogin.js

// import { useState } from 'react';
import { message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest, loginSuccess, loginFailure } from '../redux/actions/SignLogActions.js';

const useLogin = () => {
    const dispatch = useDispatch();
    const { loading, error } = useSelector(state => state.auth);

    const loginUser = async (values) => {
        try {
            dispatch(loginRequest());
            const res = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            const data = await res.json();
            if (res.status === 200) {
                message.success(data.message);
                dispatch(loginSuccess(data.token, data.user));
            } else if (res.status === 404) {
                dispatch(loginFailure(data.message));
            } else {
                message.error('Registration failed');
            }
        } catch (err) {
            dispatch(loginFailure(err.message));
        }
    };

    return { loading, error, loginUser };
};

export default useLogin;
