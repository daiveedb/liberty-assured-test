import React from 'react';
import { Doughnut, } from 'react-chartjs-2';
import { chartData } from '@/testData';
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement)



const DoughnutChart = () => {
    const total = chartData.value1 + chartData.value2 + chartData.value3
    const percentage1 = (chartData.value1 * 100)/total.toString()+"%"
    const percentage2 = (chartData.value2 * 100)/total.toString()+"%"
    const percentage3 = (chartData.value3 * 100)/total.toString()+"%" 

    const chartOptions = {
        plugins: {
            // legend: {
            //     display: false,
            //   },
            datalabels: { 
                backgroundColor:'white',
                borderRadius:"25",
                color:"black",
                display:true,
                font:{
                    weight:"bold"
                },
                padding:6,
                // render: "percentage", 
                // fontColor: "white" 
            },
            // doughnutlabel: {
            //   labels: [
            //     {
            //       text: percentage1,
            //       color: 'black',
            //       font: {
            //         size: 16,
            //       },
            //       position:"border",
            //     },
            //     {
            //       text: percentage2,
            //       color: 'black',
            //       font: {
            //         size: 16,
            //       },
            //       position:"border",
            //     },
            //     {
            //       text: percentage3,
            //       color: 'black',
            //       font: {
            //         size: 16,
            //       },
            //       position:"border",
            //     },
            //   ],
            // },
          },
          cutout: '65%',
          elements: {
            arc: {
              borderRadius: 6, 
            },
          },
        maintainAspectRatio: false,
        responsive: true,
       
    };

    const data = {
    labels: [chartData.header1, chartData.header2, chartData.header3],
    datasets: [
      {
        data: [chartData.value1, chartData.value2, chartData.value3],
        backgroundColor: ['#032282', '#F4BE37', '#EDE1FF'],
        hoverBackgroundColor: ['#032282', '#F4BE37', '#EDE1FF'],
        datalabels: {
            anchor:"end"
        }
      },
    ],
  };

  return (
    <div className='w-[95%]'>
        <Doughnut data={data} options={chartOptions} />
    </div>
  );
};

export default DoughnutChart;