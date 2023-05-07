import React,{useState} from "react";
import { Row, Col, Card, Tag, Space } from "antd";
import "./dashboard.scss";
import StatisticsCard from "../../components/StatisticsCard";
import { statistics, projectsData } from "../../constants";
import UserEditCard from "../../components/UserEditCard";
import ProjectListCard from "../../components/ProjectListCard";
import TransactionCards from "../../components/TransactionCards";
import OrderOverviewCard from "../../components/OrderOverviewCard";
import TransactionList from "../../components/TransactionList";
import ListWithDownloadBtn from "../../components/listWithDownloadBtn";
import { BankOutlined, SketchOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";
import PieChart from "../../components/PieChart";
import ActionTagTable from "../../components/ActionTagTable";
import { actionTagData } from "../../utils/dummy-data";
import {
  DeleteOutlined,
  EditOutlined,
} from '@ant-design/icons';
import DeleteModal from "../../components/DeleteModal";

const DashBoard = (props) => {

  const location = useLocation();

  const [isShowCloseModal, setIsShowCloseModal] = useState(false)

  const values = [
    12, 23, 20, 56, 33
  ];
  const labels = ['React Js', 'Node Js', 'Java', 'Python', 'C++']

  const onclickEdit = (key) => {
    // console.log(key)
  }

  const onclickDelete = (key) => {
    // console.log(key)
    setIsShowCloseModal(true)
  }

  const onClickOnOk = () => {
    setIsShowCloseModal(false)
}

const onClickOnCancel = () => {
    setIsShowCloseModal(false)
}

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
          <EditOutlined style={{ fontSize: '14px' }} onClick={() => onclickEdit(key)} data-testid="EditOutlinedIcon-test"/>
        </Space>
      ),
    },
    {
      title: 'Delete',
      key: 'delete',
      render: (_, key) => (
        <Space size="middle" className="flex justify-center">
          <DeleteOutlined style={{ color: '#ee4b4f', fontSize: '14px' }} onClick={() => onclickDelete(key)} data-testid="DeleteOutlinedIcon-test"/>
        </Space>
      ),
    },
  ];

  return (
    <>
      <DeleteModal openModal={isShowCloseModal} onOk={onClickOnOk} onCancel={onClickOnCancel}/>
      <Row gutter={24} className='main-dashboard-id' data-testid="statisCard">
        {statistics.map((statisticsData) => (
          <Col md={12} lg={6} sm={24} className="w-100 mt-2" key={statisticsData.id} >
            <StatisticsCard staticData={statisticsData} />
          </Col>
        ))}
      </Row>

      <Row gutter={24} className="mt-5">
        <Col lg={18} md={24} className="w-100">
          <Row gutter={12} data-testid="transction-card">
            <TransactionCards />
          </Row>

          <div className="mt-5" data-testid="project-list-card">
            {projectsData.map((projectsData) => (
              <ProjectListCard projectsData={projectsData} key={projectsData.id} />
            ))}
          </div>
        </Col>
        <Col lg={6} md={24} className="mt-md-0 mt-5 w-100" data-testid="OrderOverviewCard">
          <OrderOverviewCard />
        </Col>
      </Row>

      <Row gutter={24} className="mt-5">
        <Col xs={24}>
          <div className="rounded shadow-md p-3 card-with-shadow" data-testid="ActionTagTable">
            <ActionTagTable heading='Table With Tag & Action' dataSource={actionTagData} columns={actionTagColumns} />
          </div>
        </Col>
      </Row>

      <Row gutter={24} className="mt-5">
        <Col lg={14} md={24} className="w-100" data-testid="UserEditCard">
          <UserEditCard />
        </Col>
        <Col lg={10} md={24} className="w-100" data-testid="TransactionList">
          <TransactionList />
        </Col>
      </Row>

      <Row gutter={24} className="mt-5">
        <Col sm={24} md={8} lg={6} className="w-100">
          <div>
            <Card className="card-with-shadow rounded shadow-md mb-4 d-flex justify-content-center">
              <div className="d-flex justify-content-center">
                <div className="bg-primary text-center p-2 shadow-md rounded">
                  <BankOutlined className="fs-24 text-white " data-testid="BankOutlined-icon" />
                </div>
              </div>
              <div className="text-bolder text-center">
                <p className="fs-14 m-0 pt-2 " data-testid="salary-title">Salary</p>
                <p className="fs-12 m-0 pt-2  text-black-light" data-testid="belong-interactive">
                  Belong Interactive
                </p>
                <hr className="mt-3 text-black-light" />
                <p className="fs-18 m-0 pt-2 text-bolder text-center" data-testid="amount-salary">$ 2000</p>
              </div>
            </Card>
          </div>
          <div className="mt-2">
            <Card className="card-with-shadow rounded shadow-md mb-4 d-flex justify-content-center">
              <div className="d-flex justify-content-center">
                <div className="bg-primary text-center p-2 shadow-md rounded">
                  <SketchOutlined className="fs-24 text-white" data-testid="SketchOutlined-icon"/>
                </div>
              </div>
              <div className="text-bolder text-center">
                <p className="fs-14 m-0 pt-2 " data-testid="Paypal-text">Paypal</p>
                <p className="fs-12 m-0 pt-2  text-black-light" data-testid="freelance-payment">
                  Freelance Payment
                </p>
                <hr className="mt-3 text-black-light" />
                <p className="fs-18 m-0 pt-2 text-bolder text-center" data-testid="amount-paypal">
                  $ 455.00
                </p>
              </div>
            </Card>
          </div>
        </Col>
        <Col sm={24} md={10} lg={8} className="w-100">
          <ListWithDownloadBtn />
        </Col>
        <Col sm={24} md={6} lg={10} className='mt-4 mt-md-0'>
          <div className="rounded shadow-md p-3 card-with-shadow">
            <div className="fs-18 text-bolder mb-3" data-testid="pie-chart-title">
              Pie Chart [ With Axis & Legend ]
            </div>
            <PieChart className='mt-3 pieChartSize' values={values}  isShowLegend={true} labels={labels} showXaxis={true} showYaxis={true} />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default DashBoard;
