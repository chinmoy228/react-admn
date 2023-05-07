import { Button, Card, Col, Row } from "antd";
import React, { useState } from "react";
import ShoppingInformation from "../ShoppingInformation/index";
import "./ReviewOrder.scss";
import PaymentMethod from "../PaymentMethod/index";
import ReviewOrderTable from "../ReviewOrderTable/index";
import {  ArrowLeftOutlined } from "@ant-design/icons";

const ReviewOrder = ({ prev, setConfirmClick, next }) => {
  const handlePrev = () => {
    prev();
  };
  const handleSubmit = () => {
    let result = window.confirm("Are you sure to submit order ?");
    setConfirmClick(result);
    if (result === true) {
      next();
    }
  };

  return (
    <div>
      <div className="pb-3">
        <h1 data-testid="review-order-heading">4. Review and confirm Order</h1>
      </div>
      <div className="card-container">
        <ShoppingInformation />
        <PaymentMethod />

        <ReviewOrderTable />
        <div className="mt-4 pb-2" data-testid="btn-section">
          <Row justify="space-around" align="center">
            <Col className="previous-btn">
              <Button
                onClick={() => handlePrev()}
                size="large"
                data-testid="previous-btn"
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
                onClick={handleSubmit}
                data-testid="done-btn"
              >
                Done
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default ReviewOrder;
