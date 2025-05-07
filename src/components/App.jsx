import "../style/app.scss";
import ErrorBoundary from "./ErrorBoundary";
import Layout from "./Layout";
import { useEffect, useState } from "react";
// import { Routes,Route,} from "react-router-dom";
// import useRoutesWrapper from "../hooks/useRoutesWrapper";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://67cece81125cd5af757c0c7a.mockapi.io/items")
      .then((response) => response.json())
      .then((data) => setPizzas(data))
      .finally(() => setLoading(false)) // исправлено: используя false вместо !loading
      .catch((error) => {
        alert(`ошибка запроса на сервер ${error.name}, ${error.message}`); // Обработка ошибок
      });
  }, []);

  // const routes = useRoutesWrapper();
  return (
    <ErrorBoundary>
      {/* <Layout> */}

      {/* {routes} */}
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home pizzas={pizzas} loading={loading}/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element="NotFound" />
        </Route>
      </Routes>
      {/* </Layout> */}
    </ErrorBoundary>
  );
}

export default App;
