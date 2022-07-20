import * as React from 'react';
import { FC } from 'react';
import SingleStockDoughnut from '../../../charts/singleStock/singleStockChart/SingleStockDoughnut';
import styles from './costInfo.module.css'
import { dataCost1, dataCost2, optionsCost1, optionsCost2 } from './types';


const CostInfo:FC = () => {
  return <div className={styles.costinfo_con}>
     <div className={styles.costinfo_percent}>
        <div>Рейтинг</div>
        <div>$000,0</div>
      </div>
      <div className={styles.block_elipse_wr}>
          <SingleStockDoughnut data={dataCost1} options={optionsCost1} />
          <div className={styles.block_elipse_sm_wr}>
            <div className={styles.block_elipse_sm}>
              {
                <SingleStockDoughnut
                  data={dataCost2}
                  options={optionsCost2}
                />
              }
            </div>
          </div>
        </div>
        <div className={styles.costinfo_info_text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
      </div>
  </div>;
};

export default CostInfo;

