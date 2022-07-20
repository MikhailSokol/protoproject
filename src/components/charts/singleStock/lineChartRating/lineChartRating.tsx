import * as React from "react";
import { FC } from "react";
import styles from "./lineChartRating.module.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

const LineChartRating: FC = () => {
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

  const labels = ["K1", "K2", "K3", "K4"];

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Dataset 2",
        data: [30, 40, 29, 89].map((el) => el),
        borderWidth:3,
        borderColor:'#6ECFBC',
        backgroundColor: "rgba(110, 207, 188,0.3)",
      },
    ],
  };

  return (
    <div className={styles.line_chart_con}>
      <Line  options={options} data={data} />
    </div>
  );
};

export default LineChartRating;
