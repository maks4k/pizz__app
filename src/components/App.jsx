import "../style/app.scss";
import ErrorBoundary from "./ErrorBoundary";
import Layout from "./Layout";
import { act, useEffect, useState } from "react";
import useRoutesWrapper from "../hooks/useRoutesWrapper";
import { Route, Routes } from "react-router-dom";
import Cart from "../pages/Cart";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import { createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Route, Routes } from "react-router-dom";
// import Home from "../pages/Home";
// import Cart from "../pages/Cart";
// import NotFound from "../pages/NotFound";
// import { routes } from "../utils/routes";
export const AppContext = createContext();

function App() {
const activeCategory=useSelector((state)=>state.filter.category)

  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
 
  const [activeSort, setActiveSort] = useState({
    type: 0,
    isUp: true,
  }); //состояние отоброжения видов сортировки
  const[search,setSearch]=useState("");
    const store={
          pizzas,
          setPizzas,
          loading,
          setLoading,
          activeSort,
          setActiveSort,
          setSearch
        }
  useEffect(() => {
    const category = activeCategory == 0 ? "" : activeCategory;
    const sort = ["rating", "price", "title"];
    const order = activeSort.isUp ? "asc" : "desc";
    // const search = "";

    Promise.all([
      fetch(
        `https://67cece81125cd5af757c0c7a.mockapi.io/items?category=${category}&sortBy=${
          sort[activeSort.type]
        }&order=${order}`
      ),
      fetch(
        `https://67cece81125cd5af757c0c7a.mockapi.io/items?search=${search}`
      ),
    ])
      .then(([sorted, searched]) =>
        Promise.all([sorted.json(), searched.json()])
      )
      .then(([sorted, searched]) => {
        const newData = sorted.filter((sortedItem) =>
          searched.some((searchedItem) => sortedItem.id == searchedItem.id)
        );
        setPizzas(newData);
      })
      .finally(() => setLoading(false))
      .catch((err) => {
        alert(`Ошибка запрсоа к сереверу:${err.message}`);
      });
  }, [activeCategory, activeSort,search]);

  //   fetch(
  //     `https://67cece81125cd5af757c0c7a.mockapi.io/items?category=${category}&sortBy=${sort[activeSort.type]}&order=${order}&search=${search}`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => setPizzas(data))
  //     .finally(() => setLoading(false)) // исправлено: используя false вместо !loading
  //     .catch((error) => {
  //       alert(`ошибка запроса на сервер: ${error.name}, ${error.message}`); // Обработка ошибок
  //     });
  // }, [activeCategory,activeSort]); //производить рендер только при изменении категории

  // const routes = useRoutesWrapper();

  return (
    <ErrorBoundary>
      {/* <>{routes}</> */}
      <AppContext.Provider
        value={store}
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </AppContext.Provider>
    </ErrorBoundary>
  );
}

export default App;
