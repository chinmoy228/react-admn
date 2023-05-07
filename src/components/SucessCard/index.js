import { Card } from "antd";
import React from "react";
import { Button, Result } from "antd";
import "./SuccessCard.scss";

const SuccessCard = () => {
  return (
    <div>
      <Card data-testid="result-section">
        <Result
          status="success"
          title="Payment Successful"
          subTitle="Thank you! We have received your Payment."
          className="result-content"
        />
      </Card>
    </div>
  );
};

export default SuccessCard;
