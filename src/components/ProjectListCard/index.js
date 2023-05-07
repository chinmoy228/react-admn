import React, { useState } from "react";
import { Card, Avatar } from "antd";
import { Link } from "react-router-dom";
import { RiseOutlined, AntDesignOutlined } from "@ant-design/icons";
import DeleteModal from "../DeleteModal";

const ProjectListCard = (props) => {
  const { projectsData } = props;
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
    <div key={projectsData?.id} className="mt-3">
      <Card
        hoverable
        className="card-with-shadow shadow-md rounded mt-md-0 mt-4"
      >
        <div className="d-md-flex justify-between align-items-center">
          <div className="d-flex align-items-center">
            <RiseOutlined className="bg-primary-light rounded-full text-primary fs-20  p-2 d-sm-none" data-testid="RiseOutlined-icon"/>
            <p className="m-0 pl-md-3 text-primary fs-18 text-bolder" data-testid="project-title">
              {projectsData?.title}
            </p>
          </div>
          <div className="d-flex align-items-center">
            <p className="m-0 text-black-light pr-md-4 mt-2 mt-md-0 order-sm-2 pl-sm-3" data-testid="project-date">{projectsData?.dateTime}</p>
            <Avatar.Group
              maxCount={3}
              maxPopoverTrigger="click"
              lg="large"
              xs="small"
              className="mt-2 mt-md-0 order-sm-1 "
              maxStyle={{
                color: "#f56a00",
                backgroundColor: "#fde3cf",
                cursor: "pointer",
              }}
              data-testid="project-avtar"
            >
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" data-testid="project-avtar-1"/>
              <Avatar className="bg-primary" data-testid="project-avtar-2">K</Avatar>
              <Avatar
                className="bg-primary"
                icon={<AntDesignOutlined />}
                data-testid="project-avtar-3"
              />
            </Avatar.Group>
          </div>
          <div className="mt-2 mt-md-0">
            <Link data-testid="edit-btn">edit</Link> <span className="text-gray">|</span> <Link onClick={onClickModal} data-testid="delete-btn-project"> Delete</Link>
          </div>
        </div>
      </Card>
    </div>
    {openModal ? <DeleteModal openModal={openModal} onOk={onOk} onCancel={onCancel}  /> : null }
    </>
  );
};

export default ProjectListCard;
