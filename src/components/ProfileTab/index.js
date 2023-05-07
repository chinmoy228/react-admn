import React from 'react'
import './ProfileTab.scss'

import { Button, Col, Divider, Form, Input, Row, Select, Space, Switch, message } from 'antd'
import {
    UserOutlined,
    MailOutlined,
    AuditOutlined,
    GlobalOutlined
} from "@ant-design/icons";
import { nationalizedLanguage } from '../../constants';
const { Option } = Select;

const ProfileTab = () => {

    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Success:', values);
        message.success('Profile is updated');
    };

    const handleChange = (value) => {
        // console.log(`selected ${value}`);
    };
    const onChangeSwitch = (checked) => {
        // console.log(`switch to ${checked}`);
    };
    const onReset = () => {
        form.resetFields();
    };

    return (
        <div className='main-profiletab-box' data-testid='main-profiletab-box-id'>
            <Row className='mt-2'>
                <Col xs={24} className="fs-18 text-bolder">General</Col>
                <Col xs={24} className="fs-14 text-black-light">Basic info, like your name and address that will displayed in public</Col>
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
                        <Col xs={24} md={8} className="text-bolder">Name</Col>
                        <Col xs={24} md={16} className="">
                            <Form.Item
                                name="name"
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
                                <Input size="large" placeholder="Enter Name" prefix={<UserOutlined className='pl-1 pr-2' />} data-testid='name-test-id'/>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Divider className='mt-2' />

                    <Row className='mt-5'>
                        <Col xs={24} md={8} className="text-bolder">Email</Col>
                        <Col xs={24} md={16} className="">
                            <Form.Item
                                name="email"
                                rules={[{ required: true, message: 'Please enter your email!' },
                                {
                                    type: "email",
                                    message: "Please enter valid email!",
                                },
                                ]}
                            >
                                <Input size="large" placeholder="Enter Email" prefix={<MailOutlined className='pl-1 pr-2' />} data-testid='email-test-id' />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Divider className='mt-2' />

                    <Row className='mt-5'>
                        <Col xs={24} md={8} className="text-bolder">Role</Col>
                        <Col xs={24} md={16} className="">
                            <Form.Item
                                name="role"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter your role!'
                                    },
                                ]}
                            >
                                <Input size="large" placeholder="Enter Role" prefix={<AuditOutlined className='pl-1 pr-2' />} data-testid='role-test-id'/>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Divider className='mt-2' />

                    <Row className='mt-5'>
                        <Col xs={24} className="fs-18 text-bolder">Preferences</Col>
                        <Col xs={24} className="fs-14 text-black-light">Your personalized preference displayed in your account</Col>
                    </Row>


                    <Row className='mt-5'>
                        <Col xs={24} md={8} className="text-bolder">Language</Col>
                        <Col xs={24} md={16} className="">
                            <Form.Item
                                name="language"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please select language!'
                                    },
                                ]}
                            >
                                <Select
                                    placeholder="Select Language"
                                    onChange={handleChange}
                                    optionLabelProp="label"
                                    size='large'
                                    data-testid='select-lang-test-id'
                                >
                                    {
                                        nationalizedLanguage?.map((item) => (
                                            <Option value={item?.value} label={item?.label}>
                                                <Space>
                                                    <span role="img" aria-label={item?.value}>
                                                        {item?.flag}
                                                    </span>
                                                    {item?.name}
                                                </Space>
                                            </Option>
                                        ))
                                    }
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Divider className='mt-2' />


                    <Row className='mt-5'>
                        <Col xs={24} md={8} className="text-bolder">Time Zone</Col>
                        <Col xs={24} md={16} className="">
                            <Form.Item
                                name="timezone"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter your timezone!'
                                    },
                                ]}
                            >
                                <Input size="large" placeholder="Enter Time Zone" readOnly={true}
                                    prefix={<GlobalOutlined className='pl-1 pr-2' />}
                                    data-testid='time-zone-test-id'
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Divider className='mt-2' />

                    <Row className='mt-5'>
                        <Col xs={24} md={8} className="text-bolder">Sync Data</Col>
                        <Col xs={24} md={16} className="">
                            <Form.Item
                                name="syncdata"
                            >
                                <Switch onChange={onChangeSwitch}
                                    data-testid='sync-data-test-id'
                                />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row className='mt-5' justify={'end'} gutter={24}>
                        <Col xs={12} md={4} className="">
                            <Form.Item>
                                <Button size='large' block onClick={onReset} data-testid='reset-btn-test-id'>
                                    Reset
                                </Button>
                            </Form.Item>
                        </Col>
                        <Col xs={12} md={4} className="">
                            <Form.Item
                            >
                                <Button size='large' type="primary" htmlType="submit" block data-testid='update-btn-test-id'>
                                    Update
                                </Button>
                            </Form.Item>
                        </Col>
                    </Row>


                </Form>
            </div>
        </div>
    )
}

export default ProfileTab