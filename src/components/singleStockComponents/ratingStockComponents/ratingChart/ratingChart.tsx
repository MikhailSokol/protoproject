import * as React from "react";
import { FC, useState } from "react";
import styles from "./ratingChart.module.css";
import { ReactComponent as SvgBarChart } from "../../../../images/singleStock/barChart.svg";
import { ReactComponent as SvgLineChart } from "../../../../images/singleStock/lineChart.svg";
import BarChartRating from "../../../charts/singleStock/barChartRating/barChartRating";
import LineChartRating from "../../../charts/singleStock/lineChartRating/lineChartRating";
const RatingChart: FC = () => {
  const [activeChartTab, setActiveChartTab] = useState({
    reporting: "Квартальный",
    period: "1 год",
    type: "Гистограмма",
  });
  return (
    <div className={styles.rating_chart_con}>
      <div className={styles.rating_chart_items_con}>
        {[
          "Общий",
          "Преимущество",
          "Дальновидность",
          "Эффективность",
          "Стабильность",
          "Multichart",
          "Custom",
        ].map((el) => {
          return <div className={styles.rating_chart_item}>{el}</div>;
        })}
      </div>
      <div className={styles.rating_chart_params_con}>
        <div className={styles.rating_chart_params_items_wr}>
          {["1 год", "3 год", "5 год", "макс"].map((el) => {
            return (
              <>
                <div
                  className={
                    !activeChartTab.period.includes(el)
                      ? styles.rating_chart_params_item
                      : styles.rating_chart_params_item_a
                  }
                >
                  {el}
                </div>
              </>
            );
          })}
        </div>
        <div className={styles.rating_chart_params_items_wr}>
          {["Квартальный", "Годовой"].map((el) => {
            return (
              <div
                className={
                  !activeChartTab.reporting.includes(el)
                    ? styles.rating_chart_params_item
                    : styles.rating_chart_params_item_a
                }
              >
                {el}
              </div>
            );
          })}
        </div>
        <div className={styles.rating_chart_params_items_wr}>
          <SvgLineChart  className={styles.rating_chart_params_svg}/>
          <div onClick={()=>{
            setActiveChartTab({...activeChartTab,type:"Линейный"})
          }}
            className={
              !activeChartTab.type.includes("Линейный")
                ? styles.rating_chart_params_item
                : styles.rating_chart_params_item_a
            }
          >
            Линейный
          </div>
          <SvgBarChart />{" "}
          <div onClick={()=>{
            setActiveChartTab({...activeChartTab,type:"Гистограмма"})
          }} className={ !activeChartTab.type.includes("Гистограмма")
                ? styles.rating_chart_params_item
                : styles.rating_chart_params_item_a}>Гистограмма</div>
        </div>
      </div>
      {activeChartTab.type==="Гистограмма" && <BarChartRating/>}
      {activeChartTab.type==="Линейный" && <LineChartRating/>}
    </div>
  );
};

export default RatingChart;
