import React, { useState } from 'react'
import './NotificationTab.scss'

import { Button, Col, Form, Row, message } from 'antd'

import MultiSelectCheckButton from '../MultiSelectCheckButton';
import { GeneralTag, ProjectTag, SalesTag } from '../../constants';

const NotificationTab = () => {

    const [selectedGeneralTags, setSelectedGeneralTags] = useState([...GeneralTag]);
    const [selectedProjectTags, setSelectedProjectTags] = useState([...ProjectTag]);
    const [selectedSalesTags, setSelectedSalesTags] = useState([...SalesTag]);


    const onReset = () => {
        selectedProjectTags?.map((i) => {
            i?.options?.map((j) => {
                if (j.type !== 'Email') {
                    j.selected = false
                } else {
                    j.selected = true
                }
            })
        })
        setSelectedProjectTags((pre) => {
            return [...pre]
        })

        selectedGeneralTags?.map((i) => {
            i?.options?.map((j) => {
                if (j.type !== 'Email') {
                    j.selected = false
                } else {
                    j.selected = true
                }
            })
        })
        setSelectedGeneralTags((pre) => {
            return [...pre]
        })

        selectedSalesTags?.map((i) => {
            i?.options?.map((j) => {
                if (j.type !== 'Email') {
                    j.selected = false
                } else {
                    j.selected = true
                }
            })
        })
        setSelectedSalesTags((pre) => {
            return [...pre]
        })
    }

    const onClickUpdateNotification = () => {
        console.log('selectedGeneralTags',selectedGeneralTags);
        console.log('selectedProjectTags',selectedProjectTags);
        console.log('selectedSalesTags',selectedSalesTags);

        message.success('Notification are updeted');

    }

    return (
        <div className='main-profiletab-box' data-testid='main-notification-box-test-id'>
            <Row className='mt-2'>
                <Col xs={24} className="fs-18 text-bolder">General Notification</Col>
                <Col xs={24} className="fs-14 text-black-light">Select how you'll be notified when the following changes occur.</Col>
            </Row>
            <MultiSelectCheckButton selectedTags={selectedGeneralTags} setSelectedTags={setSelectedGeneralTags} />

            <Row className='mt-5'>
                <Col xs={24} className="fs-18 text-bolder">Project Notification</Col>
                <Col xs={24} className="fs-14 text-black-light">Select how you'll be notified when the project related events happended.</Col>
            </Row>
            <MultiSelectCheckButton selectedTags={selectedProjectTags} setSelectedTags={setSelectedProjectTags} />

            <Row className='mt-5'>
                <Col xs={24} className="fs-18 text-bolder">Sales Notification</Col>
                <Col xs={24} className="fs-14 text-black-light">Select how you'll be notified when any products & order updated.</Col>
            </Row>
            <MultiSelectCheckButton selectedTags={selectedSalesTags} setSelectedTags={setSelectedSalesTags} />



            <div className='mt-2 main-profile-tab-form'>

                <Row className='mt-5' justify={'end'} gutter={24}>
                    <Col xs={12} md={4} className="">
                        <Button size='large' block onClick={onReset} data-testid='notification-reset-btn-test-id'>
                            Reset
                        </Button>
                    </Col>
                    <Col xs={12} md={4} className="">
                        <Button size='large' type="primary" block onClick={onClickUpdateNotification} data-testid='notification-update-btn-test-id'>
                            Update
                        </Button>
                    </Col>
                </Row>

            </div>
        </div>
    )
}

export default NotificationTab