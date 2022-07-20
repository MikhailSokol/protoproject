import * as React from "react";
import { FC } from "react";
import { Outlet } from "react-router-dom";
import StockSidebar from "../../components/singleStockComponents/sidebarStock/StockSidebar";
import styles from "./singleStockPage.module.css";
const SingleStockPage: FC = () => {
  return (
    <>
      <StockSidebar />
      <div className={styles.sngl_stock_con}>
      <Outlet />
      </div>
      
    </>
  );
};

export default SingleStockPage;
