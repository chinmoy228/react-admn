import { Table } from 'antd'
import React from 'react'
import './ScrollTable.scss'

const ScrollTable = (props) => {

    const { dataSource, columns, heading, xScrolling, yScrolling } = props

    return (
        <div data-testid="scroll-table1">
            {heading?<div className="fs-18 text-bolder mb-3" data-testid="scroll-table-heading">{heading}</div>:null}
            <div className='table-box'>
                <Table dataSource={dataSource} columns={columns} pagination={false} scroll={{x: xScrolling, y:yScrolling}}  data-testid="scroll-table"/>
            </div>
        </div>
    )
}

export default ScrollTable