import * as React from "react";
import { FC, useEffect, useState } from "react";
import { IIndicatorTabs } from "./types";
import styles from "./IndicatorTabs.module.css";
import classNames from "classnames";

const IndicatorTabs: FC<IIndicatorTabs> = (props: IIndicatorTabs) => {
  const [activeTab, setActiveTab] = useState(props.items[0]);
  useEffect(() => {
    setActiveTab(props.items[0]);
  }, [props.items]);
  return (
    <div className={styles.indicator_tabs_con}>
      {props.items.map((el) => {
        return (
          <div
            onClick={() => setActiveTab(el)}
            className={classNames({
              [`${styles.indicator_tabs_items}`]: true,
              [`${styles.indicator_tabs_items_active}`]:
                activeTab === el ? true : false,
            })}
          >
            {el}
          </div>
        );
      })}
    </div>
  );
};

export default IndicatorTabs;
