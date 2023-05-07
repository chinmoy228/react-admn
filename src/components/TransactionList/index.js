
import { DownCircleOutlined, UpCircleOutlined } from "@ant-design/icons";
import { Card } from "antd";
const TransactionList = () => {
  return (
    <>
      <Card className="card-box-shadow rounded shadow-md mt-md-0 mt-5 card-transaction">
        <div className="d-flex justify-between">
          <div className="fs-18 text-bolder" data-testid="header-title">Your Transaction's</div>
        </div>
        <div className="fs-14 text-uppercase text-black-light text-bolder mt-3" data-testid="subheader-title-1">
          NEWEST  
        </div>
        <div className="d-flex justify-between align-items-center mt-md-0 mt-2">
          <div className="d-md-flex align-items-center mt-3">
            <div>
              {" "}
              <DownCircleOutlined className="text-red fs-24 d-sm-none" data-testid="DownCircleOutlined-icon-1"/>{" "}
            </div>
            <div>
              <p className="m-0 text-bolder pl-md-3 pl-0" data-testid="item-text-1">Netflix</p>
              <p className="m-0 pl-md-3 pl-0 text-black-light" data-testid="item-date-1">
                27 March 2020, at 12:30 PM
              </p>
            </div>
          </div>

          <div className="mt-md-0">
            <p className="m-0 text-red text-bolder" data-testid="item-price-1">- $2,5000</p>
          </div>
        </div>

        <div className="d-flex justify-between align-items-center mt-md-0 mt-2">
          <div className="d-md-flex align-items-center mt-3">
            <div>
              <UpCircleOutlined className="text-green fs-24 d-sm-none" data-testid="UpCircleOutlined-icon-1"/>
            </div>
            <div>
              <p className="m-0 text-bolder pl-md-3 pl-0" data-testid="item-text-2">Netflix</p>
              <p className="m-0 pl-md-3 pl-0 text-black-light" data-testid="item-date-2">
                27 March 2020, at 12:30 PM
              </p>
            </div>
          </div>

          <div className="mt-md-0">
            <p className="m-0 text-green text-bolder" data-testid="item-price-2">+ $2,5000</p>
          </div>
        </div>

        <div className="fs-14 text-uppercase text-black-light text-bolder mt-3" data-testid="subheader-title-2">
          Yesterday
        </div>
        <div className="d-flex justify-between align-items-center mt-md-0 mt-2">
          <div className="d-md-flex align-items-center mt-3">
            <div>
              {" "}
              <DownCircleOutlined className="text-red fs-24 d-sm-none" data-testid="DownCircleOutlined-icon-2"/>{" "}
            </div>
            <div>
              <p className="m-0 text-bolder pl-md-3 pl-0" data-testid="item-text-3">Netflix</p>
              <p className="m-0 pl-md-3 pl-0 text-black-light" data-testid="item-date-3">
                27 March 2020, at 12:30 PM
              </p>
            </div>
          </div>

          <div className="mt-md-0">
            <p className="m-0 text-red text-bolder" data-testid="item-price-3">- $2,5000</p>
          </div>
        </div>

        <div className="d-flex justify-between align-items-center mt-md-0 mt-2">
          <div className="d-md-flex align-items-center mt-3">
            <div>
              <UpCircleOutlined className="text-green fs-24 d-sm-none" data-testid="UpCircleOutlined-icon-2"/>
            </div>
            <div>
              <p className="m-0 text-bolder pl-md-3 pl-0" data-testid="item-text-4">Netflix</p>
              <p className="m-0 pl-md-3 pl-0 text-black-light" data-testid="item-date-4">
                27 March 2020, at 12:30 PM
              </p>
            </div>
          </div>

          <div className="mt-md-0">
            <p className="m-0 text-green text-bolder" data-testid="item-price-4">+ $2,5000</p>
          </div>
        </div>

        <div className="d-flex justify-between align-items-center mt-md-0 mt-2">
          <div className="d-md-flex align-items-center mt-3">
            <div>
              {" "}
              <DownCircleOutlined className="text-red fs-24 d-sm-none" data-testid="DownCircleOutlined-icon-3"/>{" "}
            </div>
            <div>
              <p className="m-0 text-bolder pl-md-3 pl-0" data-testid="item-text-5">Netflix</p>
              <p className="m-0 pl-md-3 pl-0 text-black-light" data-testid="item-date-5">
                27 March 2020, at 12:30 PM
              </p>
            </div>
          </div>

          <div className="mt-md-0">
            <p className="m-0 text-red text-bolder" data-testid="item-price-5">- $2,5000</p>
          </div>
        </div>

        <div className="d-flex justify-between align-items-center mt-md-0 mt-2">
          <div className="d-md-flex align-items-center mt-3">
            <div>
              <UpCircleOutlined className="text-green fs-24 d-sm-none" data-testid="UpCircleOutlined-icon-3"/>
            </div>
            <div>
              <p className="m-0 text-bolder pl-md-3 pl-0" data-testid="item-text-6">Netflix</p>
              <p className="m-0 pl-md-3 pl-0 text-black-light" data-testid="item-date-6">
                27 March 2020, at 12:30 PM
              </p>
            </div>
          </div>

          <div className="mt-md-0">
            <p className="m-0 text-green text-bolder" data-testid="item-price-6">+ $2,5000</p>
          </div>
        </div>

        <div className="d-flex justify-between align-items-center mt-md-0 mt-2">
          <div className="d-md-flex align-items-center mt-3">
            <div>
              <UpCircleOutlined className="text-green fs-24 d-sm-none" data-testid="UpCircleOutlined-icon-4"/>
            </div>
            <div>
              <p className="m-0 text-bolder pl-md-3 pl-0" data-testid="item-text-7">Netflix</p>
              <p className="m-0 pl-md-3 pl-0 text-black-light" data-testid="item-date-7">
                27 March 2020, at 12:30 PM
              </p>
            </div>
          </div>

          <div className="mt-md-0">
            <p className="m-0 text-green text-bolder" data-testid="item-price-7">+ $2,5000</p>
          </div>
        </div>
      </Card>
    </>
  );
};

export default TransactionList;
