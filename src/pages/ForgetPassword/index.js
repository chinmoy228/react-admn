import React, { useState } from "react";
import "./ForgetPassword.scss";
import { Button, Col, Row, Form, Input, notification } from "antd";
import { theme } from "antd";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const {
    token: { colorPrimary },
  } = theme.useToken();

  const onEmailChange = (e) =>{
    setEmail(e.target.value);
  }

  const onFinish = (values) => {
    if (values) {
      console.log("Success:", values);
      notification.success({
        message:"Mail Sent",
        description:"Check your mail id we have sent the reset instruction",
        duration: 3,
      });
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="signUpMainContainer" data-testid='main-forgot-password-id'>
      <Row className="h-100">
        <Col
          xs={24}
          md={24}
          lg={9}
          className="h-full base-container"
          style={{ backgroundColor: `${colorPrimary}` }}
        >
          <div className="leftBox d-flex flex-col justify-content-center h-full">
            <div className="fs-32 text-bolder text-white mb-3">
              Already have an account?
            </div>
            <div className="fs-16 text-white mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
            <div className="leftHoverConatier">
              <Link to="/signIn">
                <Button ghost size="large" className="pr-5 pl-5 leftHover">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </Col>
        <Col xs={24} md={24} lg={15} className="h-full base-container">
          <div className="rightBox d-flex flex-col items-center justify-content-center h-full">
            <div className="fs-32 text-bolder text-primary mb-5">
              Forgot Password?
            </div>
            <div className="fs-16 text-primary text-center w-50 mb-5">
              Enter your email address and we'll send you a link to reset your
              password.
            </div>

            <div className="signUpform">
              <Form
                name="signUp"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                layout="vertical"
                scrollToFirstError
                requiredMark={"optional"}
              >
                <Form.Item
                  label="Email"
                  name="Email"
                  rules={[
                    { required: true, message: "Please enter your email!" },
                    {
                      type: "email",
                      message: "Please enter valid email!",
                    },
                  ]}
                 
                >
                  <Input size="large" type="email" placeholder="Enter Email" onChange={onEmailChange} value={email} data-testid="email-input-element"/>
                </Form.Item>

                <Form.Item>
                  <Button
                    className="mt-3"
                    type="primary"
                    size="large"
                    block
                    htmlType="submit"
                    data-testid="send-button-element"
                  >
                    Send
                  </Button>
                </Form.Item>
              </Form>
              <div className="text-center mb-5">
                Remembered Password?{" "}
                <Link to="/signIn" className="text-primary">
                  Sign In{" "}
                </Link>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ForgetPassword;
