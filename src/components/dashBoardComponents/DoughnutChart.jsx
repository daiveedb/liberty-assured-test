import React from 'react';
import { Doughnut, } from 'react-chartjs-2';
import { chartData } from '@/testData';
import {Chart, ArcElement} from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels';
import 'chartjs-plugin-datalabels'
Chart.register(ChartDataLabels);
Chart.register(ArcElement)




const DoughnutChart = () => {
    const total = chartData.value1 + chartData.value2 + chartData.value3
    const percentage1 = Math.round((chartData.value1 * 100)/total)
    const percentage2 = Math.round((chartData.value2 * 100)/total)
    const percentage3 = Math.round((chartData.value3 * 100)/total)

    const chartOptions = {
        plugins: {
            datalabels: { 
                backgroundColor:'white',
                borderRadius:"25",
                color:"black",
                display:true,
                font:{
                    size:"10",
                },
                padding:5,
                formatter: (value) => {
                    return `${value}%`;
                  },
                  anchor:"end",
            },
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
    labels: ["52%", "54%", "67%"],
    datasets: [
      {
        data: [percentage1, percentage2, percentage3],
        backgroundColor: ['#032282', '#F4BE37', '#EDE1FF'],
        hoverBackgroundColor: ['#032282', '#F4BE37', '#EDE1FF'],
        datalabels: {
            anchor:"end"
        }
      },
    ]
  };

  return (
    <div className='w-[90%]'>
        <Doughnut data={data} options={chartOptions} />
    </div>
  );
};

export default DoughnutChart;