import React from 'react'
import './PieChart.scss'
import { Pie } from 'react-chartjs-2';
import { theme } from 'antd';
import { bColor, hexTohsl } from '../../utils/commonFunction';

const PieChart = (props) => {

    const { values, isShowLegend, labels, showXaxis, showYaxis, classCss } = props;

    const {
        token: { colorPrimary },
    } = theme.useToken();

    const hlsaVal = hexTohsl(colorPrimary);



    const pieData = {
        labels: labels,
        datasets: [
            {
                label: '',
                data: values,
                backgroundColor: bColor(values?.length,hlsaVal),
                borderColor: bColor(values?.length,hlsaVal),
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

    const pieConfig = {
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
        <Pie
            data={pieData}
            options={pieConfig}
            className={classCss}
            data-testid="pie-chart"
        />
    )
}

export default PieChart