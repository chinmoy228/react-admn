import { Row, Col } from "antd";
import React from "react";
import Product1 from "./download.png";

const ReviewOrderTAbleProductInfo = () => {
  return (
    <Row>
      <Col xs={6} lg={6}>
        <img src={Product1} alt="img" width={70} height={80} />
      </Col>
      <Col xs={18} lg={18}>
        <Col style={{ fontSize: "15px", fontWeight: "700" }}>
          Montes Scelerisque
        </Col>
        <Col>
          <Row>
            {" "}
            <Col xs={6} lg={6}><span style={{fontWeight:"800"}}>Size:</span> small</Col>
            <Col xs={12} lg={12}><span style={{fontWeight:"800"}}>Color:</span> Brown</Col>
          </Row>
        </Col>
      </Col>
    </Row>
  );
};

export default ReviewOrderTAbleProductInfo;
