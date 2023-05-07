import { Table } from 'antd'
import React from 'react'
import './ActionTagTable.scss'

const ActionTagTable = (props) => {

    const { dataSource, columns, heading } = props

    

    return (
        <div data-testid="action-tag-table">
            { heading ? <div className="fs-18 text-bolder mb-3" data-testid="heading-block">{heading}</div> : null}
            <div className='table-box'>
                <Table dataSource={dataSource} columns={columns} pagination={false} scroll={{x: 400}} data-testid="table-with-tag-action"/>
            </div>
        </div>
    )
}

export default ActionTagTable