import * as React from "react";
import { FC } from "react";
import { IContentProvider } from "./types";
import styles from "./contentProvider.module.css";
import HeaderNavigation from "../../../Pages/HeaderNavigation/HeaderNavigation";
import StockSidebar from "../../singleStockComponents/sidebarStock/StockSidebar";

const ContentProvider: FC<IContentProvider> = (props: IContentProvider) => {
  return (
    <div className={styles.app_wrap}>
       <HeaderNavigation />
        {props.children}
       
    </div>
  );
};

export default ContentProvider;
