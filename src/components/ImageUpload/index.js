import React, { useState } from 'react'
import './ImageUpload.scss'

import { Button, Col, Image, notification, Row, Upload } from 'antd'
import {
    UploadOutlined,
    CloseCircleOutlined,
    InboxOutlined
} from '@ant-design/icons';

const { Dragger } = Upload;

const ImageUpload = (props) => {

    const { getSrc, setGetSrc, isDregger } = props;

    const [fileList, setFileList] = useState(null);
    const [uploadedImageSrc, setuploadedImageSrc] = useState([]);
    const [islt2, setIslt2] = useState(false);
    const [isJpgOrPng, setIsJpgOrPng] = useState(false);

    const showUploadListData = {
        showDownloadIcon: false,
        showRemoveIcon: true,
    };

    // const onRemove = (file) => {
    //     setuploadedImageSrc([])
    //     setFileList(null);
    //     console.log('yes come');
    // }

    const dummyRequest = ({ onSuccess }) => {
        setTimeout(() => {
            onSuccess('ok');
        }, 0);
    };

    const beforeUpload = (file) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg';
        setIsJpgOrPng(true);
        if (!isJpgOrPng) {
            setIsJpgOrPng(false);
            notification.error({
                message: 'You can only upload JPG/PNG file!',
                duration: 2,
                className:'for-test'
            });
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        setIslt2(true);
        if (!isLt2M) {
            setIslt2(false);
            notification.error({
                message: 'Image must smaller than 2MB!',
                duration: 2,
            });
        }
        return isJpgOrPng && isLt2M;
    };

    const getBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
    const handleChange  = async(info) => {

        let obj = {}
        let imageUrl = await getBase64(info.file.originFileObj)
        obj.imagebase64 = imageUrl;
        obj = { ...obj, name: info.file.originFileObj?.name, file: info.file.originFileObj }
        let fileListId = [...getSrc, ...[obj]];
        setGetSrc(fileListId);

        return

    };

    const onClickRemove = (src, index) => {

        uploadedImageSrc.splice(index, 1);
        setuploadedImageSrc((pre) => { return [...pre] });

        getSrc.splice(index, 1);
        setGetSrc((pre) => { return [...pre] });

    }
    
    return (
        <div data-testid="img-upload-edit">
            {
                isDregger ?
                    <Dragger
                        name="avatar"
                        customRequest={dummyRequest}
                        listType="text"
                        beforeUpload={beforeUpload}
                        onChange={handleChange}
                        fileList={getSrc}
                        accept=".png,.jpg"
                        className=""
                        showUploadList={false}
                        multiple={false}
                        // onRemove={onRemove}
                        data-testid="upload-input-dragger"
                        >
                        <p className="ant-upload-drag-icon" data-testid="upload-input-dragIcon">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text" data-testid="upload-input-click-text">Click or drag file to this area to upload</p>
                        <p className="ant-upload-hint" data-testid="upload-input-click-description">
                            Support for a single upload. Strictly prohibit from uploading company data or other
                            band files
                        </p>
                    </Dragger>
                    :
                    <Upload
                        name="avatar"
                        customRequest={dummyRequest}
                        listType="text"
                        beforeUpload={beforeUpload}
                        onChange={handleChange}
                        fileList={fileList}
                        accept=".png,.jpg"
                        className=""
                        showUploadList={false}
                        multiple={false}
                        // onRemove={onRemove}
                        data-testid="upload-input"
                    >
                        <Button
                            icon={<UploadOutlined />}
                            size="large"
                            data-testid="upload-input-Btn-Upload"
                        >
                            Click To Upload
                        </Button>
                    </Upload>

            }
            {
                getSrc?.length > 0 ?
                    <Row gutter={[24, 24]} className='mt-3' data-testid='getSrc-image-row'>
                        {
                            getSrc?.map((src, index) =>(
                                    <Col xs={12} md={3} key={index} data-testid={`image-upload-${index}`}>
                                        <div className='imageDivMain' data-testid='close-Image-btn-image-main-div'>
                                            <span className='closeBtn' data-testid='close-Image-btn-up-span'>
                                                <CloseCircleOutlined style={{ 'fontSize': '16px', 'color': '#181818', 'cursor': 'pointer' }} onClick={() => onClickRemove(src, index)} data-testid='close-Image-btn'/>
                                            </span>
                                            <Image
                                                src={src?.imagebase64 || '' }
                                                alt="avatar"
                                                height={100}
                                                width={100}
                                                data-testid='uploaded-image-tag'
                                            >
                                            </Image>
                                        </div>
                                    </Col>
                                )
                            )
                        }
                    </Row>
                    : null
            }
        </div>
    )
}

export default ImageUpload