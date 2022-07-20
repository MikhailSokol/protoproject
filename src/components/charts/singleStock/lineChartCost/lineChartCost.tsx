import * as React from "react";
import { FC, memo, useEffect, useRef,  } from "react";
import { createChart,  } from 'lightweight-charts';
const LineChartCost: FC<any> = (props:any) => {
	const {
		dataArea,
    dataCandle
	} = props;
 const chartCandle = useRef<any>();
	const chartArea = useRef<any>();
  console.log(dataCandle)
  useEffect(()=>{
    if(dataArea){
      const chart = createChart(chartArea.current!, {
        width: 1400,
        height: 330,
        layout: {
          backgroundColor: "rgba(255, 255, 255, 0)",
          textColor: "#d1d4dc"
        },
        
        //@ts-ignore
        priceScale: {
          scaleMargins: {
            top: 0.2,
            bottom: 0.2
          },
          borderVisible: false
        },
        grid: {
          vertLines: {
            color: "rgba(42, 46, 57, 0)"
          },
          horzLines: {
            color: "rgba(42, 46, 57, 0)"
          }
        }
      });
      const lineSpeculative = chart.addLineSeries({
        priceLineVisible: false,
        color:'#8BD5FF',
        lineStyle:0,
        lineType:0, lineWidth: 2
      });
      const lineConservative = chart.addLineSeries({
        priceLineVisible: false,
        color:'#127CDE',
        lineStyle:0,
        lineType:0, lineWidth: 2
      });
      const lineJust = chart.addLineSeries({
        priceLineVisible: false,
        color:'#00A3FF',
        lineStyle:0,
        lineType:0, lineWidth: 2
      });
      lineSpeculative.setData([
        { time: dataArea[0]["time"], value: 190.01 },
        { time: dataArea[dataArea.length-1]["time"], value: 190.01 },
      ]);
      lineJust.setData([
        { time: dataArea[0]["time"], value: 140.01 },
        { time: dataArea[dataArea.length-1]["time"], value: 140.01 },
      ])
      lineConservative.setData([
        { time: dataArea[0]["time"], value: 130.01 },
        { time: dataArea[dataArea.length-1]["time"], value: 130.01 },
      ])
      const areaSeries = chart.addAreaSeries({
        
        priceLineVisible: false,
        topColor: "rgba(110, 207, 188,0.3)",
        bottomColor: "rgba(110, 207, 188,0.3)",
        lineColor: "rgba(110, 207, 188,1)",
        lineWidth: 2
      });
      areaSeries.setData(dataArea);
      chart.timeScale().fitContent();
      return () => {
        chart.remove();
      };
    }
   
  },[dataArea])
  useEffect(()=>{
    if(dataCandle && dataCandle.length > 0 ){
      const chart = createChart(chartCandle.current!, {
        width: 1400,
        height: 330,
        layout: {
          backgroundColor: "rgba(255, 255, 255, 0)",
          textColor: "#d1d4dc"
        },
        //@ts-ignore
        grid: {
          vertLines: {
            color: "rgba(42, 46, 57, 0)"
          },
          horzLines: {
            color: "rgba(42, 46, 57, 0)"
          }
        }
      });
      const candleSeries = chart.addCandlestickSeries();
      const lineSpeculative = chart.addLineSeries({
        priceLineVisible: false,
        color:'#8BD5FF',
        lineStyle:0,
        lineType:0, lineWidth: 2
      });
      const lineConservative = chart.addLineSeries({
        priceLineVisible: false,
        color:'#127CDE',
        lineStyle:0,
        lineType:0, lineWidth: 2
      });
      const lineJust = chart.addLineSeries({
        priceLineVisible: false,
        color:'#00A3FF',
        lineStyle:0,
        lineType:0, lineWidth: 2
      });
      lineSpeculative.setData([
        { time: dataCandle[0]["time"], value: 190.01 },
        { time: dataCandle[dataCandle.length-1]["time"], value: 190.01 },
      ]);
      lineJust.setData([
        { time: dataCandle[0]["time"], value: 140.01 },
        { time: dataCandle[dataCandle.length-1]["time"], value: 140.01 },
      ])
      lineConservative.setData([
        { time: dataCandle[0]["time"], value: 130.01 },
        { time: dataCandle[dataCandle.length-1]["time"], value: 130.01 },
      ])
      candleSeries.setData(dataCandle);
      chart.timeScale().fitContent();
      return () => {
        chart.remove();
      };
    }
  },[dataCandle])
	return (
   <>
		<div
			ref={chartArea}
		/>
    <div
    ref={chartCandle}
  />
   </>
	);
};

export default memo(LineChartCost);
