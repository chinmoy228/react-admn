import React from "react";
import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const DeleteModal = (props) => {
  const { openModal, onCancel, onOk } = props;
  return (
    <>
      <Modal centered data-testid="delete-modal" title="Want to delete the product?" open={openModal} onOk={onOk} onCancel={onCancel} okText="Delete" okButtonProps={{danger:true}}>
        <div className="d-flex">
          <ExclamationCircleOutlined className="text-red fs-24 pr-3 flex items-start mt-4" />
          <p className=""> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
      </Modal>
    </>
  );
};

export default DeleteModal;
