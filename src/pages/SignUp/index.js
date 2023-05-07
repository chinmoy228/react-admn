import React from 'react'
import './SignUp.scss'

import { Button, Col, Row, Form, Input } from 'antd'
import { theme } from 'antd';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const SignUp = () => {

  const navigate = useNavigate();

  const {
    token: { colorPrimary },
  } = theme.useToken();

  const onFinish = (values) => {
    if (values) {
      console.log('Success:', values);
      navigate('/signIn')
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='signUpMainContainer' data-testid='main-signup-id'>
      <Row className='h-100'>
        <Col xs={24} md={24} lg={9} className='h-full base-container' style={{ backgroundColor: `${colorPrimary}` }}>
          <div className='leftBox d-flex flex-col justify-content-center h-full'>
            <div className='fs-32 text-bolder text-white mb-3' data-testid='signup-left-head'>Already have an account!</div>
            <div className='fs-16 text-white mb-4' data-testid='signup-left-des'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
            <div className='leftHoverConatier'>
              <Link to='/signIn' >
                <Button ghost size='large' className='pr-5 pl-5 leftHover' data-testid='signup-left-signin'>Sign In</Button>
              </Link>
            </div>
          </div>
        </Col>
        <Col xs={24} md={24} lg={15} className='h-full base-container'>
          <div className='rightBox d-flex flex-col items-center justify-content-center h-full'>
            <div className='fs-32 text-bolder text-primary mb-5'>Create Account</div>
            <div className='signUpform' data-testid='signup-form-id'>
              <Form
                name="signUp"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                layout='vertical'
                scrollToFirstError
                requiredMark={'optional'}
              >
                <Row gutter={[20, 0]}>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label="First Name"
                      name="fname"
                      rules={[
                        { required: true, message: 'Please enter your first name!' },
                        {
                          pattern: /^[a-zA-Z]+$/,
                          message: 'Only alphabets allowed',
                        },
                        {
                          min: 2,
                          message: 'First name too short',
                        },
                        {
                          max: 16,
                          message: 'First name too large',
                        },
                      ]}
                    >
                      <Input size="large" placeholder="Enter First Name" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label="Last Name"
                      name="lname"
                      rules={[
                        { required: true, message: 'Please enter your last name!' },
                        {
                          pattern: /^[a-zA-Z]+$/,
                          message: 'Only alphabets allowed',
                        },
                        {
                          min: 2,
                          message: 'Last name too short',
                        },
                        {
                          max: 16,
                          message: 'Last name too large',
                        },
                      ]}
                    >
                      <Input size="large" placeholder="Enter Last Name" />
                    </Form.Item>
                  </Col>
                </Row>

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
                  data-testid='signup-password-id'
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

                <Form.Item >
                  <Button className='mt-3' type="primary" size='large' block htmlType="submit">
                    Sign Up
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

export default SignUp