import * as React from "react";
import { FC } from "react";
import CompanyInfo from "../companyInfo/CompanyInfo";
import BlockStock from "../blockStock/blockStock";
import styles from "./viewStock.module.css";
import {
  costItem,
  data,
  data2,
  data3,
  data4,
  options,
  options2,
  options3,
  options4,
  ratingItem,
} from "./types";

const ViewStock: FC = () => {
  return (
    <>
      <CompanyInfo />
      <div className={styles.view_body_wr}>
        <BlockStock
          title={"Рейтинг"}
          data={data}
          options={options}
          data2={data2}
          options2={options2}
          items={ratingItem}
        />
        <BlockStock
          title={"Стоимость"}
          data={data3}
          options={options3}
          data2={data4}
          options2={options4}
          items={costItem}
        />
      </div>
  </>
  );
};

export default ViewStock;
