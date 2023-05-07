import React from "react";
import {  Col, Card } from "antd";
import {
  StarOutlined,
  UpOutlined,
  RiseOutlined,
  DownOutlined,
} from "@ant-design/icons";

const TransactionCards = () => {
  return (
    <>
      <Col md={12} sm={24} className="w-100">
        <Card
          hoverable
          className="card-with-shadow rounded shadow-md mt-md-0 mt-3"
        >
            <div>
              <div className="d-flex align-items-center">
                <RiseOutlined className="background-radius-green-stats-card fs-20 text-green p-2" data-testid="riseoutlined-icon"/>
                <p className="m-0 pl-3 text-green text-bold fs-18" data-testid="transaction-word">
                  Transactions
                </p>
              </div>
              <div className="d-flex justify-between align-items-center mt-2">
                <p className="text-black-light fs-32 text-bolder m-0" data-testid="trans-amount">$2.8M</p>
                <div className="d-flex align-items-center">
                  <DownOutlined className="background-radius-green-stats-card text-white p-1" data-testid="downOutLined-icon"/>
                  <p className="m-0 pl-1 text-green text-bold" data-testid="percent">(+21%)</p>
                </div>
              </div>
            </div>
          
        </Card>
      </Col>

      <Col md={12} sm={24} className="w-100">
        <Card
          hoverable
          className="card-with-shadow rounded shadow-md mt-md-0 mt-3"
        >
            <div>
              <div className="d-flex align-items-center">
                <StarOutlined className="background-radius-red-stats-card fs-20 text-red p-2" data-testid="StarOutlined-icon"/>
                <p className="m-0 pl-3 text-red text-bold fs-18" data-testid="transaction-word2">
                  Transactions
                </p>
              </div>
              <div className="d-flex justify-between align-items-center mt-2">
                <p className="text-black-light fs-32 text-bolder m-0" data-testid="trans-amount2">$2.8M</p>
                <div className="d-flex align-items-center">
                  <UpOutlined className="background-radius-red-stats-card text-white p-1" data-testid="UpOutlined-icon" />
                  <p className="m-0 pl-1 text-red text-bold" data-testid="percent2">(-21%)</p>
                </div>
              </div>
            </div>
        </Card>
      </Col>
    </>
  );
};

export default TransactionCards;
