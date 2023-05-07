import React, { useState } from "react";
import { Card, Col, Row, Table } from "antd";
import ReviewOrderTAbleProductInfo from "../ReviewOrderTAbleProductInfo/index";
import Counter from "../Counter/index";
import "./ReviewOrderTable.scss";

const ReviewOrderTable = () => {
  const dataSource = [
    {
      key: "1",
      name: <ReviewOrderTAbleProductInfo />,
      price: 100,
      productCount: <Counter countValue={(value) => countValue(value, "1")} />,
    },
    {
      key: "2",
      name: <ReviewOrderTAbleProductInfo />,
      price: 42,
      productCount: <Counter countValue={(value) => countValue(value, "2")} />,
    },
  ];
  const [totalProductCount, setTotalProductCount] = useState(() => {
    const initialState = {};
    dataSource.forEach((record) => {
      initialState[record.key] = 1;
    });
    return initialState;
  });

  const countValue = (value, key) => {
    setTotalProductCount((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };

  const columns = [
    {
      dataIndex: "name",
      key: "name",
      width: 550,
    },
    {
      dataIndex: "price",
      key: "price",
      width: 200,
      render: (text, record) => (
        <>
          <span>${record?.price}</span>
        </>
      ),
    },
    {
      dataIndex: "productCount",
      key: "productCount",
      width: 300,
    },
    {
      dataIndex: "totalPrice",
      key: "totalPrice",
      render: (text, record) => (
        <>
          <span style={{ fontSize: "15px", fontWeight: "500" }}>
            ${record?.price * totalProductCount[record.key] || record?.price}
          </span>
        </>
      ),
      width: 100,
    },
  ];
  const totalLastColumn = dataSource.reduce((acc, record, index) => {
    return acc + record?.price * totalProductCount[record.key] ?? 1;
  }, 0);

  return (
    <div className="pt-4">
      <Card>
        <Row>
          <Table
            dataSource={dataSource}
            columns={columns}
            pagination={false}
            scroll={{
              x: "max-content",
            }}
            data-testid="table-order"
          />
        </Row>

        <Row className="mt-3">
          <Col xs={0} lg={16}></Col>
          <Col xs={24} lg={8}>
            <Row>
              <Col xs={16} lg={16}>
                <span
                  style={{
                    color: "rgb(90, 95, 125)",
                    fontSize: "14px",
                    fontWeight: "700",
                  }}
                  data-testid="sub-total"
                >
                  Subtotal :
                </span>
              </Col>
              <Col
                xs={8}
                lg={8}
                className="subtotal"
                data-testid="sub-total-amount"
              >
                {totalLastColumn}
              </Col>
            </Row>
            <Row className="pt-2">
              <Col xs={16} lg={16}>
                <span
                  style={{
                    color: "rgb(90, 95, 125)",
                    fontSize: "14px",
                    fontWeight: "700",
                  }}
                >
                  Discount :
                </span>
              </Col>
              <Col
                xs={8}
                lg={8}
                style={{ fontSize: "15px", fontWeight: "500" }}
              >
                $-20
              </Col>
            </Row>
            <Row className="pt-2">
              <Col xs={16} lg={16}>
                <span
                  style={{
                    color: "rgb(90, 95, 125)",
                    fontSize: "14px",
                    fontWeight: "700",
                  }}
                >
                  Shipping Charge :
                </span>
              </Col>
              <Col
                xs={8}
                lg={8}
                style={{ fontSize: "15px", fontWeight: "500" }}
              >
                $30
              </Col>
            </Row>
            <Row className="pt-2">
              <Col xs={16} lg={16}>
                <span
                  style={{
                    color: "#272B41",
                    fontSize: "16px",
                    fontWeight: "800",
                  }}
                >
                  Total :
                </span>
              </Col>
              <Col xs={8} lg={8} className="total-price text-primary">
                {totalLastColumn - 20 + 30}
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default ReviewOrderTable;
