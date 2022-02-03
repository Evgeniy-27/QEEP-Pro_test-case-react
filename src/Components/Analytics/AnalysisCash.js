/* eslint-disable array-callback-return */
import MyChartPost from "../../Charts/ChartPost";
import { DateSort } from "../Utilities/utilities";

function AnalysisCash({ item1 }) {
  //Сумма денег за вест срок
  const sumesArr = [];
  item1.deliveryOrders.map((elem) => sumesArr.push(elem.sum));
  const sumesRev = sumesArr.reduce((sum, current) => sum + current, 0);

  //Сумма денег проблемных заказов
  const sumesProblemArr = [];
  item1.deliveryOrders.map((elem) => {
    if (elem.problem && elem.items.length) {
      let c = elem.sum;
      sumesProblemArr.push(c);
    }
  });

  const sumesProblem = sumesProblemArr.reduce(
    (sum, current) => sum + current,
    0
  );

  ///Фильтрация и сортировка дат всех заказов
  const dateSort = DateSort(item1);

  //Количество денег по дням
  const moneyDay = [];
  dateSort.map((item) => {
    let a = 0;
    for (let i = 0; i < item1.deliveryOrders.length; ++i) {
      let b = item1.deliveryOrders[i].createdTime.includes(item);
      if (b === true) {
        let c = item1.deliveryOrders[i].sum;
        a += c;
      }
    }
    moneyDay.push(a);
  });

  //Недоимка по дням
  const problemMoneyDay = [];
  dateSort.map((item) => {
    let a = 0;
    for (let i = 0; i < item1.deliveryOrders.length; ++i) {
      let b = item1.deliveryOrders[i].createdTime.includes(item);
      if (
        b === true &&
        item1.deliveryOrders[i].problem &&
        item1.deliveryOrders[i].items.length !== 0
      ) {
        let c = item1.deliveryOrders[i].sum;
        a += c;
      }
    }
    problemMoneyDay.push(a);
  });

  const argChartPost = [
    {
      label: "Сумма выручки",
      data: moneyDay,
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },

    {
      label: "Сумма недоимки",
      data: problemMoneyDay,
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ];

  return (
    <div className="analysis">
      <h2>Анализ денежных средств</h2>
      <div className="cash">
        <div>
          <h4>Выручка за весь срок {sumesRev} руб</h4>
          <h4>Недоимка (проблемные заказы) за весь срок {sumesProblem} руб</h4>
        </div>
        <div className="chart-Post">
          <h4>По дням</h4>
          <MyChartPost dates={dateSort} arg={argChartPost} />
        </div>
      </div>
    </div>
  );
}

export default AnalysisCash;
