import { Table } from 'antd'
import React from 'react'
import './PaginationTable.scss'

const PaginationTable = (props) => {

    const { dataSource, columns, heading, numOfRow } = props

    return (
        <div data-testid="pagination-table">
            {heading ? <div className="fs-18 text-bolder mb-3" data-testid="pagination-table-heading">{heading}</div>:null}
            <div className='table-box'>
                <Table dataSource={dataSource} columns={columns} pagination={{ pageSize: numOfRow }} scroll={{x: 400}}/>
            </div>
        </div>
    )
}

export default PaginationTable