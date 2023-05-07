import React from 'react'
import './SearchTable.scss'
import { Table } from 'antd'

const SearchTable = (props, ref) => {

    const { dataSource, columns, heading } = props

    return (
        <div data-testid="search-table1">
            {heading?<div className="fs-18 text-bolder mb-3" data-testid="search-table-heading">{heading}</div>:null}
            <div className='table-box'>
                <Table dataSource={dataSource} columns={columns} pagination={false} scroll={{x: 400}} data-testid="search-table"/>
            </div>
        </div>
    )
}

export default SearchTable