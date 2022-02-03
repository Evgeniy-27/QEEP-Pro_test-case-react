import React, { useState } from "react";
import Button from '@mui/material/Button';
//import axios from "axios";

import AnalysisOrders from "./Analytics/AnalysisOrders";
import StatusesOrders from "./Analytics/StatusesOrders";
import ProblemOrders from "./Analytics/ProblemOrders";
import AnalysisCash from "./Analytics/AnalysisCash";
import InfoPurchase from "./Analytics/InfoPurchase";
import PopularProducts from "./Analytics/PopularProducts";

//const url = "/Data/orders-1.json";

function AnalyticsDashboard({ orders1, orders2 }) {
  const [activeComponent, setActiveComponent] = useState("AnalysisOrders");

  return (
    <div className="App">
      <div className="button">
        <Button variant="outlined" onClick={() => setActiveComponent("AnalysisOrders")}>
          Aнализ информации о заказах
        </Button>
        <Button variant="outlined" onClick={() => setActiveComponent("StatusesOrders")}>
          Распределение заказов по статусам
        </Button>
        <Button variant="outlined" onClick={() => setActiveComponent("ProblemOrders")}>
          Распределение проблемных заказов
        </Button>
        <Button variant="outlined" onClick={() => setActiveComponent("AnalysisCash")}>
          Анализ денежных средств
        </Button>
        <Button variant="outlined" onClick={() => setActiveComponent("InfoPurchase")}>
          Информация о покупках
        </Button>
        <Button variant="outlined" onClick={() => setActiveComponent("PopularProducts")}>
          Информация о популярных товарах
        </Button>
      </div>
      <div>
        {activeComponent === "AnalysisOrders" && <AnalysisOrders item1={orders1} item2={orders2} />}
        {activeComponent === "StatusesOrders" && <StatusesOrders item1={orders1} />}
        {activeComponent === "ProblemOrders" && <ProblemOrders item1={orders1} />}
        {activeComponent === "AnalysisCash" && <AnalysisCash item1={orders1} />}
        {activeComponent === "InfoPurchase" && <InfoPurchase item1={orders1} />}
        {activeComponent === "PopularProducts" && <PopularProducts item1={orders1} />}
      </div>
    </div>
  );
}

export default AnalyticsDashboard;
