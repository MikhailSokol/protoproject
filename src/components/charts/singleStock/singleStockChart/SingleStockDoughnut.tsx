import * as React from 'react';
import { FC } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { ISingleStockDoughnut } from './types';

ChartJS.register(ArcElement, Legend);
 

const SingleStockDoughnut: FC<ISingleStockDoughnut> = (props:ISingleStockDoughnut) => {
  return <Doughnut  data={props.data} options={props.options} /> ;
};

export default SingleStockDoughnut;

