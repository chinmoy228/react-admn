import { Card, Col, Form, Radio, Row } from "antd";
import React from "react";
import "./ShoppingInformation.scss";
import { Typography } from "antd";

import { EditOutlined } from "@ant-design/icons";
const { Title } = Typography;

const ShoppingInformation = () => {
  return (
    <div>
      <Card>
        <Row className="pb-3">
          <Col xs={24} lg={12}>
            <h1 className="heading">Shipping Information</h1>
          </Col>
          <Col
            xs={4}
            lg={12}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <p className="edit-icon">
              <EditOutlined className="text-primary" />{" "}
              <span className="text-primary">Edit</span>
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={24} lg={24}>
            <Form.Item>
              <Radio className="shipping-info-radio">
                <div>
                  <h4 className="radio-name">Ibn Adam</h4>

                  <h4 className="radio-name">Phone: +61412345678</h4>
                  <p>795 Folsom Ave, Suite 600</p>
                  <p>San Francisco, CA 94107</p>
                  <p>United States</p>
                </div>
              </Radio>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col style={{ color: "rgb(44, 153, 255)", cursor: "pointer" }}>
            + Add new Address
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default ShoppingInformation;
