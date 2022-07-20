import * as React from 'react';
import { FC } from 'react';
import RatingChart from '../ratingChart/ratingChart';
import RatingInfo from '../ratingInfo/ratingInfo';
import styles from './ratingStock.module.css'


const RatingStock: FC = () => {
  return <>
  <RatingInfo/>
  <RatingChart/>
  </>;
};

export default RatingStock;

