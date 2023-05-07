import React from "react";
import { Card, Col } from "antd";
import "./StatisticsCard.scss";
import { Link } from "react-router-dom";

const StatisticsCard = (props) => {
  const { staticData } = props;
  return (
    <>
        <Link to={staticData?.clickableCard ? staticData?.linkToRedirect : null}>
          <Card
            hoverable={staticData?.isHoverable}
            className="card-with-shadow w-full rounded shadow-md mt-md-0 mt-3"
            
          >
            <div className="d-flex justify-between" data-testid="icon-block">
              <div className="text-black-light fs-18 m-0" data-testid="title-booking">{staticData?.title}</div>
              {staticData?.antdIcon}
            </div>
            <div className="d-md-flex ">
              <div className="fs-32 text-primary text-bolder m-0" data-testid="staticData-number">
                {staticData?.statistics}
              </div>
            </div>
          </Card>
        </Link>
    </>
  );
};

export default StatisticsCard;
