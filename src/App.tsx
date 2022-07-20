import * as React from "react";
import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HeaderNavigation from "./Pages/HeaderNavigation/HeaderNavigation";
import ContentProvider from "./components/providers/contentProvider/ContentProvider";
import SingleStockPage from "./Pages/SingleStockPage/SingleStockPage";
import MarketPage from "./Pages/MarketPage/MarketPage";
import SelectPage from "./Pages/SelectPage/SelectPage";
import PortfolioStockPage from "./Pages/PortfolioStockPage/PortfolioStockPage";
import ViewStock from "./components/singleStockComponents/viewStockComponents/viewStock/ViewStock";
import ReportingStock from "./components/singleStockComponents/reportingStock/reportingStock/ReportingStock";
import RatingStock from "./components/singleStockComponents/ratingStockComponents/ratingStock/RatingStock";
import NewsStock from "./components/singleStockComponents/newsStockComponents/newsStock/NewsStock";
import IndicatorStockWrapper from "./components/singleStockComponents/indicatorsStockComponents/indicatorsStockWrapper/IndicatorStockWrapper";
import DividendsStock from "./components/singleStockComponents/dividendsStockComponents/dividendStock/DividendsStock";
import CostStock from "./components/singleStockComponents/costStockComponents/costStock/CostStock";
import IndicatorInfo from "./components/singleStockComponents/indicatorsStockComponents/advantageCoomponents/indicatorInfo/indicatorInfo";


const App: FC = () => {
  return (
    <>
      <ContentProvider>
        <Routes>
          <Route path="market" element={<MarketPage />} />
          <Route path="singleAction" element={<SingleStockPage />}>
            <Route path="view" element={<ViewStock />} />
            <Route path="reporting" element={<ReportingStock />} />
            <Route path="rating" element={<RatingStock />} />
            <Route path="news" element={<NewsStock />} />
            <Route path="indicators" element={<IndicatorStockWrapper />} >
                <Route path=":tab" element={<IndicatorInfo />}/>
                 {/* <Route path="advantage" element={<AdvantageInfo />}/>
                 <Route path="foresight" element={<AdvantageInfo />}/>
                 <Route path="efficiency" element={<AdvantageInfo />}/>
                 <Route path="stability" element={<AdvantageInfo />}/>
                 <Route path="multipliers" element={<AdvantageInfo />}/>
                 <Route path="other" element={<AdvantageInfo />}/> */}
                 {/* <Route index element={<AdvantageInfo />}/> */}
            </Route>
            <Route path="dividends" element={<DividendsStock />} />
            <Route path="cost" element={<CostStock />} />
            <Route index element={<ViewStock />} />
          </Route>
          <Route path="select" element={<SelectPage />} />
          <Route path="portfolio" element={<PortfolioStockPage />} />
        </Routes>
      </ContentProvider>
    </>
  );
};

export default App;
