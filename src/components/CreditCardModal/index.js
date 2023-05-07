import { Button, Checkbox, Col, Form, Input, Modal, Row, Tooltip } from 'antd'
import React from 'react'

import {
    CreditCardFilled,
    CalendarFilled,
    InfoCircleFilled
} from "@ant-design/icons";
import { formatCvv, formatExpireDate, formatPhoneNumber } from '../../utils/commonFunction';
import moment from 'moment';

const CreditCardModal = (props) => {

    const { isOpenCardModal, onCancelEditCard, onFinishCardEdit, singleCardData } = props;
    // const [form] = Form.useForm();
    return (
        <Modal title={<div className='fs-18 text-bolder'>Edit Credit Card</div>} open={isOpenCardModal} footer={false} onCancel={onCancelEditCard} destroyOnClose data-testid='add-edit-credit-card-modal'>

            <Form
                name="basic"
                onFinish={onFinishCardEdit}
                autoComplete="off"
                layout='vertical'
                initialValues={{
                    cardId:singleCardData?.id || Date.now(),
                    cardHolderName: singleCardData?.cardHoldername || '',
                    creditCardNumber: singleCardData ? singleCardData?.cardNumber : '',
                    expDate: singleCardData ? moment(singleCardData?.expDate).format("MM/YY") : '',
                    cvv: singleCardData ? singleCardData?.cvv : '',
                    remember: singleCardData ? singleCardData?.isDefault
                        : false,
                }}
            >
                <Row gutter={[24, 6]}>
                    <Col xs={24} md={24} >
                        <Form.Item
                            name="cardId"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter your name on card!',
                                },
                            ]}
                            requiredMark='optional'
                        >
                            <Input type='hidden' />
                        </Form.Item>
                        <Form.Item
                            label='Card holder name'
                            name="cardHolderName"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter your name on card!',
                                },
                            ]}
                            requiredMark='optional'
                        // initialValue={singleCardData?.cardHoldername || ''}
                        >
                            <Input size="large" placeholder="Card Holder Name" data-testid='card-holder-name-test-id' />
                        </Form.Item>
                    </Col>

                    <Col xs={24} md={24}>
                        <Form.Item
                            label='Credit Card Number'
                            name="creditCardNumber"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter your credit card number!',
                                },
                            ]}
                            requiredMark='optional'
                            normalize={(e) => formatPhoneNumber(e)}
                        >
                            <Input size="large" placeholder="&#x2022;&#x2022;&#x2022;&#x2022; &#x2022;&#x2022;&#x2022;&#x2022; &#x2022;&#x2022;&#x2022;&#x2022; &#x2022;&#x2022;&#x2022;&#x2022;" className='d-flex align-items-center' suffix={<CreditCardFilled className='text-gray' />} data-testid='card-number-test-id' />
                        </Form.Item>
                    </Col>

                    <Col xs={24} md={12}>
                        <Form.Item
                            label='Expiration date'
                            name="expDate"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter card expiration date!',
                                },
                            ]}
                            requiredMark='optional'
                            normalize={(e) => formatExpireDate(e)}

                        >
                            <Input size="large" placeholder="12/23" suffix={<CalendarFilled className='text-gray' />} data-testid='card-exp-date-test-id' />
                        </Form.Item>
                    </Col>

                    <Col xs={24} md={12}>
                        <Form.Item
                            label='CVV'
                            name="cvv"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter card cvv number!',
                                },
                            ]}
                            requiredMark='optional'
                            normalize={(e) => formatCvv(e)}
                        >
                            <Input size="large" placeholder="&#x2022;&#x2022;&#x2022;" suffix={<Tooltip title="The CVV/CVC code is located on the back of your credit/debit card onthe right side of the white signature strip"><InfoCircleFilled className='text-gray' /></Tooltip>} data-testid='card-cvv-test-id' />
                        </Form.Item>
                    </Col>

                    <Col xs={24} md={24}>
                        <Form.Item
                            name="remember"
                            valuePropName="checked"
                        >
                            <Checkbox size='large'>Set this card as primary</Checkbox>
                        </Form.Item>
                    </Col>


                    <Col xs={24} md={24}>
                        <Form.Item className="mb-2">
                            <Button
                                type="primary"
                                size="large"
                                htmlType="submit"
                                block
                                data-testid='add-edit-credit-card-submit-btn-test-id'
                            >
                                {singleCardData !== null ? 'Edit' : 'Add'}
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Modal>
    )
}

export default CreditCardModal