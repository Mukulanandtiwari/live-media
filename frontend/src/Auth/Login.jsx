import React from 'react';
import { Button, Card, Flex, Form, Input, Spin, Typography, Alert } from 'antd';
import { Link } from 'react-router-dom';
import loginImage from '../assets/signin.jpg';
import useLogin from '../hooks/useLogin.jsx';

const Login = () => {
  const { error, loading, loginUser } = useLogin();
  const handleLogin = async (values) => {
    await loginUser(values);
  }

  return (
    <Card className='form-container'>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      {/* Image */}
      <Flex flex={1}>
          <img src={loginImage} alt="register" className='auth-image' />
        </Flex>

        {/* Form */}
        <div style={{ flex: 1 }}>
          <Typography.Title level={3} strong className='title'>
            Sign In
          </Typography.Title>

          <Form
            layout='vertical'
            onFinish={handleLogin}
            autoComplete='off'
            style={{ maxWidth: 1000 }}
          >
            
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

            {error && <Alert discription={error} type="error" showIcon closable className="alert"/>}

            <Form.Item>
              <Button
                type={`${loading ? '' : 'primary'}`} 
                htmlType='submit' size='large' className='btn'>
                {loading ? <Spin /> : 'Sign In'}
                {/* Sign In */}
              </Button>
            </Form.Item>

            <Form.Item>
              <Link to="/">
                <Button size='large' className='btn'>
                  Create an account
                </Button>
              </Link>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Card>
  )
}

export default Login;