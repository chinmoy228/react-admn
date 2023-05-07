import React, { useState, useEffect } from 'react'
import './ProductDetail.scss'

import { useSearchParams } from 'react-router-dom'
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

const ProductDetail = () => {

    const [searchParams] = useSearchParams();

    const navigate = useNavigate();

    const [product, setproduct] = useState()
    const [imageList, setImageList] = useState(null)
    const [isDeletePopup, setIsDeletePopup] = useState(false)

    let id = searchParams.get('key');
    

    let innerWidth = window.innerWidth;

    useEffect(() => {
        let product = productData.find((item) => item.key === id)
        setproduct(product)
    }, [id])

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
        // console.log(id)
        setIsDeletePopup(true)
    }

    const onClickOnOk = () => {
        setIsDeletePopup(false)
    }

    const onClickOnCancel = () => {
        setIsDeletePopup(false)
    }

    return (
        <div className='p-3 shadow-md rounded bg-white'>

            <DeleteModal openModal={isDeletePopup} onOk={onClickOnOk} onCancel={onClickOnCancel} />

            <div className='product-box'>
                {
                    product ?
                    <Row gutter={[24,24]}>

                        <Col xs={24} md={12} className="fs-18 mb-3 productDetailImageGallary">
                            <ReactImageGallery items={imageList} thumbnailPosition={innerWidth > 480 ? 'left' : 'bottom'} disableThumbnailSwipe={true} slideDuration={200} data-testid="React-Image-Gallery"/>
                        </Col>
                        <Col xs={24} md={12} className=" mb-3">
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
                                            <Tag color={color} key={index}>
                                                {tag.toUpperCase()}
                                            </Tag>
                                        );
                                    })}
                                </Col>
                            </Row>
                            <Row gutter={[24,24]}>
                                <Col xs={24} md={12}>
                                    <Button type="primary" block size='large' icon={<EditOutlined />} onClick={()=>onClickEdit(product?.key)} data-testid='edit-product-id'>Edit Product</Button>
                                </Col>
                                <Col xs={24} md={12}>
                                    <Button type="primary" block size='large' danger icon={<DeleteOutlined />} onClick={()=>onClickDelete(product?.key)} data-testid='delete-product-id'>Delete Product</Button>
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

export default ProductDetail