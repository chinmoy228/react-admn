import React from 'react'
import './GroupChart.scss'
import { Bar } from 'react-chartjs-2';
import { theme } from 'antd';
import { bColor, hexTohsl } from '../../utils/commonFunction';

const GroupChart = (props) => {

    const { values, isShowLegend, labels, showXaxis, showYaxis, isHorizontal, isGrid } = props;

    const {
        token: { colorPrimary },
    } = theme.useToken();

    const hlsaVal = hexTohsl(colorPrimary);


    var barChartData = {
        labels: labels,
        datasets:
            values?.map((item, index) => {
                return (
                    {
                        label: item.label,
                        data: item.data,
                        backgroundColor: bColor(values?.length, hlsaVal)[index],
                        borderColor: bColor(values?.length, hlsaVal)[index],
                    }
                )
            })
    };

    var chartOptions = {
        responsive: true,
        indexAxis: isHorizontal ? 'y' : 'x',
        plugins: {
            legend: {
                display: isShowLegend,
                position: "bottom",
            },
            // title: {
            //     display: true,
            //     text: "Chart.js Bar Chart"
            // },
            tooltip: {
                backgroundColor: 'black',
                titleColor: 'white',
                xAlign: 'bottom',
                yAlign: 'center',
                bodyColor: 'white',
            },
        },
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
    }

    return (
        <Bar
            data={barChartData}
            options={chartOptions}
            className='pieChartSize'
            data-testid="bar-cart-grp"
        />
    )
}

export default GroupChart