import * as React from "react";
import { FC } from "react";
import CostChart from "../costChart/costChart";
import CostInfo from "../costInfo/costInfo";

const CostStock: FC = () => {
  return (
    <>
      <CostInfo />
      <CostChart />
    </>
  );
};

export default CostStock;
