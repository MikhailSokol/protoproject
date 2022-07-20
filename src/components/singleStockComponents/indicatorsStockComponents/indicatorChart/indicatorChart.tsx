import * as React from "react";
import { FC, useState } from "react";
import styles from "./indicatorChart.module.css";
import { ReactComponent as SvgCandleChart } from "../../../../images/singleStock/barChart.svg";
import { ReactComponent as SvgLineChart } from "../../../../images/singleStock/lineChart.svg";
import BarChartIndicators from "../../../charts/singleStock/barChartIndicators/barChartIndicators";
import LineChartIndicators from "../../../charts/singleStock/lineChartIndicators/lineChartIndicator";

const IndicatorChart: FC = () => {
  const [activeChartTab, setActiveChartTab] = useState({
    reporting: "Квартальный",
    period: "1 год",
    type: "Линейный",
  });
  return (
    <>
      {" "}
      <div className={styles.cost_chart_params_con}>
        <div className={styles.cost_chart_params_items_wr}>
          {["1 год", "3 год", "5 год", "макс"].map((el) => {
            return (
              <>
                <div
                  className={
                    !activeChartTab.period.includes(el)
                      ? styles.cost_chart_params_item
                      : styles.cost_chart_params_item_a
                  }
                >
                  {el}
                </div>
              </>
            );
          })}
        </div>
        <div className={styles.cost_chart_params_items_wr}>
          {["Квартальный", "Годовой"].map((el) => {
            return (
              <div
                className={
                  !activeChartTab.reporting.includes(el)
                    ? styles.cost_chart_params_item
                    : styles.cost_chart_params_item_a
                }
              >
                {el}
              </div>
            );
          })}
        </div>
        <div className={styles.cost_chart_params_items_wr}>
          <SvgCandleChart
            className={
              activeChartTab.type !== "Гистограмма"
                ? styles.cost_chart_params_svg
                : {}
            }
          />
          <div
            onClick={() => {
              setActiveChartTab({ ...activeChartTab, type: "Гистограмма" });
            }}
            className={
              !activeChartTab.type.includes("Гистограмма")
                ? styles.cost_chart_params_item
                : styles.cost_chart_params_item_a
            }
          >
            Гистограмма
          </div>
          <SvgLineChart
            className={
              activeChartTab.type !== "Линейный"
                ? styles.cost_chart_params_svg
                : {}
            }
          />{" "}
          <div
            onClick={() => {
              setActiveChartTab({ ...activeChartTab, type: "Линейный" });
            }}
            className={
              !activeChartTab.type.includes("Линейный")
                ? styles.cost_chart_params_item
                : styles.cost_chart_params_item_a
            }
          >
            Линейный
          </div>
        </div>
      </div>
      {activeChartTab.type === "Гистограмма" && <BarChartIndicators />}
      {activeChartTab.type === "Линейный" && <LineChartIndicators />}
    </>
  );
};

export default IndicatorChart;
