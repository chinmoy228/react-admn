import React from "react";
import { Input, Form, Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

const CreateAccountForm = ({ next }) => {
  const onFinish = (values) => {
    // console.log(values);
    next();
  };
  const onFinishFailed = (errorInfo) => {
    //console.log("Failed:", errorInfo);
  };
  const validatePassword = (_, value) => {
    if (value && value.length < 6) {
      return Promise.reject(
        new Error("Password must be maximum 6 characters.")
      );
    }
    return Promise.resolve();
  };
  return (
    <div>
      <div className="pb-3">
        <h1 data-testid="create-account-form-heading">
          1. Please Create Your Account
        </h1>
      </div>
      <Form
        name="formExample"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
        scrollToFirstError
      >
        <Form.Item
          label={
            <>
              <span>Username :</span>
            </>
          }
          name="Username"
          rules={[{ required: true, message: "Username required!" }]}
          data-testid="user-name"
        >
          <Input size="large" placeholder="Username" />
        </Form.Item>

        <Form.Item
          label={
            <>
              <span>Email Address :</span>
            </>
          }
          name="email"
          rules={[
            { required: true, message: "Please enter your email!" },
            {
              type: "email",
              message: "Please enter valid email!",
            },
          ]}
          data-testid="create-account-form-email"
        >
          <Input size="large" placeholder="name@gmail.com" />
        </Form.Item>
        <Form.Item
          label={
            <>
              <span>Password :</span>
            </>
          }
          name="password"
          rules={[
            { required: true, message: "Password required!" },
            { validator: validatePassword },
          ]}
          data-testid="create-account-form-password"
        >
          <Input.Password size="large" placeholder="Password" />
        </Form.Item>
        <Form.Item className="mt-6 pt-2">
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            data-testid="create-form-next-btn"
          >
            Save & Next <ArrowRightOutlined />
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateAccountForm;
