/* eslint-disable array-callback-return */
import MyChartDonut from "../../Charts/ChartDonut";
import MyChartPost from "../../Charts/ChartPost";
import { DateSort } from "../Utilities/utilities";

function AnalysisOrders({ item1 }) {
  //Сортировка статусов
  const statuses = [];
  item1.deliveryOrders.map((elem) => statuses.push(elem.status));

  let statusFiltr = statuses.filter((item, index) => {
    return statuses.indexOf(item) === index;
  });

  //Количество каждого статуса
  const quantityStatus = [];
  statusFiltr.map((item) => {
    let a = 0;
    for (let i = 0; i < item1.deliveryOrders.length; ++i) {
      let b = item1.deliveryOrders[i].status.includes(item);

      if (b === true) {
        a++;
      }
    }
    quantityStatus.push(a);
  });

  ///Фильтрация и сортировка дат всех заказов
  const dateSort = DateSort(item1);

  //Количество статусов по дням
  const closedDay = [];
  const cancelledDay = [];
  const notApproveddDay = [];
  for (let p = 0; p < statusFiltr.length; ++p) {
    dateSort.map((item) => {
      let a = 0;
      for (let i = 0; i < item1.deliveryOrders.length; ++i) {
        let b = item1.deliveryOrders[i].createdTime.includes(item);
        let c = item1.deliveryOrders[i].status.includes(statusFiltr[p]);
        if (b === true && c === true) {
          a++;
        }
      }
      switch (p) {
        case 0:
          closedDay.push(a);
          break;
        case 1:
          cancelledDay.push(a);
          break;
        default:
          notApproveddDay.push(a);
      }
    });
  }

  const argChartPost = [
    {
      label: statusFiltr[0],
      data: closedDay,
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },

    {
      label: statusFiltr[1],
      data: cancelledDay,
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },

    {
      label: statusFiltr[2],
      data: notApproveddDay,
      backgroundColor: "rgba(255, 206, 86, 0.5)",
    },
  ];

  return (
    <div className="analysis">
      <h2>Распределение заказов по статусам</h2>
      <div className="charts">
        <div className="chart-Donut">
          <h4>За весь срок</h4>
          <MyChartDonut
            name={[
              `${statusFiltr[0]} ${quantityStatus[0]}`,
              `${statusFiltr[1]} ${quantityStatus[1]}`,
              `${statusFiltr[2]} ${quantityStatus[2]}`,
            ]}
            quantity={quantityStatus}
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
