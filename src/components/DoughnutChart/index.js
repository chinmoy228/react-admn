import React from 'react'
import './DoughnutChart.scss'
import { Doughnut } from 'react-chartjs-2';
import { theme } from 'antd';
import { bColor, hexTohsl } from '../../utils/commonFunction';

const DoughnutChart = (props) => {

  const { values, isShowLegend, labels, showXaxis, showYaxis } = props;

  const {
    token: { colorPrimary },
  } = theme.useToken();

  const hlsaVal = hexTohsl(colorPrimary);

  const doughnutData = {
    labels: labels,
    datasets: [
      {
        label: labels,
        data: values,
        backgroundColor: bColor(values?.length, hlsaVal),
        borderColor: bColor(values?.length, hlsaVal),
        borderWidth: 1,
      },
    ],
    options: {
      tooltips: {
        callbacks: {
          title: 'd',
          label: 'sd',
          afterLabel: 'df',
        },
      },
    },
  };

  const doughnutConfig = {
    responsive: true,
    scales: {
      x: {
        display: showXaxis,
      },
      y: {
        display: showYaxis,
      },
    },
    plugins: {
      legend: {
        display: isShowLegend, //This will do the task
        position: 'bottom',
      },
      tooltip: {
        backgroundColor: 'black',
        titleColor: 'white',
        xAlign: 'bottom',
        yAlign: 'center',
        bodyColor: 'white',
      },
    },
  };

  return (
    <Doughnut
      data={doughnutData}
      options={doughnutConfig}
      className='pieChartSize'
      data-testid="doughnut"
    />
  )
}

export default DoughnutChart