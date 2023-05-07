import React from "react";
import { Card, Steps } from "antd";
import {
  ArrowUpOutlined,
} from "@ant-design/icons";
import { OrderOverviewData } from '../../constants'


const OrderOverviewCard = () =>{
    return (
        <Card className="card-with-shadow rounded shadow-md">
        <h5 className="fs-18 mt-2 mb-1" data-testid="orders-overview-title"> Orders overview </h5>
        <div className="d-flex align-item-center">
          <ArrowUpOutlined className="text-green" data-testid="ArrowUpOutlined-icon"/>
          <p className="m-0 pl-1 text-black-light" data-testid="top-text"> 24% this month</p>
        </div>
        <Steps
          direction="vertical"
          className="mt-4 steper-height"
          size="large"
          items={OrderOverviewData}
          data-testid="steps"
        />
      </Card>
    
    )
}

export default OrderOverviewCard;