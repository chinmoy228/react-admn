import { Table } from 'antd'
import React from 'react'
import './CombineTable.scss'

const CombineTable = (props) => {

    const { dataSource, columns, heading, isShowPagination, numOfRow, isScroll, xScrolling, yScrolling } = props

    return (
        <div data-testid="combine-table">
            {heading?<div className="fs-18 text-bolder mb-3" data-testid="combine-table-heading">{heading}</div>:null}
            <div className='table-box'>
                <Table dataSource={dataSource} columns={columns} pagination={isShowPagination ? {pageSize:numOfRow || 10} : null} scroll={isScroll ? {x:xScrolling, y:yScrolling} : false} data-testid=""/>
            </div>
        </div>
    )
}

export default CombineTable