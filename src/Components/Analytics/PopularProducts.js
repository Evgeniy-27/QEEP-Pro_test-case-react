/* eslint-disable array-callback-return */
import { handler } from "../Utilities/utilities";

function PopularProducts({ item1 }) {
  //Количество товаров
  const productsArr = [];
  item1.deliveryOrders.map((elem) =>
    elem.items.map((e) => productsArr.push(e.name))
  );

  //Количество добавок к товару
  const supplementArr = [];
  item1.deliveryOrders.map((elem) =>
    elem.items.map((e) => e.modifiers.map((i) => supplementArr.push(i.name)))
  );

  //Тело таблицы
  let tableItems = (arg) =>
    arg.map((item) => (
      <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.quantity}</td>
      </tr>
    ));

  return (
    <div className="analysis">
      <h2>Информация о популярных товарах</h2>

      <div className="cash">
        <div className="tabl">
          <h4>Список товаров по популярности</h4>
          <table>
            <thead>
              <tr>
                <td>Наименование товара</td>
                <td>Количество</td>
              </tr>
            </thead>
            <tbody>{tableItems(handler(productsArr))}</tbody>
          </table>
        </div>
        <div className="tabl">
          <h4>Список добавок по популярности</h4>
          <table>
            <thead>
              <tr>
                <td>Наименование добавок</td>
                <td>Количество</td>
              </tr>
            </thead>
            <tbody>{tableItems(handler(supplementArr))}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

PopularProducts.defaultProps = {
  items: [
    {
      id: 111,
      name: "Бро",
      quantity: 0,
    },
  ],
};

export default PopularProducts;
