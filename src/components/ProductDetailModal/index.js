import React, { useState, useEffect } from 'react'
import './ProductDetailModal.scss'

import { productData } from '../../utils/dummy-data'
import { Button, Col, Row, Tag } from 'antd'
import ReactImageGallery from 'react-image-gallery'
import { formatter } from '../../utils/commonFunction'
import {
    EditOutlined,
    DeleteOutlined,
} from '@ant-design/icons';

import { useNavigate } from 'react-router-dom';
import DeleteModal from '../../components/DeleteModal'

const ProductDetailModal = (props) => {

    const {idKey} = props;

    const navigate = useNavigate();

    const [product, setproduct] = useState()
    const [imageList, setImageList] = useState(null)
    const [isDeletePopup, setIsDeletePopup] = useState(false)

    let innerWidth = window.innerWidth;

    useEffect(() => {
        let product = productData.find((item) => item.key === idKey)
        setproduct(product)
    }, [idKey])

    useEffect(() => {

        
        let images = [];
        product?.imageList?.map((item) => {
            images.push({
                original: item,
                thumbnail: item,
              })
            
        })
        setImageList(images)
    }, [product])

    
    const onClickEdit = (id) => {
        navigate('/product/edit', { state: { key: id } })
    }

    const onClickDelete = (id) => {
        console.log(id,"id")
        setIsDeletePopup(true)
    }

    const onClickOnOk = () => {
        setIsDeletePopup(false)
    }

    const onClickOnCancel = () => {
        setIsDeletePopup(false)
    }

    return (
        <div className='p-3 rounded scrollInSm'>

            <DeleteModal openModal={isDeletePopup} onOk={onClickOnOk} onCancel={onClickOnCancel} />

            <div className='product-box'>
                {
                    product ?
                    <Row gutter={[24,24]}>

                        <Col xs={24} md={12} className="fs-18 mb-3 productDetailImageGallary" data-testid="react-galley">
                            <ReactImageGallery items={imageList} thumbnailPosition={innerWidth > 480 ? 'left' : 'bottom'} disableThumbnailSwipe={true} slideDuration={200} />
                        </Col>
                        <Col xs={24} md={12} className=" mb-3 modalDetailRight">
                            <Row className='mb-3'>
                                <Col xs={24} md={24} className='fs-24 text-bolder mb-3' data-testid="product-name">{product?.name || ''}</Col>
                                <Col xs={24} md={24} className=' items-center fs-22 justify-end text-bolder text-primary' data-testid="product-price">{formatter(product?.price) || ''}</Col>
                            </Row>
                            <Row className='mb-3'>
                                <Col xs={24} className='product-des' data-testid="product-description">
                                    {product?.description || ''}
                                </Col>
                            </Row>
                            <Row className='mb-4'>
                                <Col xs={24} className='product-des' data-testid="product-companies">

                                    {product?.companies?.map((tag, index) => {
                                        let color = tag.length > 5 ? 'geekblue' : 'green';
                                        tag === 'apple' ? color='green' 
                                        : tag === 'samsung' ? color='blue'
                                        : tag === 'sony' ? color='purple'
                                        : tag === 'oneplus' ? color='red'
                                        : tag === 'amazon' ? color='orange'
                                        : color='volcano';
                                        
                                        return (
                                            <Tag color={color} key={index} >
                                                {tag.toUpperCase()}
                                            </Tag>
                                        );
                                    })}
                                </Col>
                            </Row>
                            <Row gutter={[24,24]}>
                                <Col xs={24} md={12}>
                                    <Button type="primary" block size='large' icon={<EditOutlined />} onClick={()=>onClickEdit(product?.key)}>Edit Product</Button>
                                </Col>
                                <Col xs={24} md={12}>
                                    <Button type="primary" block size='large' danger icon={<DeleteOutlined />} onClick={()=>onClickDelete(product?.key)} data-testid="dlt-btn-product">Delete Product</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    : 'loading'
                }
            </div>
        </div>
    )
}

export default ProductDetailModal