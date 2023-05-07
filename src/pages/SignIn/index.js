import React from 'react'
import './SignIn.scss'

import { Button, Col, Row, Form, Input, Checkbox } from 'antd'
import { theme } from 'antd';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const SignIn = () => {

  const navigate = useNavigate();

  const {
    token: { colorPrimary },
  } = theme.useToken();

  const onFinish = (values) => {
    if (values) {
      console.log('Success:', values);
      navigate('/')
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='signInMainContainer' data-testid='main-signin-id'>
      <Row className='h-100'>
        <Col xs={24} md={24} lg={9} className='h-full base-container' style={{ backgroundColor: `${colorPrimary}` }}>
          <div className='leftBox d-flex flex-col justify-content-center h-full'>
            <div className='fs-32 text-bolder text-white mb-3' data-testid='signin-left-head'>Don't have an account!</div>
            <div className='fs-16 text-white mb-4' data-testid='signin-left-des'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
            <div className='leftHoverConatier'>
              <Link to='/signUp'>
                <Button ghost size='large' className='pr-5 pl-5 leftHover' data-testid='signin-left-signin'>Sign Up</Button>
              </Link>
            </div>
          </div>
        </Col>
        <Col xs={24} md={24} lg={15} className='h-full base-container'>
          <div className='rightBox d-flex flex-col items-center justify-content-center h-full'>
            <div className='fs-32 text-bolder text-primary mb-2' data-testid='signin-right-form-head'>Welcome back</div>
            <div className='fs-16 text-primary mb-5' data-testid='signin-right-form-des'>Please enter your details to sign in</div>
            <div className='signUpform' data-testid='signin-form-id'>
              <Form
                name="signIn"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                layout='vertical'
                scrollToFirstError
                requiredMark={'optional'}
                initialValues={{
                  remember: true,
                }}
              >
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[{ required: true, message: 'Please enter your email!' },
                  {
                    type: "email",
                    message: "Please enter valid email!",
                  },
                ]}
                >
                  <Input size="large" placeholder="Enter Email" />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  data-testid='signin-password-id'
                  rules={[
                    { required: true, message: 'Please enter your password!' },
                    {
                      pattern: new RegExp(
                        '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$',
                      ),
                      message:
                        'Password should contain minimum 8 characters with upper case, lower case letters, special character and number!',
                    },
                  ]}
                >
                  <Input.Password size='large' placeholder="Enter Password" />
                </Form.Item>

                <Row>
                  <Col xs={24} md={24} lg={12}>
                    <Form.Item
                      name="remember"
                      valuePropName="checked"
                      data-testid='signin-remember-id'
                    >
                      <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={24} lg={12} className='d-flex justify-content-end'>
                    <Link to='/forgotPassword' className='pt-1 forgotPassLink text-primary' data-testid='signin-forgot-password-id'>
                      Forgot Password?
                    </Link>
                  </Col>
                </Row>

                <Form.Item >
                  <Button className='' type="primary" size='large' block htmlType="submit">
                    Sign In
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default SignIn