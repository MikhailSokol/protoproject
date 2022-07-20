import * as React from "react";
import { FC } from "react";
import styles from "./blockStock.module.css";
import SingleStockDoughnut from "../../../charts/singleStock/singleStockChart/SingleStockDoughnut";
import { ISingleStockDoughnut } from "../../../charts/singleStock/singleStockChart/types";
// import {ReactComponent as EllipseBig} from '../../../../images/singleStock/ellipse-big.svg'
// import {ReactComponent as EllipseSmall} from '../../../../images/singleStock/ellipse-small.svg'

const BlockStock: FC<ISingleStockDoughnut> = (props: ISingleStockDoughnut) => {
  // console.log(props.items.Спекулятивная[1] && props?.items?.Спекулятивная[1])
  return (
    <div className={styles.block_wr}>
      <div className={styles.block_title_wr}>
        <div className={styles.block_title_name}>{props.title}</div>
        <div className={styles.block_title_info}>Подробнее</div>
      </div>
      <div className={styles.block_elipse_wr}>
        <SingleStockDoughnut data={props.data} options={props.options} />
        <div className={styles.block_elipse_sm_wr}>
          <div className={styles.block_elipse_sm}>
            {props.data2 && (
              <SingleStockDoughnut
                data={props.data2}
                options={props.options2}
              />
            )}
          </div>
          <div className={styles.block_elipse_sm_t_wr}>000,0%</div>
        </div>
      </div>
      <div className={styles.block_elipse_items_wr}>
        {Object.keys(props.items).map((el) => {
          return (
            <div className={styles.block_elipse_items}>
              {el}
              <div>
              {props.items[el][1] && <span style={/[-]/.test(props.items[el][1])?{color:"#F8623F"}:{color:"#6ECFBC"}}>{props.items[el][1]}</span>}
              <span>{props.items[el][0]}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlockStock;
