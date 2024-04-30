import React from 'react';
import { Button, Card, Flex, Form, Input, Spin, Typography, Alert } from 'antd';
import { Link } from 'react-router-dom';
import registerImage from '../assets/signup.jpg';
import useSignup from '../hooks/useSignup.jsx';

const Register = () => {
    const { loading, error, registerUser } = useSignup();

    const handleRegister = (values) => {
        registerUser(values);
    }

    return (
        <Card className='form-container'>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                {/* Form */}
                <div style={{ flex: 1 }}>
                    <Typography.Title level={3} strong className='title'>
                        Create an account
                    </Typography.Title>
                    
                    <Form
                        layout='vertical'
                        onFinish={handleRegister}
                        autoComplete='off'
                        style={{ maxWidth: 1000 }}
                    >
                        <Form.Item
                            label="Full Name"
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your full name!',
                                }
                            ]}
                        >
                            <Input size='large' placeholder='Enter your full name' />
                        </Form.Item>
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Email!',
                                },
                                {
                                    type: 'email',
                                    message: 'The input is not a valid Email!',
                                }
                            ]}
                        >
                            <Input size="large" placeholder='Enter your email' />
                        </Form.Item>
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Password!',
                                }
                            ]}
                        >
                            <Input.Password size="large" placeholder='Enter your password' />
                        </Form.Item>
                        <Form.Item
                            label="Confirm Password"
                            name="passwordConfirm"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Confirm Password!',
                                },
                            ]}
                        >
                            <Input.Password size="large" placeholder='Re-enter your password' />
                        </Form.Item>

                        {error && <Alert description={error} type="error" showIcon closable className="alert"/>}

                        <Form.Item>
                            <Button 
                            type={`${loading ? '' : 'primary'}`} 
                            htmlType='submit' size='large' className='btn'>
                            {loading ? <Spin /> : 'Create Account'}
                            </Button>
                        </Form.Item>

                        <Form.Item>
                            <Link to="/login">
                                <Button size='large' className='btn'>
                                    Sign In
                                </Button>
                            </Link>
                        </Form.Item>
                    </Form>
                </div>

                {/* Image */}
                <Flex flex={1}>
                    <img src={registerImage} alt="register" className='auth-image'/>
                </Flex>
            </div>
        </Card>
    );
};

export default Register;
