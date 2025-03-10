import "../style/app.scss";
import Categories from "./Categories";
import ErrorBoundary from "./ErrorBoundary";
import Header from "./Header";
import PizzaBlock from "./PizzaBlock";
import Sort from "./Sort";
import { useEffect, useState } from "react";

function App() {
  const [pizzas, setPizzas] = useState([]);
  useEffect(() => {
    fetch("https://67cece81125cd5af757c0c7a.mockapi.io/items")
      .then((responce) => responce.json())
      .then((data) => setPizzas(data));
  }, []);

  return (
    <ErrorBoundary>
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzas.map((pizza) => (
              <PizzaBlock key={pizza.id} {...pizza} />
            ))}
          </div>
        </div>
      </div>
    </div>
    </ErrorBoundary>
  );
}

export default App;
