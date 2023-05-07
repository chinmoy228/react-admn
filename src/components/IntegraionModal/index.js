import { Avatar, Button, Col, Modal, Row } from 'antd'
import React from 'react'

const IntegraionModal = (props) => {

    const { isModalOpen, handleOk, handleCancel, singleInterData } = props;

    return (
        <Modal
            title={
                singleInterData ?
                    <div className='d-flex align-items-center'>
                        <Avatar size={40} shape='square' src={singleInterData?.imageLink} />
                        <div className='ml-2'>
                            <div className=''>{singleInterData?.toolName}</div>
                            <div className='text-gray text-normal fs-14'>{singleInterData?.toolDescription}</div>
                        </div>
                    </div>
                    : null
            }
            open={isModalOpen}
            onCancel={handleCancel}
            width={620}
            footer={[
                <Button key="back" type='text' size='large' className='pl-4 pr-4' onClick={handleCancel} data-testid='integration-cancel-btn'>
                    Cancel
                </Button>,
                <Button key="submit" type="primary" size='large' className='pl-4 pr-4' onClick={() => handleOk(singleInterData?.id)} data-testid='integration-install-btn'>
                    {singleInterData?.isInstall ? 'Uninstall' : 'Install'}
                </Button>,
            ]}
            data-testid='main-integration-modal-test-id'
        >
            <div className='integraion-modal-body'>
                <Row className='mt-3'>
                    <Col xs={24} className='text-bolder'>{`About ${singleInterData?.toolName}`}</Col>
                    <Col xs={24} className='text-gray mt-1'>{singleInterData?.aboutDescription}</Col>
                </Row>
                <Row className='mt-3'>
                    <Col xs={24} className='text-bolder'>Key Features</Col>
                    <Col xs={24} className='text-gray mt-1'>
                        <ul className='m-0 pl-3'>
                            {singleInterData?.keyFeatures?.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </Col>
                </Row>
            </div>
        </Modal>
    )
}

export default IntegraionModal