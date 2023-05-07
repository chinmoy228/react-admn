import React, { useState, useRef, useMemo, useEffect } from 'react'
import './Tables.scss'
import { Button, Col, Divider, Input, Row, Space, Tag } from 'antd'
import ActionTagTable from '../../components/ActionTagTable';
import NormalTable from '../../components/NormalTable';
import PaginationTable from '../../components/PaginationTable';
import { actionTagData, columns, combineDataSource, dataSource, dataSourcePagination, filterAndSortData } from '../../utils/dummy-data';
import {
  DeleteOutlined,
  EditOutlined,
  SearchOutlined,

} from '@ant-design/icons';
import FilterSortTable from '../../components/FilterSortTable';
import SearchTable from '../../components/SearchTable';
import Highlighter from 'react-highlight-words';
import ScrollTable from '../../components/ScrollTable';
import CombineTable from '../../components/CombineTable';
import DeleteModal from '../../components/DeleteModal';

const Tables = () => {
    
  const searchInput = useRef(null);

  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const [isShowCloseModal, setIsShowCloseModal] = useState(false)

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
        data-testid='filter-data-test-id'
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
          data-testid='search-input-data-test-id'
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
            data
            data-testid='search-button-data-test-id'
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
            data-testid='reset-button-data-test-id'
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
            data-testid='close-button-data-test-id'
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1890ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const searchTableColumns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    ...getColumnSearchProps('name'),
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
     ...getColumnSearchProps('age'),
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
      ...getColumnSearchProps('gender'),
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      ...getColumnSearchProps('address'),
    },
  ];




  const actionTagColumns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a className='text-primary'>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Detail',
      key: 'detail',
      render: (_, record) => (
        <Space size="middle">
          <a className='text-primary'>{record.name}'s detail</a>
        </Space>
      ),
    },
    {
      title: 'Edit',
      key: 'edit',
      render: (_, key) => (
        <Space size="middle" className="flex justify-center">
          <EditOutlined style={{ fontSize: '14px' }} onClick={() => onclickEdit(key)} data-testid='action-EditOutlinedIcon-test'/>
        </Space>
      ),
    },
    {
      title: 'Delete',
      key: 'delete',
      render: (_, key) => (
        <Space size="middle" className="flex justify-center">
          <DeleteOutlined style={{ color: '#ee4b4f', fontSize: '14px' }} onClick={() => onclickDelete(key)} data-testid='action-DeleteOutlinedIcon-test'/>
        </Space>
      ),
    },
  ];

  const filterAndSortColumns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
      filters: [
        {
          text: 'Male',
          value: 'Male',
        },
        {
          text: 'Female',
          value: 'Female',
        },
      ],
      onFilter: (value, record) => record.gender.startsWith(value),
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      filters: [
        {
          text: 'London',
          value: 'London',
        },
        {
          text: 'New York',
          value: 'New York',
        },
      ],
      onFilter: (value, record) => record.address.startsWith(value),
      width: '40%',
    },
  ];

  const onclickEdit = (key) => {
    //console.log(key)
  }

  const onclickDelete = (key) => {
    //console.log(key)
    setIsShowCloseModal(true)
  }

  const onClickOnOk = () => {
    setIsShowCloseModal(false)
}

const onClickOnCancel = () => {
    setIsShowCloseModal(false)
}

  const onChangeFilterAndSort = (pagination, filters, sorter, extra) => {
    // console.log('params', pagination, filters, sorter, extra);
  };


  const scrollTablecolumns = [
    {
      title: 'Full Name',
      width: 100,
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      width: 100,
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: '1',
    },
    {
      title: 'Column 1',
      dataIndex: 'address',
      key: '2',
    },
    {
      title: 'Column 2',
      dataIndex: 'address',
      key: '3',
    },
    {
      title: 'Column 3',
      dataIndex: 'address',
      key: '4',
    },
    {
      title: 'Column 4',
      dataIndex: 'address',
      key: '5',
    },
    {
      title: 'Column 5',
      dataIndex: 'address',
      key: '6',
    },
    {
      title: 'Column 6',
      dataIndex: 'address',
      key: '7',
    },
    {
      title: 'Column 7',
      dataIndex: 'address',
      key: '8',
    },
    {
      title: 'Column 8',
      dataIndex: 'address',
      key: '9',
    },
    {
      title: 'Action',
      key: 'operation',
      width: 100,
      render: () => <a className='text-primary'>action</a>,
    },
  ];


  const combineTablecolumns = [
    {
      title: 'Full Name',
      width: 100,
      dataIndex: 'name',
      key: 'name',
      ...getColumnSearchProps('name'),
    },
    {
      title: 'Age',
      width: 100,
      dataIndex: 'age',
      key: 'age',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: '1',
      filters: [
        {
          text: 'Male',
          value: 'Male',
        },
        {
          text: 'Female',
          value: 'Female',
        },
      ],
      onFilter: (value, record) => record.gender.startsWith(value),
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Column 1',
      dataIndex: 'address',
      key: '2',
    },
    {
      title: 'Column 2',
      dataIndex: 'address',
      key: '3',
    },
    {
      title: 'Column 3',
      dataIndex: 'address',
      key: '4',
    },
    {
      title: 'Column 4',
      dataIndex: 'address',
      key: '5',
    },
    {
      title: 'Column 5',
      dataIndex: 'address',
      key: '6',
    },
    {
      title: 'Column 6',
      dataIndex: 'address',
      key: '7',
    },
    {
      title: 'Column 7',
      dataIndex: 'address',
      key: '8',
    },
    {
      title: 'Column 8',
      dataIndex: 'address',
      key: '9',
    },
    {
      title: 'Edit',
      key: 'edit',
      width: '5%',
      render: (_, key) => (
        <Space size="middle" className="">
          <EditOutlined style={{ fontSize: '14px' }} onClick={() => onclickEdit(key)} data-testid='combine-table-edite-test-id'/>
        </Space>
      ),
    },
    {
      title: 'Delete',
      key: 'delete',
      width: '5%',
      render: (_, key) => (
        <Space size="middle" className="">
          <DeleteOutlined style={{ color: '#ee4b4f', fontSize: '14px' }} onClick={() => onclickDelete(key)} data-testid='combine-table-delete-test-id'/>
        </Space>
      ),
    },
  ];



  return (
    <div className='tables-main-container p-3 shadow-md rounded bg-white' data-testid="table" >
      <DeleteModal openModal={isShowCloseModal} onOk={onClickOnOk} onCancel={onClickOnCancel}/>
      <Row gutter={[24, 24]}>
        <Col xs={24} md={24} data-testid="normal-table-col">
          <NormalTable heading='Normal Table' dataSource={dataSource} columns={columns} />
        </Col>
        <Divider className='mt-5 mb-5'/>
        <Col xs={24} md={24}>
          <PaginationTable heading='Table With Pagination' dataSource={dataSourcePagination} columns={columns} numOfRow={5} />
        </Col>
        <Divider className='mt-5 mb-5'/>
        <Col xs={24} md={24}>
          <ActionTagTable heading='Table With Tag & Action' dataSource={actionTagData} columns={actionTagColumns} />
        </Col>
        <Divider className='mt-5 mb-5'/>
        <Col xs={24} md={24}>
          <FilterSortTable heading='Table With Filter & Short' dataSource={filterAndSortData} columns={filterAndSortColumns} onChange={onChangeFilterAndSort}  />
        </Col>
        <Divider className='mt-5 mb-5'/>
        <Col xs={24} md={24}>
          <SearchTable heading='Table With Search' dataSource={filterAndSortData} columns={searchTableColumns} />
        </Col>
        <Divider className='mt-5 mb-5'/>
        <Col xs={24} md={24}>
          <ScrollTable heading='Table With Scroll' dataSource={dataSource} columns={scrollTablecolumns} xScrolling={1800} yScrolling={300} />
        </Col>
        <Divider className='mt-5 mb-5'/>
        <Col xs={24} md={24}>
          <CombineTable heading='Combine Table' dataSource={combineDataSource} columns={combineTablecolumns} isShowPagination={true} numOfRow={5} isScroll={true} xScrolling={1800} yScrolling={150} />
        </Col>
      </Row>
    </div>
  )
}

export default Tables