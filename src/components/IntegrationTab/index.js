import React, { useState } from 'react'
import './IntegrationTab.scss'
import { Avatar, Button, Card, Col, Divider, Row, Switch, message } from 'antd'
import IntegraionModal from '../IntegraionModal';
import { integraionData } from '../../constants';

const IntegrationTab = () => {

  // const [messageApi, contextHolder] = message.useMessage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inteData, setinteData] = useState([...integraionData])
  const [singleInterData, setsingleInterData] = useState(null)

  const handleOk = (id) => {

    let ind = inteData?.findIndex((item) => item?.id === id);
    inteData[ind].isInstall = !inteData[ind]?.isInstall
    setinteData((pre) => { return [...pre] })

    message.success(inteData[ind].isInstall ? `${inteData[ind].toolName} app is installed` : `${inteData[ind].toolName} app is uninstalled`);

    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onChangeCardSwitch = (checked) => {
    console.log(`switch to ${checked}`);
  };

  const onClickViewIntegration = (item) => {
    setsingleInterData(item)
    setIsModalOpen(true);
  }


  return (
    <div className='main-integration-box' data-testid='main-integration-box-test-id'>

      <IntegraionModal isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel} singleInterData={singleInterData} />

      {
        inteData?.filter((item) =>  item?.isInstall === true ).length > 0 ?
      <Row className='mt-2'>
        <Col xs={24} className="fs-18 text-bolder">Installed</Col>
      </Row>
      :null}
      <Row className='mt-4' gutter={[24, 24]}>
        {
          inteData?.filter((item) =>  item?.isInstall === true )?.map((item, index) => (
              <Col xs={8} key={index}>
                <Card
                  title={
                    <div className='d-flex align-items-center'>
                      <Avatar size={40} shape='square' src={item?.imageLink} />
                      <div className='ml-2'>{item?.toolName}</div>
                    </div>
                  }
                  extra={
                    item?.isInstall ?
                      <Switch onChange={onChangeCardSwitch} data-testid='integration-switch-test-id'/>
                      : null
                  }
                  className='integration-card'
                >
                  <div className='main-integration-card-body'>
                    <Row className='pl-5 pr-5 pt-3 pb-4'>
                      <Col xs={24} className='text-gray'>
                        {item?.cardDescription}
                      </Col>
                    </Row>
                    <Divider className='m-0' />
                    <Row justify={'end'} className=''>
                      <Col className='p-2'>
                        <Button type="text" className='text-bolder text-gray' onClick={() => onClickViewIntegration(item)} data-testid={`view-install-integartion-${index}`}>View Intergration</Button>
                      </Col>
                    </Row>
                  </div>
                </Card>
              </Col>
          ))
        }
      </Row>


      {
        inteData?.filter((item) =>  item?.isInstall === false ).length > 0 ?
          <Row className='mt-5'>
            <Col xs={24} className="fs-18 text-bolder">Available</Col>
          </Row>
          : null
      }
      <Row className='mt-4' gutter={[24, 24]}>
        {
          inteData?.filter((item) =>  item?.isInstall === false )?.map((item,index) => (
              <Col xs={8} key={index}>
                <Card
                  title={
                    <div className='d-flex align-items-center'>
                      <Avatar size={40} shape='square' src={item?.imageLink} />
                      <div className='ml-2'>{item?.toolName}</div>
                    </div>
                  }
                  extra={
                    item?.isInstall ?
                      <Switch onChange={onChangeCardSwitch} />
                      : null
                  }
                  className='integration-card'
                >
                  <div className='main-integration-card-body'>
                    <Row className='pl-5 pr-5 pt-3 pb-4'>
                      <Col xs={24} className='text-gray'>
                        {item?.cardDescription}
                      </Col>
                    </Row>
                    <Divider className='m-0' />
                    <Row justify={'end'} className=''>
                      <Col className='p-2'>
                        <Button type="text" className='text-bolder text-gray' onClick={() => onClickViewIntegration(item)} data-testid={`view-uninstall-integartion-${index}`}>View Intergration</Button>
                      </Col>
                    </Row>
                  </div>
                </Card>
              </Col>
          ))
        }
      </Row>


    </div>
  )
}

export default IntegrationTab