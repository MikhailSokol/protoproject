import axios from 'axios';
import * as React from 'react';
import { FC, useCallback, useEffect, useState } from 'react';
import LineChartCost from './lineChartCost';
import style from './lineChartCost.module.css'


const LineChartCostView: FC<any> = (props:any) => {
 
  const [dataArea, setDataArea] = useState<any>();
  const [dataCandle, setdataCandle] = useState<any>();
  const getTradingViewData =useCallback(async () => {
    const res = await axios.get(
      `https://finnhub.io/api/v1/stock/candle?symbol=RACE.MI&resolution=${props.resolution}&from=1514807240&to=1657194440&token=c9vmtgaad3i5k782rnug`
    );
    console.log(res)
    setDataArea(
      res.data.c.map((el: any, i: number) => {
        return { value: el, time: res.data.t[i] };
      })
    );
    setdataCandle(
      res.data.c.map((el: any, i: number) => {
        return {
          time: res.data.t[i],
          open: res.data.o[i],
          high: res.data.h[i],
          low: res.data.l[i],
          close: res.data.c[i],
        };
      })
    );
  },[props.resolution,props.performance]) 

  useEffect(() => {
    getTradingViewData();
  }, [getTradingViewData]);
  
  return <div className={style.line_chart_cost_con}>
     <LineChartCost
        dataCandle={props.performance === "candle" ? dataCandle : null}
        dataArea={ props.performance === "area" ? dataArea : null }
      />
    
  </div> ;
};

export default LineChartCostView;

