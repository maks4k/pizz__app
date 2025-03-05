import "../style/app.scss";
import Categories from "./Categories";
import Header from "./Header";
import PizzaBlock from "./PizzaBlock";
import Sort from "./Sort";
import pizzas from "../assets/pizzas.json";
function App() {
  return (
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
            {pizzas.map(pizza=>(
             <PizzaBlock key={pizza.id} {...pizza}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
