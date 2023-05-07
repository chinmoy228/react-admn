import React, { useState } from 'react'
import './BillingTab.scss'
import { Button, Col, Divider, Image, List, Row, Tag, message, } from 'antd'
import {
  PlusOutlined,
} from "@ant-design/icons";
import CreditCardModal from '../CreditCardModal';
import { cardData, upiData } from '../../constants';
import moment from 'moment';


const BillingTab = () => {

  const [isOpenCardModal, setIsOpenCardModal] = useState(false);
  const [cardDataEdit, setCardDataEdit] = useState([...cardData])
  const [singleCardData, setSingleCardData] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  const onClickEditCard = (data) => {
    setSingleCardData(data)
    setIsEdit(true);
    setIsOpenCardModal(true)
  }

  const onCancelEditCard = () => {
    setSingleCardData(null)
    setIsEdit(false);
    setIsOpenCardModal(false)
  }

  const onFinishCardEdit = (value) => {
    if (value) {
      const [month, year] = value?.expDate?.split('/');
      const date = new Date(`20${year}`, month - 1, 1);
      const outputDate = date.toISOString().replace(/Z$/, `+05:30`);
      if (isEdit) {

        const index = cardDataEdit?.findIndex((i) => i.id === value?.cardId)

        let obj = {
          id: value?.cardId,
          cardImg: 'https://elstar.themenate.net/img/others/img-8.png',
          cardHoldername: value?.cardHolderName || '',
          cardNumber: value?.creditCardNumber || '',
          expDate: outputDate || '',
          cvv: value?.cvv || '',
          isDefault: value?.remember || ''
        }

        cardDataEdit[index] = obj;

        setIsEdit(false);
        setIsOpenCardModal(false)
        setSingleCardData(null)

      }
      else {

        let temp = [...cardDataEdit]
        let obj = {
          id: value?.cardId,
          cardImg: 'https://elstar.themenate.net/img/others/img-8.png',
          cardHoldername: value?.cardHolderName || '',
          cardNumber: value?.creditCardNumber || '',
          expDate: outputDate || '',
          cvv: value?.cvv || '',
          isDefault: value?.remember || ''
        }
        temp.push(obj)
        setCardDataEdit(temp);
        setIsOpenCardModal(false)
      }
    }
  };


  const onClickAddCard = () => {
    setIsOpenCardModal(true)
  }

  const onClickEditPayment = (newPageUrl) => {
    window.open(newPageUrl, "_blank")
  }

  const onClickReset = () => {
    setCardDataEdit([...cardData])
  }

  const onClickUpdate = () => {
    message.success('Payment details are updeted');
  }

  return (
    <div className='main-billingtab-box' data-testid='main-billing-box-test-id'>

      <CreditCardModal isOpenCardModal={isOpenCardModal} onCancelEditCard={onCancelEditCard} onFinishCardEdit={onFinishCardEdit} singleCardData={singleCardData} />

      <Row className='mt-2'>
        <Col xs={24} className="fs-18 text-bolder">Payment Method</Col>
        <Col xs={24} className="fs-14 text-black-light">You can update your cards information here</Col>
      </Row>

      <div className='mt-2 main-billing-tab-form'>
        <Row className='mt-5'>
          <Col xs={24} md={8} className="text-bolder">Credit Cards</Col>
          <Col xs={24} md={16} className="">
            <List
              size="large"
              bordered
              dataSource={cardDataEdit}
              renderItem={(item, index) => <List.Item>
                <Row className='w-full' align='middle' key={index}>
                  <Col xs={3}>
                    <Image
                      className='w-full'
                      src={item?.cardImg}
                      preview={false}
                    />
                  </Col>
                  <Col xs={18}>
                    <div className='d-flex'>
                      <div className='text-bolder'>
                        <span className='mr-2'>
                          {item?.cardHoldername}
                        </span>
                        <span className='mr-2'>
                          {'•••• '}{item?.cardNumber?.split(" ")[3]}
                        </span>
                        {
                          item?.isDefault ?
                            <Tag color="cyan" >Default</Tag>
                            : null
                        }
                      </div>
                    </div>
                    <div className='text-gray'>
                      Expire {moment(item?.expDate).format("YYYY MMM")}
                    </div>
                  </Col>
                  <Col xs={3} className='d-flex justify-content-end'>
                    <Button className='text-bolder' onClick={() => onClickEditCard(item)} data-testid={`edit-credit-card-test-id-${index}`}>Edit</Button>
                  </Col>
                </Row>
              </List.Item>}
            />
            <Button className='mt-3 pl-3 pr-4' size='large' icon={<PlusOutlined />} onClick={onClickAddCard} data-testid='add-new-card-btn-test-id'>Add new card</Button>
          </Col>
        </Row>

        <Divider className='mt-5' />

        <Row className='mt-5'>
          <Col xs={24} md={8} className="text-bolder">Other payment methods</Col>
          <Col xs={24} md={16} className="">
            <List
              size="large"
              bordered
              dataSource={upiData}
              renderItem={(item) => <List.Item>
                <Row className='w-full' align='middle'>
                  <Col xs={2}>
                    <Image
                      className='w-full'
                      src={item?.upiIcon}
                      preview={false}
                    />
                  </Col>
                  <Col xs={19}>
                    <div className='d-flex'>
                      <div className='text-bolder'>
                        <span className='mr-2'>
                          {item?.upi}
                        </span>
                      </div>
                    </div>
                  </Col>
                  <Col xs={3} className='d-flex justify-content-end'>
                    <Button className='text-bolder' onClick={() => onClickEditPayment(item?.redirectLink)} data-testid='edit-other-payment-test-id'>
                      Edit
                    </Button>
                  </Col>
                </Row>
              </List.Item>}
            />
          </Col>
        </Row>

        {/* <Row className='mt-5' justify={'end'}>
          <Col xs={12} md={3} >
            <Button className='text-bolder pr-4 pl-4' onClick={onClickReset} size='large'>
              Reset
            </Button>
          </Col>
          <Col xs={12} md={3} >
            <Button className='text-bolder pr-4 pl-4' type='primary' onClick={onClickUpdate} size='large'>
              Update
            </Button>
          </Col>
        </Row> */}

        <Row className='mt-5' justify={'end'} gutter={24}>
          <Col xs={12} md={4} className="">
            <Button size='large' block onClick={onClickReset} data-testid='reset-billing-info-test-id'>
              Reset
            </Button>
          </Col>
          <Col xs={12} md={4} className="">
            <Button size='large' type="primary" block onClick={onClickUpdate} data-testid='update-billing-info-test-id'>
              Update
            </Button>
          </Col>
        </Row>

      </div>
    </div>
  )
}

export default BillingTab