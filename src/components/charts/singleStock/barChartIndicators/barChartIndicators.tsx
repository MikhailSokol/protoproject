import * as React from 'react';
import { FC } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import styles from './barChartIndicators.module.css'
ChartJS.register(CategoryScale, LinearScale, BarElement);
const BarChartIndicators: FC = () => {
  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      xAxes: {
        grid: {
          display: false,
          color:'rgba(166, 83, 83, 1)'
        },
        ticks: {
          padding: 10,
          
          display: true,
          font: {
            size: 12,
          },
        },
      },
      yAxes: {
        grid: {
          display: true,
         
        },
        
        position: 'right' as const,
        ticks: {
          stepSize: 20,
          callback: function (value: any, index: number) {
            return  "$" + value ;
          },
        },
      },
    },
    responsive: true,
  };

  const labels = ["k1", "k2", "k3", "k4"];

  const data = {
    labels,
    datasets: [
      {
        data: [10, -15, 40, 70].map((el) => el),
        backgroundColor:[10, -15, 40, 70].map((el) => {
          return el>0 ?"#6ECFBC":'#F8623F'
        }),
        hoverBackgroundColor: [10, -15, 40, 70].map((el) => {
          return el>0 ?"#6ECFBC":'#F8623F'
        }),
        borderRadius: 5,
      },
    ],
  };
  return  <div className={styles.bar_chart_con}>
  {" "}
  <Bar
   
    options={options}
    data={data}
  />
</div> ;
};

export default BarChartIndicators;

