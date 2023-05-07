import React from 'react'
import './PasswordTab.scss'

import { Button, Col, Divider, Form, Input, Row, message } from 'antd'

const PasswordTab = () => {

    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Success:', values);
        form.resetFields();
        message.success('Password is updated');
    };

    // const handleChange = (value) => {
    //     console.log(`selected ${value}`);
    // };
    // const onChangeSwitch = (checked) => {
    //     console.log(`switch to ${checked}`);
    // };
    const onReset = () => {
        form.resetFields();
    };

    return (
        <div className='main-profiletab-box' data-testid='main-profiletab-box-test-id'>
            <Row className='mt-2'>
                <Col xs={24} className="fs-18 text-bolder">Password</Col>
                <Col xs={24} className="fs-14 text-black-light">Enter your current & new password to reset your password</Col>
            </Row>

            <div className='mt-2 main-profile-tab-form'>
                <Form
                    name="basic"
                    initialValues={{
                        name: 'Ron Vargas',
                        email: 'ronnie_vergas@infotech.io',
                        role: 'UI/UX Designer',
                        language: 'english',
                        timezone: 'GMT+8',
                        syncdata: false
                    }}
                    onFinish={onFinish}
                    autoComplete="off"
                    form={form}
                >
                    <Row className='mt-5'>
                        <Col xs={24} md={8} className="text-bolder">Current Password</Col>
                        <Col xs={24} md={16} className="">
                            <Form.Item
                                name="currentpass"
                                rules={[
                                    { required: true, message: 'Please enter your current password!' },
                                    {
                                        pattern: new RegExp(
                                            '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$',
                                        ),
                                        message:
                                            'Password should contain minimum 8 characters with upper case, lower case letters, special character and number!',
                                    },
                                ]}              
                            >
                                <Input.Password size="large" placeholder="Enter Current Password" data-testid='pass-current-id'/>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Divider className='mt-2' />

                    <Row className='mt-5'>
                        <Col xs={24} md={8} className="text-bolder">New Password</Col>
                        <Col xs={24} md={16} className="">
                            <Form.Item
                                name="newpass"
                                rules={[
                                    { required: true, message: 'Please enter your new password!' },
                                    {
                                        pattern: new RegExp(
                                            '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$',
                                        ),
                                        message:
                                            'Password should contain minimum 8 characters with upper case, lower case letters, special character and number!',
                                    },
                                ]}
                                hasFeedback
                            >
                                <Input.Password size="large" placeholder="Enter New Password" data-testid='pass-new-id'/>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Divider className='mt-2' />


                    <Row className='mt-5'>
                        <Col xs={24} md={8} className="text-bolder">Confirm Password</Col>
                        <Col xs={24} md={16} className="">
                            <Form.Item
                                name="confirmpass"
                                dependencies={['newpass']}
                                hasFeedback
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please confirm your password!',
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue('newpass') === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                        },
                                    }),
                                ]}
                            >
                                <Input.Password size="large" placeholder="Enter Confirm Password" data-testid='pass-confirm-id'/>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Divider className='mt-2' />



                    <Row className='mt-5' justify={'end'} gutter={24}>
                        <Col xs={12} md={4} className="">
                            <Form.Item>
                                <Button size='large' block onClick={onReset} data-testid='password-reset-btn-test-id'>
                                    Reset
                                </Button>
                            </Form.Item>
                        </Col>
                        <Col xs={12} md={6} className="">
                            <Form.Item
                            >
                                <Button size='large' type="primary" htmlType="submit" block>
                                    Update Passoword
                                </Button>
                            </Form.Item>
                        </Col>
                    </Row>


                </Form>
            </div>
        </div>
    )
}

export default PasswordTab