/* eslint-disable array-callback-return */
import MyChartDonut from "../../Charts/ChartDonut";
import MyChartPost from "../../Charts/ChartPost";
import {DateSort, TotalQuantityDay} from "../Utilities/utilities";

function AnalysisOrders({ item1, item2 }) {
  //Количество заказов
  const totalQuantity = item1.deliveryOrders.length;
  const quantity = item2.length;

  //Фильтрация и сортировка дат всех заказов
  const dateSort = DateSort (item1);

  //Количество заказов по дням
  const totalQuantityDay = TotalQuantityDay(item1, dateSort);

 //Количество заказов из списка 2 по дням
  const quantityDay = [];
  dateSort.map((item) => {
    let a = 0;
    for (let i = 0; i < item2.length; ++i) {
      let b = new Date(item2[i].created * 1000).toISOString().slice(0, 10);
      if (b === item) {
        a++;
      }
    }
    quantityDay.push(a);
  });

  const argChartPost = [
    {
      label: "Всего заказов",
      data: totalQuantityDay,
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },

    {
      label: "Заказов из списка",
      data: quantityDay,
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ];

  return (
    <div className="analysis">
      <h2>Aнализ информации о заказах</h2>
      <div className="charts">
        <div className="chart-Donut">
          <h4>За весь срок</h4>
          <MyChartDonut
            name={[
              `Общее количество заказов ${totalQuantity}`,
              `Количество заказов из списка ${quantity}`,
            ]}
            quantity={[totalQuantity, quantity]}
          />
        </div>

        <div className="chart-Post">
          <h4>По дням</h4>
          <MyChartPost dates={dateSort} arg={argChartPost} />
        </div>
      </div>
    </div>
  );
}

export default AnalysisOrders;
