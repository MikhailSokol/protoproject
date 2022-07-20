import * as React from "react";
import { FC } from "react";
import styles from "./lineChartIndicator.module.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

const LineChartIndicators: FC = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Filler
  );

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
            return  "$"+ value ;
          },
        },
      },
    },
    responsive: true,
  };

  const labels = ["K1", "K2", "K3", "K4"];

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        data: [10, -15, 40, 70].map((el) => el),
        backgroundColor:[10, -15, 40, 70].map((el) => {
          return el>0 ?"#6ECFBC":'#F8623F'
        }),
        hoverBackgroundColor: [10, -15, 40, 70].map((el) => {
          return el>0 ?"#6ECFBC":'#F8623F'
        }),
        borderWidth:3,
        borderColor:'#6ECFBC',
       
      },
    ],
  };

  return (
    <div className={styles.line_chart_con}>
      <Line  options={options} data={data} />
    </div>
  );
};

export default LineChartIndicators;

