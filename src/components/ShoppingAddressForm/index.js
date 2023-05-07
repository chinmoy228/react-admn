import React from "react";
import { Col, Input, Row, Form, Select, Button } from "antd";
import { ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons";

const ShoppingAddressForm = ({ next, prev }) => {
  const onFinish = (values) => {
    //console.log(values);
    next();
  };
  const handlePrev = () => {
    prev();
  };
  const onFinishFailed = (errorInfo) => {
    //console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <div className="pb-3">
        <h1 data-testid="shipping-address-form-heading">
          2. Please Fill in Your Shipping Address
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
              <span>Contact Name :</span>
            </>
          }
          name="contactName"
          data-testid="contact-name"
        >
          <Input size="large" placeholder="Ibn Adam" />
        </Form.Item>

        <Form.Item
          label={
            <>
              {" "}
              <span>Company Name :</span>
            </>
          }
          name="companyName"
          data-testid="company-name"
        >
          <Input size="large" placeholder="adam" />
        </Form.Item>
        <Form.Item
          label={
            <>
              <span>Phone Number :</span>
            </>
          }
          name="phoneNumber"
          rules={[{ required: true, message: "Phone number required!" }]}
          data-testid="phone-number"
        >
          <Input min={10} max={10} placeholder="+880" size="large" />
        </Form.Item>
        <Form.Item
          label={
            <>
              <span>Country/Region :</span>
            </>
          }
          name="country"
          data-testid="country"
        >
          <Select
            defaultValue="Please Select"
            size="large"
            options={[
              {
                value: null,
                label: "Please Select",
              },
              {
                value: "india",
                label: "India",
              },
              {
                value: "Pakistan",
                label: "PAkista",
              },
            ]}
          />
        </Form.Item>
        <Form.Item
          label={
            <>
              <span>Street Address :</span>
            </>
          }
          name="streetAdress"
          rules={[{ required: true, message: "Street address required!" }]}
          data-testid="street-adress"
        >
          <Input size="large" placeholder="House number and Street name" />
        </Form.Item>
        <Form.Item name="apartment" data-testid="apartment">
          <Input size="large" placeholder="Apartment, Suite, Unit etc." />
        </Form.Item>
        <Form.Item
          label={
            <>
              <span>City :</span>
            </>
          }
          name="city"
          data-testid="city"
        >
          <Input size="large" placeholder="Enter City" />
        </Form.Item>
        <Form.Item
          label={
            <>
              <span>Zip/Postal Code :</span>
            </>
          }
          name="postalcode"
          data-testid="postalcode"
        >
          <Input size="large" placeholder="Enter Zip " />
        </Form.Item>

        <Form.Item className="mt-6 pt-2 btn-grp ">
          <Row justify="space-between" gutter={[24, 24]}>
            <Col>
              <Button
                onClick={() => handlePrev()}
                size="large"
                data-testid="shopping-AddressForm-prev-btn"
              >
                <ArrowLeftOutlined />
                Previous
              </Button>
            </Col>
            <Col>
              <Button
                type="primary "
                htmlType="submit"
                size="large"
                data-testid="shopping-AddressForm-next-btn"
              >
                Save & Next <ArrowRightOutlined />
              </Button>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ShoppingAddressForm;
