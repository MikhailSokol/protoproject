import classNames from "classnames";
import * as React from "react";
import { FC, useEffect, useLayoutEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./stockSidebar.module.css";
import { menuSidebar } from "./types";
import { ReactSVG } from "react-svg";
import view from "../../../images/singleStock/view.svg";
import rating from "../../../images/singleStock/rating.svg";
import cost from "../../../images/singleStock/cost.svg";
import indicators from "../../../images/singleStock/indicators.svg";
import reporting from "../../../images/singleStock/reporting.svg";
import news from "../../../images/singleStock/news.svg";
import dividends from "../../../images/singleStock/dividends.svg";
import SidebarStockInds from "../../sidebarStockIndicators/sidebarStockInds";

const StockSidebar: FC = () => {
  const [viewInds, setViewInds] = useState(false);
  return (
    <div className={styles.stock_sdbr_con}>
      <div className={styles.stock_sidebar_logo}></div>
      <div className={styles.stock_sidebar_tick_wr}>
        <div className={styles.stock_sidebar_tick_avatar}></div>
        <div className={styles.stock_sidebar_tick_name}>
          Cadence Design Systems
        </div>
      </div>
      <div className={styles.stock_sidebar_info_wr}>
        <div className={styles.stock_sidebar_info_icons}>
          <div className={styles.stock_sidebar_info_icons_wr}>
            <div className={styles.stock_sidebar_fav}></div>
            <div className={styles.stock_sidebar_hist}></div>
          </div>
          <div className={styles.stock_sidebar_graph}></div>
        </div>
        <div className={styles.stock_sidebar_info_dt}>
          <div className={styles.stock_sidebar_info_dt_tck}>Тикер: TSMS</div>
          <div className={styles.stock_sidebar_info_dt_price}>135.35 USD</div>
          <div className={styles.stock_sidebar_info_dt_din}>+2.31 (+0.83%)</div>
        </div>
      </div>
      <div className={styles.stock_sidebar_menu_wr}>
        {[view, rating, cost, indicators, reporting, news, dividends].map(
          (el: any, ind: number) => {
            if(el===indicators){
              return (
                <>
                <NavLink
                  aria-current={"page"}
                  to={`${menuSidebar[ind][0]}` === "Показатели"?'indicators/advantage':`${menuSidebar[ind][1]}`}
                  className={classNames([styles.stock_sidebar_menu_item])}
                  key={ind}
                  onClick={() => {
                    `${menuSidebar[ind][0]}` === "Показатели"
                      ? setViewInds(true)
                      : setViewInds(false);
                  }}
                >
                  <ReactSVG
                    src={el}
                    className={
                      styles[`stock_sidebar_menu_item_${menuSidebar[ind][1]}`]
                    }
                  />
                  {`${menuSidebar[ind][0]}`}
                  
                  </NavLink>
                  {viewInds && 
                 <SidebarStockInds/>}
                </>
              );
            }else{
              return (
                <NavLink
                onClick={()=>setViewInds(false)}
                  aria-current={"page"}
                  to={`${menuSidebar[ind][1]}`}
                  className={classNames([styles.stock_sidebar_menu_item])}
                  key={ind}
                >
  
                  <ReactSVG
                    src={el}
                    className={
                      styles[`stock_sidebar_menu_item_${menuSidebar[ind][1]}`]
                    }
                  />
                  {`${menuSidebar[ind][0]}`}
                 
                </NavLink>
              );
            }
            
          }
        )}
      </div>
    </div>
  );
};

export default StockSidebar;
