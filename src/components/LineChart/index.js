import React from 'react'
import './LineChart.scss'
import { Line } from 'react-chartjs-2';
import { theme } from 'antd';
import { bColor, hexTohsl } from '../../utils/commonFunction';

const BarChart = (props) => {

    const { values, isShowLegend, labels, showXaxis, showYaxis, isHorizontal, isGrid, tooltipLabel } = props;

    const {
        token: { colorPrimary },
    } = theme.useToken();

    const hlsaVal = hexTohsl(colorPrimary);



    const barData = {
        
        labels: !isShowLegend ? labels:  [labels],
        datasets: !isShowLegend ? [
            {
                label: tooltipLabel,
                data: values,
                backgroundColor: bColor(values?.length, hlsaVal),
                borderColor: bColor(values?.length, hlsaVal),
                borderWidth: 1,
            }
        ]
        : 
        labels?.map((item, index) => {
            return (
                {
                    label: item,
                    data: [values[index]],
                    backgroundColor: bColor(values?.length,hlsaVal)[index],
                    borderColor: bColor(values?.length,hlsaVal)[index],
                    borderWidth: 1,
                }
            )
        }),
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
    const barConfig = {
        // responsive: true,
        indexAxis: isHorizontal ? 'y' :'x',
        barPercentage: 0.75,
        scales: {
            x: {
                display: showXaxis,
                labelString: 'sdf',
                grid: {
                    display: isGrid ? true : false,
                },
            },
            y: {
                display: showYaxis,
                labelString: 'sdf',
                grid: {
                    display: isGrid ? true : false,
                },
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

    var legendBarData = {
        labels: [tooltipLabel],
        datasets: labels?.map((item, index) => {
            return (
                {
                    label: item,
                    data: [values[index]],
                    backgroundColor: bColor(values?.length,hlsaVal)[index],
                    borderColor: bColor(values?.length,hlsaVal)[index],
                    borderWidth: 1,
                }
            )
        })
     }

    return (
        <Line
            data={isShowLegend ? legendBarData : barData }
            options={barConfig}
            className='pieChartSize'
            data-testid="line-chart"
        />
    )
}

export default BarChart