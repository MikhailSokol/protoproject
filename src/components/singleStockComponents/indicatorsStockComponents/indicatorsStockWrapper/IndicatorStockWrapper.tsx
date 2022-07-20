import * as React from "react";
import { FC } from "react";
import { Outlet, useLocation } from "react-router-dom";
import IndicatorChart from "../indicatorChart/indicatorChart";
import IndicatorTabs from "../IndicatorTabs/IndicatorTabs";
import styles from "./indicatorsStock.module.css";
import { advantageTabs } from "./types";

const IndicatorStockWrapper: FC = () => {
  const location = useLocation();
  const tabLocation = location.pathname.split("/")[3];

  return (
    <>
      <Outlet />
      <div className={styles.cost_chart_con}>
        {<IndicatorTabs 
        //@ts-ignore
        items={advantageTabs[tabLocation]} />}
        <IndicatorChart />
      </div>
    </>
  );
};

export default IndicatorStockWrapper;
