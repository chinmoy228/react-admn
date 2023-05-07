import React, { useState }  from "react";
import { Card } from "antd";
import DeleteModal from "../DeleteModal";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const UserEditCard = () => {
  const [openModal, setOpenModal] = useState(false);
  const onClickModal = () =>{
    setOpenModal(true);
  }
  const onOk = () =>{
    setOpenModal(false);
  }
  const onCancel = () =>{
    setOpenModal(false)
  }
 
  return (
    <>
      <Card className="card-with-shadow rounded shadow-md">
        <div className="fs-18 text-bolder" data-testid="header-title">Billing Information </div>
        {[1, 2, 3].map((key) => 
          <Card bordered={false} className="bg-gray rounded mt-3" key={key}>
            <div className="d-flex justify-between">
              <div className="fs-16 text-bolder" data-testid={`owner-name-${key}`}>Oliver Liam</div>
              <div className="d-flex align-items-center text-bolder">
                <div className="d-flex align-items-center justify-between pr-md-5 cursor-pointer" onClick={onClickModal} data-testid={`delete-action-${key}`}>
                  <DeleteOutlined className="text-red mr-2 " data-testid={`DeleteOutlined-icon-${key}`}/>
                  <p className="text-red m-0 d-sm-none" data-testid="delete-btn"> Delete </p>
                </div>
                <div className="d-flex align-items-center pl-md-5 cursor-pointer">
                  <EditOutlined className=" mr-2" data-testid={`EditOutlined-icon-${key}`}/>
                  <p className="m-0 d-sm-none" data-testid={`edit-btn-${key}`}> Edit</p>
                </div>
              </div>
            </div>
            <div>
              <div className="d-md-flex mt-4">
                <p className="m-0 text-black-light" data-testid={`company-name-title-${key}`}>Company Name :</p>
                <p className="m-0 pl-2 text-bolder" data-testid={`company-name-${key}`}> Viking Burrito</p>
              </div>
              <div className="d-md-flex mt-1">
                <p className="m-0 text-black-light" data-testid={`email-adress-title-${key}`}>Email Address:</p>
                <p className="m-0 pl-2 text-bolder" data-testid={`email-adress-${key}`}> oliver@burrito.com</p>
              </div>
              <div className="d-md-flex mt-1">
                <p className="m-0 text-black-light" data-testid={`vat-number-title-${key}`}>VAT Number:</p>
                <p className="m-0 pl-2 text-bolder" data-testid={`vat-number-${key}`}> FRB1235476</p>
              </div>
            </div>
          </Card>
        )}
      </Card>
      {openModal ? <DeleteModal openModal={openModal} onOk={onOk} onCancel={onCancel} /> : null }
    </>
  );
};

export default UserEditCard;
