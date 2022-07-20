import * as React from "react";
import { FC } from "react";
import { useParams } from "react-router-dom";
import styles from "./indicatorInfo.module.css";
import { paramsIndicator, IIndicatorsParams } from "./types";

const IndicatorInfo: FC = () => {
  const params = useParams<IIndicatorsParams>()

  return (
    <div className={styles.advant_con}>
      <div className={styles.advant_items_con}>
        {//@ts-ignore
        Object.keys(paramsIndicator[params.tab]).map((el) => {
          return (
            <div className={styles.advant_item}>
              <div>{el}</div>
              <div>$000,0</div>
            </div>
          );
        })}
      </div>
      <div className={styles.advant_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
    </div>
  );
};

export default IndicatorInfo;
