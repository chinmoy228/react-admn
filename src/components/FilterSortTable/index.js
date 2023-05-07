import { Table } from 'antd'
import React from 'react'
import './FilterSortTable.scss'

const FilterSortTable = (props) => {

    const { dataSource, columns, heading } = props

    return (
        <div data-testid="filter-sort-table">
            {heading ? <div className="fs-18 text-bolder mb-3" data-testid="filter-sort-table-heading">{heading}</div>:null}
            <div className='table-box'>
                <Table dataSource={dataSource} columns={columns} pagination={false} scroll={{x: 400}}/>
            </div>
        </div>
    )
}

export default FilterSortTable