import { Card, Col, Radio, Row } from "antd";
import React from "react";
import { Typography } from "antd";
const { Title } = Typography;

const PaymentMethod = () => {
  return (
    <div className="pt-4">
      <Card>
        <Row>
          <Col>
            {" "}
            <h1 className="heading">Payment Method</h1>
          </Col>
        </Row>
        <Radio>
          <Row>
            <Col style={{ fontSize: "16px", fontWeight: "300" }} lg={24}>
              **** **** **** 2597
            </Col>
          </Row>
        </Radio>
        <Row>
          <Col style={{ color: "rgb(44, 153, 255)",cursor:"pointer" }} lg={24}>
            + Add new Card
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default PaymentMethod;
