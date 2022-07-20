import * as React from "react";
import { FC, useState } from "react";
import styles from "./costChart.module.css";
import { ReactComponent as SvgCandleChart } from "../../../../images/singleStock/candles-chart.svg";
import { ReactComponent as SvgLineChart } from "../../../../images/singleStock/lineChart.svg";
import LineChartCostView from "../../../charts/singleStock/lineChartCost/lineChartCostView";
const CostChart: FC = () => {
  const [activeChartTab, setActiveChartTab] = useState({
    reporting: "Квартальный",
    period: "1 год",
    type: "Линейный",
  });
  const [resolution, setResolution] = useState<any>("M");
  const [performance, setPerformance] = useState<string>("area");
  return (
    <div className={styles.cost_chart_con}>
      <div style={{position:"relative"}}>
        <div style={{display:'flex',marginLeft:'20%', position:"absolute",width:"80%",height:'25px',backgroundColor:'rgba(110, 207, 188,0.3)',borderRadius:'5px'}}></div>
      </div>
      <div className={styles.cost_chart_short_wr}>
        {["2018", "2019", "2020", "2021", "2022"].map((el) => {
          return <div className={styles.cost_chart_short_item}>{el}</div>;
        })}
      </div>
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
              activeChartTab.type !== "Свечки"
                ? styles.cost_chart_params_svg
                : {}
            }
          />
          <div
            onClick={() => {
              setActiveChartTab({ ...activeChartTab, type: "Свечки" });
              setPerformance("candle");
            }}
            className={
              !activeChartTab.type.includes("Свечки")
                ? styles.cost_chart_params_item
                : styles.cost_chart_params_item_a
            }
          >
            Свечки
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
              setPerformance("area");
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
      <LineChartCostView resolution={resolution} performance={performance} />
      <div className={styles.cost_chart_footer_con}>
        <div className={styles.cost_chart_footer_wr}>
          <div className={styles.cost_chart_footer_title_wr}>
            <div className={styles.cost_chart_footer_img_s}></div>
            <div className={styles.cost_chart_footer_title}>Спекулятивная</div>
            <div className={styles.cost_chart_footer_price}>$000,0</div>
          </div>
          <div className={styles.cost_chart_footer_text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.
          </div>
        </div>
        <div className={styles.cost_chart_footer_wr}>
          <div className={styles.cost_chart_footer_title_wr}>
            <div className={styles.cost_chart_footer_img_j}></div>
            <div className={styles.cost_chart_footer_title}>Справедливая</div>
            <div className={styles.cost_chart_footer_price}>$000,0</div>
          </div>
          <div className={styles.cost_chart_footer_text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.
          </div>
        </div>
        <div className={styles.cost_chart_footer_wr}>
          <div className={styles.cost_chart_footer_title_wr}>
            <div className={styles.cost_chart_footer_img_c}></div>
            <div className={styles.cost_chart_footer_title}>Консервативная</div>
            <div className={styles.cost_chart_footer_price}>$000,0</div>
          </div>
          <div className={styles.cost_chart_footer_text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostChart;
