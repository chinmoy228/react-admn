import React, { useState } from 'react'
import './Product.scss'

import { Button, Col, Modal, Row, Space, Switch, Tag, Tooltip } from 'antd'
import ActionTagTable from '../../components/ActionTagTable'
import {
    EditOutlined,
    DeleteOutlined,
    PlusOutlined,
    EyeOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { productData } from '../../utils/dummy-data'
import { formatter } from '../../utils/commonFunction';
import DeleteModal from '../../components/DeleteModal';
import ProductDetailModal from '../../components/ProductDetailModal';


const Product = () => {

    const navigate = useNavigate();

    const [isShowCloseModal, setIsShowCloseModal] = useState(false)
    const [isOnModal, setIsOnModal] = useState(false)
    const [openDetailInModal, setOpenDetailInModal] = useState(false)
    const [modalKey, setModalKey] = useState(undefined)

    const onclickEdit = (data) => {
        navigate('/product/edit', { state: { key: data?.key } })
    }

    const onclickDelete = (key) => {
        // console.log(key)
        setIsShowCloseModal(true)
    }

    const onClickDetails = (data) => {
        if(isOnModal){
            setOpenDetailInModal(true)
            setModalKey(data?.key)
        }
        else{
            navigate(`/productDetails?key=${data?.key}`)
        }
    }

    const onClickOnOk = () => {
        setIsShowCloseModal(false)
    }

    const onClickOnCancel = () => {
        setIsShowCloseModal(false)
    }

    const actionTagColumns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            width:'25%',
            render: (_, record) => (
                <Space className='text-primary cursor-pointer' size="middle" onClick={() => onClickDetails(record)}>
                    <span >
                        {record.name?.length >= 80
                            ? record.name?.slice(0, 80) + "..."
                            : record.name}</span>
                </Space>
            ),
        },
        {
            title: 'ImageList',
            dataIndex: 'imageList',
            key: 'imageList',
            className: 'd-none',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            width:'10%',
            render: (text) => formatter(text),
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
            
            render: (_, record) => (
                // <Space size="middle">
                <Tooltip placement="top" title={record?.description} arrow={false} className='productTableDescriptionTooltip' overlayStyle={{ width: '600px', minHeight: '20px' }} getPopupContainer={(node) => node}>
                    <div>
                        {record?.description?.length >= 48
                            ? record?.description?.slice(0, 46) + "..."
                            : record?.description}
                    </div>
                </Tooltip>
                // </Space>
            ),
        },
        {
            title: 'Companies',
            key: 'companies',
            dataIndex: 'companies',
            width:'10%',
            render: (_, { companies }) => (
                <>
                    {companies.map((tag, index) => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        tag === 'apple' ? color = 'green'
                            : tag === 'samsung' ? color = 'blue'
                                : tag === 'sony' ? color = 'purple'
                                    : tag === 'oneplus' ? color = 'red'
                                        : tag === 'amazon' ? color = 'orange'
                                            : color = 'volcano';

                        return (
                            <Tag color={color} key={index}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: 'Detail',
            key: 'detail',
            render: (_, record) => (
                <Space size="middle" className="flex justify-center">
                    <EyeOutlined style={{ fontSize: '14px' }} onClick={() => onClickDetails(record)} data-testid='ViewOutlinedIcon-test'/>
                </Space>
            ),
        },
        {
            title: 'Edit',
            key: 'edit',
            render: (_, key) => (
                <Space size="middle" className="flex justify-center">
                    <EditOutlined style={{ fontSize: '14px' }} onClick={() => onclickEdit(key)} data-testid='EditOutlinedIcon-test'/>
                </Space>
            ),
        },
        {
            title: 'Delete',
            key: 'delete',
            render: (_, key) => (
                <Space size="middle" className="flex justify-center">
                    <DeleteOutlined style={{ color: '#ee4b4f', fontSize: '14px' }} onClick={() => onclickDelete(key)} data-testid='DeleteOutlinedIcon-test'/>
                </Space>
            ),
        },
    ];


    const onClickAdd = () => {
        // navigate('/product/add',{state: {key: 2}})
        navigate('/product/add')
    }

    const onChangeDetailsInModal = (checked) => {
        setIsOnModal(checked);
    };

    const onClickOnCancelDetailModal = () => {
        setOpenDetailInModal(false);
    }


    return (
        <div className='p-3 shadow-md rounded bg-white'>
        
            <DeleteModal openModal={isShowCloseModal} onOk={onClickOnOk} onCancel={onClickOnCancel} />

            <Modal
                title="Product Details"
                centered
                open={openDetailInModal}
                onCancel={onClickOnCancelDetailModal}
                footer={false}
                width={1000}
                className='productDetailModal'
                data
            >
                <ProductDetailModal idKey={modalKey}></ProductDetailModal>
            </Modal>

            <div className='product-box'>
                <Row className='mb-3'>
                    <Col xs={12} className="fs-18 text-bolder mb-3" data-testid="product-title">Product Table</Col>
                    <Col xs={12} className='flex justify-end'>
                        <div className='flex'>
                            <Button className='' icon={<PlusOutlined />} type="primary" size='large' onClick={onClickAdd} data-testid="add-btnOn-Add-Product">
                                Add
                            </Button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={24}>
                        <ActionTagTable dataSource={productData} columns={actionTagColumns} />
                    </Col>
                    <Col xs={24} className='mt-5 mb-3'>
                        <div>
                            <Switch onChange={onChangeDetailsInModal} data-testid="switch-element"/>
                            <span className='ml-3' data-testid="switch">Details Open in modal</span>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Product