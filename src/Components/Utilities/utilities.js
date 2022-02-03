/* eslint-disable array-callback-return */

//Обработка дат
function DateSort(item1) {
  //Массив обрезанных дат всех заказов
  let dates = item1.deliveryOrders.map((elem) =>
    new Date(elem.createdTime).toISOString().slice(0, 10)
  );
  //Фильтрация и сортировка дат всех заказов
  let date = dates.filter((item, index) => {
    return dates.indexOf(item) === index;
  });
  const dateSort = date.sort();
  return dateSort;
}

//Количество заказов по дням
function TotalQuantityDay(item1, dateSort) {
  const totalQuantityDay = [];
  dateSort.map((item) => {
    let a = 0;
    for (let i = 0; i < item1.deliveryOrders.length; ++i) {
      let b = item1.deliveryOrders[i].createdTime.includes(item);

      if (b === true) {
        a++;
      }
    }
    totalQuantityDay.push(a);
  });
  return totalQuantityDay;
}

//Обработчик массива с данными
const handler = (arr) => {
  const Filtr = arr.filter((item, index) => {
    return arr.indexOf(item) === index;
  });
  //Список и количество
  let obj = [];
  Filtr.map((item, index) => {
    let a = 0;
    for (let i = 0; i < arr.length; ++i) {
      let b = arr[i].includes(item);
      if (b === true) {
        a++;
      }
    }
    let customObject = {
      id: index,
      name: item,
      quantity: a,
    };
    obj.push(customObject);
  });
  //Сортировка
  return obj.sort((prev, next) => next.quantity - prev.quantity);
};

export { DateSort, TotalQuantityDay, handler };
