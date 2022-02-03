/* eslint-disable array-callback-return */
import MyChartDonut from "../../Charts/ChartDonut";
import MyChartPost from "../../Charts/ChartPost";
import {DateSort, TotalQuantityDay} from "../Utilities/utilities";

function ProblemOrders({ item1 }) {
  //Количество заказов
  const totalQuantity = item1.deliveryOrders.length;

  //Сортировка проблем
  const problems = [];
  item1.deliveryOrders.map(
    (elem) => elem.problem && problems.push(elem.problem)
  );
  //Количество проблем
  const quantityProblems = problems.length;

  //Фильтрация и сортировка дат всех заказов
  const dateSort = DateSort(item1);

  //Количество заказов по дням
  const totalQuantityDay = TotalQuantityDay(item1, dateSort);

  //Количество проблем по дням
  const problemDay = [];

  dateSort.map((item) => {
    let a = 0;
    for (let i = 0; i < item1.deliveryOrders.length; ++i) {
      let b = item1.deliveryOrders[i].createdTime.includes(item);
      let c = item1.deliveryOrders[i].problem;
      if (b === true && c !== null) {
        a++;
      }
    }
    problemDay.push(a);
  });
  //console.log(problemDay);
  
  const argChartPost = [
    {
      label: "Всего заказов",
      data: totalQuantityDay,
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },

    {
      label: "Проблемных заказов",
      data: problemDay,
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ];

  return (
    <div className="analysis">
      <h2>Распределение проблемных заказов</h2>
      <div className="charts">
        <div className="chart-Donut">
          <h4>За весь срок</h4>
          <MyChartDonut
            name={[
              `Всего заказов ${totalQuantity}`,
              `Проблемных заказов ${quantityProblems}`,
            ]}
            quantity={[totalQuantity, quantityProblems]}
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

export default ProblemOrders;
