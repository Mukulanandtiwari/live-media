// hooks/useSignup.js

// import { useState } from 'react';
import { message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { signupRequest, signupSuccess, signupFailure } from '../redux/actions/SignLogActions.js';

const useSignup = () => {
    const dispatch = useDispatch();
    const { loading, error } = useSelector(state => state.auth);

    const registerUser = async (values) => {
        if (values.password !== values.passwordConfirm) {
            return dispatch(signupFailure('Passwords do not match'));
        }

        try {
            dispatch(signupRequest());
            const res = await fetch('http://localhost:5000/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            const data = await res.json();
            if (res.status === 201) {
                message.success(data.message);
                dispatch(signupSuccess(data.token, data.user));
            } else if (res.status === 400) {
                dispatch(signupFailure(data.message));
            } else if (res.status === 409) { 
                dispatch(signupFailure('User already exists!'));
            } else {
                message.error('Registration failed');
            }
        } catch (err) {
            dispatch(signupFailure(err.message));
        }
    };

    return { loading, error, registerUser };
};

export default useSignup;
