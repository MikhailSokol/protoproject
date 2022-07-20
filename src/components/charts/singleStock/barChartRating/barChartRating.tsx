import * as React from "react";
import { FC } from "react";
import styles from "./barChartRating.module.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(CategoryScale, LinearScale, BarElement);
const BarChartRating: FC = () => {
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
        min: 0,
        max: 100,
        ticks: {
          stepSize: 20,
          callback: function (value: any, index: number) {
            return value + "%";
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
        data: [10, 30, 40, 70].map((el) => el),
        backgroundColor: "#6ECFBC",
        hoverBackgroundColor: "#6ECFBC",
        borderRadius: 5,
      },
    ],
  };
  return (
    <div className={styles.bar_chart_con}>
      {" "}
      <Bar
       
        options={options}
        data={data}
      />
    </div>
  );
};

export default BarChartRating;
