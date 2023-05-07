import React from 'react'
import './Charts.scss'
import { useLocation, useParams } from "react-router-dom"
import { Col, Row } from 'antd';
import 'chart.js/auto';
import PieChart from '../../components/PieChart';
import DoughnutChart from '../../components/DoughnutChart';
import BarChart from '../../components/BarChart';
import LineChart from '../../components/LineChart';
import GroupChart from '../../components/GroupChart';

const Charts = () => {

  //const location = useLocation();
  let { chartType } = useParams();

  const values = [
    12, 23, 20, 56, 33
  ];
  const labels = ['React Js', 'Node Js', 'Java', 'Python', 'C++']

  const groupData = [
    {
      label: "American Express",
      data: [3, 5, 6, 7, 3, 5, 6, 7]
    },
    {
      label: "Mastercard",
      data: [4, 7, 3, 6, 10, 7, 4, 6]
    },
    {
      label: "Paypal",
      data: [10, 7, 4, 6, 9, 7, 3, 10]
    },
    {
      label: "Visa",
      data: [6, 9, 7, 3, 10, 7, 4, 6]
    }
  ]

  return (
    <div>
      {
        chartType === 'bar' ?
          <Row gutter={[24, 24]}>
            <Col xs={24} md={12}>
              <div className='rounded bg-white shadow-md p-5'>
                <div className='fs-18 text-bolder mb-3' data-testid="bar-chart-text">Bar Chart</div>
                <BarChart className='mt-3 pieChartSize' values={values} isShowLegend={false} labels={labels} showXaxis={false} showYaxis={false} tooltipLabel='Marks' />
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div className='rounded bg-white shadow-md p-5'>
                <div className='fs-18 text-bolder mb-3' data-testid="bar-chart-axis-text">Bar Chart [ With Axis ]</div>
                <BarChart className='mt-3 pieChartSize' values={values} isShowLegend={false} labels={labels} showXaxis={true} showYaxis={true} isGrid={false} tooltipLabel='Marks' />
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div className='rounded bg-white shadow-md p-5'>
                <div className='fs-18 text-bolder mb-3' data-testid="bar-chart-grid-text">Bar Chart [ With Grid ]</div>
                <BarChart className='mt-3 pieChartSize' values={values} isShowLegend={false} labels={labels} showXaxis={true} showYaxis={true} isGrid={true} tooltipLabel='Marks' />
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div className='rounded bg-white shadow-md p-5'>
                <div className='fs-18 text-bolder mb-3' data-testid="bar-chart-legend-text">Bar Chart [ With Legend ]</div>
                <BarChart className='mt-3 pieChartSize' values={values} isShowLegend={true} labels={labels} showXaxis={true} showYaxis={true} tooltipLabel='Marks' />
              </div>
            </Col>
            <Col xs={24} md={24} className='rounded bg-white shadow-md'>
              <div className='mb-5 p-5 horizontalChartSize'>
                <div className='fs-18 text-bolder mb-3' data-testid="bar-chart-horizontal-text">Horizontal Bar Chart</div>
                <BarChart className='mt-3 pieChartSize' values={values} isShowLegend={false} labels={labels} showXaxis={true} showYaxis={true} isHorizontal={true} tooltipLabel='Marks' />
              </div>
            </Col>
          </Row>

          :
          chartType === 'group' ?
            <Row gutter={[24, 24]}>
              <Col xs={24} md={12}>
                <div className='rounded bg-white shadow-md p-5'>
                  <div className='fs-18 text-bolder mb-3' data-testid="group-chat-text">Group Chart</div>
                  <GroupChart className='mt-3 pieChartSize' values={groupData} isShowLegend={false} labels={labels} showXaxis={false} showYaxis={false} />
                </div>
              </Col>

              <Col xs={24} md={12}>
                <div className='rounded bg-white shadow-md p-5'>
                  <div className='fs-18 text-bolder mb-3'>Group Chart [ With axis ]</div>
                  <GroupChart className='mt-3 pieChartSize' values={groupData} isShowLegend={false} labels={labels} showXaxis={true} showYaxis={true} />
                </div>
              </Col>

              <Col xs={24} md={12}>
                <div className='rounded bg-white shadow-md p-5'>
                  <div className='fs-18 text-bolder mb-3'>Group Chart [ With Grid ]</div>
                  <GroupChart className='mt-3 pieChartSize' values={groupData} isShowLegend={false} labels={labels} showXaxis={true} showYaxis={true} isGrid={true} />
                </div>
              </Col>

              <Col xs={24} md={12}>
                <div className='rounded bg-white shadow-md p-5'>
                  <div className='fs-18 text-bolder mb-3'>Group Chart [ With Legend ]</div>
                  <GroupChart className='mt-3 pieChartSize' values={groupData} isShowLegend={true} labels={labels} showXaxis={true} showYaxis={true} />
                </div>
              </Col>

              <Col xs={24} md={24} className='rounded bg-white shadow-md'>
                  <div className='mb-5 p-5 horizontalChartSize'>
                    <div className='fs-18 text-bolder mb-3'>Horizontal Group Chart</div>
                    <GroupChart className='mb-5 pieChartSize' values={groupData} isShowLegend={false} labels={labels} showXaxis={true} showYaxis={true} isGrid={false} isHorizontal={true} />
                  </div>
                </Col>
            </Row>
            :
            chartType === 'linebar' ?
              <Row gutter={[24, 24]}>
                <Col xs={24} md={12}>
                  <div className='rounded bg-white shadow-md p-5'>
                    <div className='fs-18 text-bolder mb-3'>Line Chart</div>
                    <LineChart className='mt-3 pieChartSize' values={values} isShowLegend={false} labels={labels} showXaxis={false} showYaxis={false} tooltipLabel='Marks' />
                  </div>
                </Col>
                <Col xs={24} md={12}>
                  <div className='rounded bg-white shadow-md p-5'>
                    <div className='fs-18 text-bolder mb-3'>Line Chart [ With Axis ]</div>
                    <LineChart className='mt-3 pieChartSize' values={values} isShowLegend={false} labels={labels} showXaxis={true} showYaxis={true} isGrid={false} tooltipLabel='Marks' />
                  </div>
                </Col>
                <Col xs={24} md={12}>
                  <div className='rounded bg-white shadow-md p-5'>
                    <div className='fs-18 text-bolder mb-3'>Line Chart [ With Grid ]</div>
                    <LineChart className='mt-3 pieChartSize' values={values} isShowLegend={false} labels={labels} showXaxis={true} showYaxis={true} isGrid={true} tooltipLabel='Marks' />
                  </div>
                </Col>
                <Col xs={24} md={12}>
                  <div className='rounded bg-white shadow-md p-5'>
                    <div className='fs-18 text-bolder mb-3'>Line Chart [ With Legend ]</div>
                    <LineChart className='mt-3 pieChartSize' values={values} isShowLegend={true} labels={labels} showXaxis={true} showYaxis={true} tooltipLabel='Marks' />
                  </div>
                </Col>
                <Col xs={24} md={24} className='rounded bg-white shadow-md'>
                  <div className='mb-5 p-5 horizontalChartSize'>
                    <div className='fs-18 text-bolder mb-3'>Horizontal Line Chart</div>
                    <LineChart className='mt-3 pieChartSize' values={values} isShowLegend={false} labels={labels} showXaxis={true} showYaxis={true} isHorizontal={true} tooltipLabel='Marks' />
                  </div>
                </Col>
              </Row>
              :
              chartType === 'pie' ?
                <Row gutter={[24, 24]}>
                  <Col xs={24} md={8}>
                    <div className='rounded bg-white shadow-md p-5'>
                      <div className='fs-18 text-bolder mb-3'>Pie Chart</div>
                      <PieChart className='mt-3 pieChartSize' values={values} isShowLegend={false} labels={labels} showXaxis={false} showYaxis={false} />
                    </div>
                  </Col>
                  <Col xs={24} md={8}>
                    <div className='rounded bg-white shadow-md p-5'>
                      <div className='fs-18 text-bolder mb-3'>Pie Chart [ With Axis ]</div>
                      <PieChart className='mt-3 pieChartSize' values={values} isShowLegend={false} labels={labels} showXaxis={true} showYaxis={true} />
                    </div>
                  </Col>
                  <Col xs={24} md={8}>
                    <div className='rounded bg-white shadow-md p-5'>
                      <div className='fs-18 text-bolder mb-3'>Pie Chart [ With Legend ]</div>
                      <PieChart className='mt-3 pieChartSize' values={values} isShowLegend={true} labels={labels} showXaxis={false} showYaxis={false} />
                    </div>
                  </Col>
                  <Col xs={24} md={8}>
                    <div className='rounded bg-white shadow-md p-5'>
                      <div className='fs-18 text-bolder mb-3'>Pie Chart [ With Axis & Legend ]</div>
                      <PieChart className='mt-3 pieChartSize' values={values} isShowLegend={true} labels={labels} showXaxis={true} showYaxis={true} />
                    </div>
                  </Col>
                </Row>
                :
                chartType === 'doughnut' ?
                  <Row gutter={[24, 24]}>
                    <Col xs={24} md={8}>
                      <div className='rounded bg-white shadow-md p-5'>
                        <div className='fs-18 text-bolder mb-3'>Doughnut Chart</div>
                        <DoughnutChart className='mt-3 pieChartSize' values={values} isShowLegend={false} labels={labels} showXaxis={false} showYaxis={false} />
                      </div>
                    </Col>
                    <Col xs={24} md={8}>
                      <div className='rounded bg-white shadow-md p-5'>
                        <div className='fs-18 text-bolder mb-3'>Doughnut Chart [ With Axis ]</div>
                        <DoughnutChart className='mt-3 pieChartSize' values={values} isShowLegend={false} labels={labels} showXaxis={true} showYaxis={true} />
                      </div>
                    </Col>
                    <Col xs={24} md={8}>
                      <div className='rounded bg-white shadow-md p-5'>
                        <div className='fs-18 text-bolder mb-3'>Doughnut Chart [ With Legend ]</div>
                        <DoughnutChart className='mt-3 pieChartSize' values={values} isShowLegend={true} labels={labels} showXaxis={false} showYaxis={false} />
                      </div>
                    </Col>
                    <Col xs={24} md={8}>
                      <div className='rounded bg-white shadow-md p-5'>
                        <div className='fs-18 text-bolder mb-3'>Doughnut Chart [ With Axis & Legend ]</div>
                        <DoughnutChart className='mt-3 pieChartSize' values={values} isShowLegend={true} labels={labels} showXaxis={true} showYaxis={true} />
                      </div>
                    </Col>
                  </Row>
                  : null
      }
    </div>
  )
}

export default Charts