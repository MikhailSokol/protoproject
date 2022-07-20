import * as React from "react";
import { FC } from "react";
import SingleStockDoughnut from "../../../charts/singleStock/singleStockChart/SingleStockDoughnut";
import styles from "./ratingInfo.module.css";
import {
  data1Rating,
  data2Rating,
  options1Rating,
  options2Rating,
} from "./types";

const RatingInfo: FC = () => {
  return (
    <div className={styles.rating_info_con}>
      <div className={styles.rating_info_percent}>
        <div>Рейтинг</div>
        <div>000,0%</div>
      </div>
     
        <div className={styles.block_elipse_wr}>
          <SingleStockDoughnut data={data1Rating} options={options1Rating} />
          <div className={styles.block_elipse_sm_wr}>
            <div className={styles.block_elipse_sm}>
              {
                <SingleStockDoughnut
                  data={data2Rating}
                  options={options2Rating}
                />
              }
            </div>
          </div>
        </div>
      
      <div className={styles.rating_info_text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
      </div>
    </div>
  );
};

export default RatingInfo;
