import React, { useEffect, useState } from "react";
import { Button, Col, message, Row, Steps, theme } from "antd";
import "./Steps.scss";
import CreateAccountForm from "../CreateAccountForm";
import ShoppingAddressForm from "../ShoppingAddressForm";
import ReviewOrder from "../ReviewOrder/index";
import SuccessCard from "../SucessCard/index";

const Step = () => {
  const [current, setCurrent] = useState(0);
  const [confirmClick, setConfirmClick] = useState(false);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const steps = [
    {
      title: "Create Account",
      content: <CreateAccountForm next={next} />,
    },
    {
      title: "Shipping Address",
      content: <ShoppingAddressForm next={next} prev={prev} />,
    },
    {
      title: "Payment Method",
      content: <Button onClick={() => next()}>Next</Button>,
    },
    {
      title: "Review Order",
      content: (
        <ReviewOrder
          prev={prev}
          next={next}
          setConfirmClick={setConfirmClick}
        />
      ),
    },
  ];

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  return (
    <>
      <Steps
        current={current}
        items={items}
        labelPlacement="vertical"
        className="stepper-form-steps"
      />
      {confirmClick ? (
        <div className="success-message">
          <SuccessCard />
        </div>
      ) : (
        <Row gutter={[24, 24]} className="form-content">
          {current === 3 ? (
            <Col xs={24} lg={24}>
              {steps[current].content}
            </Col>
          ) : (
            <Col xs={24} lg={12}>
              {steps[current].content}
            </Col>
          )}
        </Row>
      )}
    </>
  );
};

export default Step;
