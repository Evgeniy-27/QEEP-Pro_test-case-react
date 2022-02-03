function InfoPurchase({ item1 }) {
  //Массив с данными для таблицы 1
  let items = [];
  for (let i = 0; i < item1.deliveryOrders.length; i++) {
    if (item1.deliveryOrders[i].sum !== 0) {
      let customObject = {
        id: item1.deliveryOrders[i].orderId,
        name: item1.deliveryOrders[i].guests[0].name,
        quantity: item1.deliveryOrders[i].items.length,
        purchaseAmount: item1.deliveryOrders[i].sum,
      };
      items.push(customObject);
    }
  }

  //Массив с данными для таблицы 2
  let items2 = [];
  for (let i = 0; i < item1.deliveryOrders.length; i++) {
    if (
      item1.deliveryOrders[i].problem &&
      item1.deliveryOrders[i].items.length
    ) {
      let customObject = {
        id: item1.deliveryOrders[i].orderId,
        name: item1.deliveryOrders[i].guests[0].name,
        quantity: item1.deliveryOrders[i].items.length,
        purchaseAmount: item1.deliveryOrders[i].sum,
      };
      items2.push(customObject);
    }
  }

  //Тело таблицы
  let tableItems = (arg) =>
    arg.map((item) => (
      <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.quantity}</td>
        <td>{item.purchaseAmount}</td>
      </tr>
    ));

  //Итоговая сумма
  const getTotalPrice = (items) =>
    items.reduce((prev, item) => prev + item.purchaseAmount, 0);
//Количество заказов
    const blemOrders = (items) =>
    items.reduce((prev, item) => prev + item.quantity, 0);

  return (
    <div className="analysis">
      <h2>Информация о покупках</h2>
      <div className="cash">
        <div className="tabl">
          <h4>Завершенные заказы</h4>
          <table>
            <thead>
              <tr>
                <td>Имя клиента</td>
                <td>Количество товара</td>
                <td>Сумма покупки</td>
              </tr>
            </thead>
            <tbody>
              {tableItems(items)}
              <tr>
              <td>ИТОГО: </td>
                <td>{blemOrders(items)}</td>
                <td>{getTotalPrice(items)}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="tabl">
          <h4>Проблемные заказы</h4>
          <table>
            <thead>
              <tr>
                <td>Имя клиента</td>
                <td>Количество товара</td>
                <td>Сумма покупки</td>
              </tr>
            </thead>
            <tbody>
              {tableItems(items2)}
              <tr>
                <td>ИТОГО: </td>
                <td>{blemOrders(items2)}</td>
                <td>{getTotalPrice(items2)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

InfoPurchase.defaultProps = {
  items: [
    {
      id: 111,
      name: "Имя",
      quantity: 0,
      purchaseAmount: 0,
    },
  ],
};

export default InfoPurchase;
