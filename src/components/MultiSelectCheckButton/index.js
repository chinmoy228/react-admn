import CheckableTag from 'antd/lib/tag/CheckableTag'
import React from 'react'

import {
    MailOutlined,
    GlobalOutlined,
    MobileOutlined
} from "@ant-design/icons";
import { Col, Divider, Radio, Row } from 'antd';

const MultiSelectCheckButton = (props) => {

    const { selectedTags, setSelectedTags } = props

    const handleChangeCheckBox = (tag, index) => {
        selectedTags[index]?.options?.map((i) => {
            if (i.type === tag) {
                i.selected = !i.selected
            }
        })
        setSelectedTags((pre) => {
            return [...pre]
        })
    };

    return (
        <div className='main-multiselct-box' data-testid='main-multi-select-test-id'>
            {
                selectedTags?.map((item, i) => (
                    <>
                        <Row className='mt-5'>

                            <Col xs={24} md={8} className="text-bolder">{item?.field}</Col>
                            <Col xs={24} md={16} className="">
                                <Radio.Group buttonStyle='solid'>


                                    {item?.options?.map((tag, index) => (
                                        <>
                                            <CheckableTag
                                                key={index}
                                                checked={item?.options?.filter((i) => i?.selected === true)?.map((item) => { return item?.type }).includes(tag?.type)}
                                                onChange={() => handleChangeCheckBox(tag.type, i)}
                                                className='CheckableTag'
                                                data-testid={`checkable-tag-${item?.field}-${tag.type}`}
                                            >
                                                {
                                                    tag?.type === 'Email' ?
                                                        <span>
                                                            <MailOutlined className='pr-2 fs-16' /> {tag?.type}
                                                        </span>
                                                        : tag?.type === 'Browser' ?
                                                            <span>
                                                                <GlobalOutlined className='pr-2 fs-16' /> {tag?.type}
                                                            </span>
                                                            : tag?.type === 'App' ?
                                                                <span>
                                                                    <MobileOutlined className='pr-2 fs-16' /> {tag?.type}
                                                                </span> : null

                                                }
                                            </CheckableTag>
                                        </>
                                    ))}
                                </Radio.Group>
                            </Col>
                        </Row>
                        <Divider className='mt-5' />
                    </>
                ))
            }
        </div>
    )
}

export default MultiSelectCheckButton